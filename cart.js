const SHIPPING_COST = 50;

function getCart() {
    return JSON.parse(localStorage.getItem('elite_cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('elite_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const cart = getCart();
    const cartContainer = document.querySelector('.cart-container');
    const emptyMessage = document.querySelector('.empty-cart-message');
    const tbody = document.querySelector('.cart-table tbody');

    if (cart.length === 0) {
        if (cartContainer) cartContainer.style.display = 'none';
        if (emptyMessage) emptyMessage.style.display = 'block';
        return;
    }

    if (cartContainer) cartContainer.style.display = 'grid';
    if (emptyMessage) emptyMessage.style.display = 'none';

    if (!tbody) return;

    tbody.innerHTML = cart.map((item, index) => {
        const itemTotal = item.price * item.quantity;
        return `
            <tr>
                <td data-label="Produs">
                    <div class="cart-product-info">
                        <img src="${item.img}" alt="${item.name}">
                        <span>${item.name}</span>
                    </div>
                </td>
                <td data-label="Preț" class="cart-price">${item.price} MDL</td>
                <td data-label="Cantitate">
                    <div class="quantity-control">
                        <button class="qty-btn minus" onclick="changeQuantity(${index}, -1)">-</button>
                        <input type="number" class="qty-input" value="${item.quantity}" min="1" readonly>
                        <button class="qty-btn plus" onclick="changeQuantity(${index}, 1)">+</button>
                    </div>
                </td>
                <td data-label="Total" class="cart-total">${itemTotal} MDL</td>
                <td data-label="Acțiune">
                    <button class="remove-btn" title="Șterge produsul" onclick="removeItem(${index})">&times;</button>
                </td>
            </tr>
        `;
    }).join('');

    calculateTotals(cart);
}

function calculateTotals(cart) {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const grandTotal = subtotal > 0 ? subtotal + SHIPPING_COST : 0;

    const subtotalEl = document.querySelector('.subtotal-val');
    const shippingEl = document.querySelector('.shipping-val');
    const grandTotalEl = document.querySelector('.grand-total-val');

    if (subtotalEl) subtotalEl.textContent = `${subtotal} MDL`;
    if (shippingEl) shippingEl.textContent = `${subtotal > 0 ? SHIPPING_COST : 0} MDL`;
    if (grandTotalEl) grandTotalEl.textContent = `${grandTotal} MDL`;
}

function changeQuantity(index, delta) {
    const cart = getCart();
    if (cart[index]) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        saveCart(cart);
        updateCartUI();
    }
}

function removeItem(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    updateCartUI();
}

function clearCart() {
    localStorage.removeItem('elite_cart');
    updateCartUI();
}

function addToCart(product) {
    const cart = getCart();
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += product.quantity || 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
            quantity: product.quantity || 1
        });
    }

    saveCart(cart);
    alert(`Produsul "${product.name}" a fost adăugat în coș!`);
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();

    const clearBtn = document.querySelector('.clear-cart-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (confirm('Sigur dorești să golești coșul?')) {
                clearCart();
            }
        });
    }

    const applyPromoBtn = document.querySelector('.apply-promo');
    if (applyPromoBtn) {
        applyPromoBtn.addEventListener('click', () => {
            const promoInput = document.querySelector('.promo-input');
            if (promoInput && promoInput.value.trim().toUpperCase() === 'ELITE10') {
                alert('Codul promoțional ELITE10 a fost aplicat cu succes!');
            } else {
                alert('Cod promoțional invalid.');
            }
        });
    }
});