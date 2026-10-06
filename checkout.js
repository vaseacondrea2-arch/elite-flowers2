document.addEventListener('DOMContentLoaded', () => {
    const cart = typeof getCart === 'function' ? getCart() : [];
    const itemsListContainer = document.getElementById('checkout-items-list');
    const subtotalEl = document.getElementById('checkout-subtotal');
    const shippingEl = document.getElementById('checkout-shipping');
    const grandTotalEl = document.getElementById('checkout-grand-total');

    // Dacă coșul este gol, redirecționăm utilizatorul la magazin
    if (!cart || cart.length === 0) {
        alert('Coșul tău este gol! Te redirecționăm către magazin.');
        window.location.href = 'shop.html';
        return;
    }

    // Afișăm produsele în sumar
    if (itemsListContainer) {
        itemsListContainer.innerHTML = cart.map(item => `
            <div class="checkout-item">
                <img src="${item.img}" alt="${item.name}">
                <div class="checkout-item-info">
                    <h4>${item.name}</h4>
                    <p>Cantitate: ${item.quantity}</p>
                </div>
                <div class="checkout-item-price">${item.price * item.quantity} MDL</div>
            </div>
        `).join('');
    }

    // Calculăm și afișăm totalurile
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 50;
    const grandTotal = subtotal + shipping;

    if (subtotalEl) subtotalEl.textContent = `${subtotal} MDL`;
    if (shippingEl) shippingEl.textContent = `${shipping} MDL`;
    if (grandTotalEl) grandTotalEl.textContent = `${grandTotal} MDL`;

    // Schimbare opțiuni de plată vizual
    const paymentRadios = document.querySelectorAll('input[name="payment"]');
    paymentRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            document.querySelectorAll('.payment-card').forEach(card => card.classList.remove('active'));
            e.target.closest('.payment-card').classList.add('active');
        });
    });

    // Trimiterea formularului
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const fullname = document.getElementById('fullname').value;
            alert(`Mulțumim, ${fullname}! Comanda ta a fost plasată cu succes. Te vom contacta în cel mai scurt timp pentru confirmare.`);
            
            // Golește coșul după plasarea comenzii
            if (typeof clearCart === 'function') {
                clearCart();
            } else {
                localStorage.removeItem('elite_cart');
            }

            window.location.href = 'index.html';
        });
    }
});