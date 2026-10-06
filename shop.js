const products = [
    { id: 1, name: "Trandafiri Roșii", price: 90, img: "images/floare.png", desc: "Buchet clasic și pasional din trandafiri roșii eleganți, alegerea perfectă pentru a exprima dragostea sinceră." },
    { id: 2, name: "Lisianthus (Eustoma)", price: 70, img: "images/vis-de-vara.png", desc: "Aranjament delicat de eustoma (lisianthus) în nuanțe suave de violet și alb, plin de grație și prospețime." },
    { id: 3, name: "Gerbera Roz", price: 50, img: "images/eleganta-clasica.png", desc: "Gerbera roz vibrante și pline de energie, ideale pentru a aduce un zâmbet și o notă de veselie." },
    { id: 4, name: "Lalele Roz", price: 40, img: "images/oaza-albastra.png", desc: "Buchet primăvăratic din lalele roz fine, ce simbolizează afecțiunea, gingășia și atașamentul." },
    { id: 5, name: "Frezii Multicolore", price: 50, img: "images/armonie-florala.png", desc: "Mix multicolor și parfumat de frezii elegante, ce aduc o explozie de culoare și un miros deosebit." },
    { id: 6, name: "Crizanteme Albe", price: 70, img: "images/cer-senin.png", desc: "Crizanteme albe bogate și luminoase, un simbol al purității, sincerității și gândurilor curate." },
    { id: 7, name: "Bujori Roz", price: 80, img: "images/paradis-nocturn.png", desc: "Bujori roz spectaculoși cu petale bogate, un cadou luxuriant pentru momente cu adevărat speciale." },
    { id: 8, name: "Hortensie Albastră", price: 150, img: "images/primavara-albastra.png", desc: "Hortensie albastră impunătoare și voluminoasă, ce impresionează prin culoarea sa unică și eleganța simplă." },
    { id: 9, name: "Gypsophila (Floarea Miresei)", price: 60, img: "images/buchet-regal.png", desc: "Nor fin și vaporos din gypsophila (floarea miresei) albă, ce creează un efect aerisit și de basm." },
    { id: 10, name: "Trandafiri Piersică", price: 90, img: "images/safir-floral.png", desc: "Trandafiri într-o nuanță caldă de piersică/crem, perfecți pentru a exprima recunoștința și admirația." },
    { id: 11, name: "Crizanteme Violet", price: 70, img: "images/natura-pura.png", desc: "Crizanteme mov/lila bogate, ce oferă o rezistență excelentă și un aspect plin de culoare." },
    { id: 12, name: "Crini Albi", price: 200, img: "images/esenta-albastra.png", desc: "Crini albi maiestuoși și rafinați, recunoscuți pentru eleganța lor regală și parfumul inconfundabil." }
];

const grid = document.getElementById('shop-products-grid');

if (grid) {
    grid.innerHTML = products.map((p, index) => `
        <div class="product-card hidden" style="transition-delay: ${(index % 3) * 0.15}s;" onclick="window.location.href='product.html?id=${p.id}'">
            <div class="product-img-wrapper">
                <img src="${p.img}" alt="${p.name}">
            </div>
            <div class="product-info">
                <h3>${p.name}</h3>
                <p class="price">${p.price} MDL</p>
                <div style="display: flex; gap: 10px;">
                    <button class="add-to-cart" onclick="event.stopPropagation(); addToCart({id: ${p.id}, name: '${p.name.replace(/'/g, "\\'")}', price: ${p.price}, img: '${p.img}'})">În Coș</button>
                    <button class="add-to-cart" style="background: transparent; color: var(--primary-blue); border: 1px solid var(--primary-blue);" onclick="event.stopPropagation(); window.location.href='product.html?id=${p.id}'">Detalii</button>
                </div>
            </div>
        </div>
    `).join('');
}