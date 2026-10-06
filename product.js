const productsList = [
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

const urlParams = new URLSearchParams(window.location.search);
const productId = Number(urlParams.get('id'));

const currentProduct = productsList.find(p => p.id === productId) || productsList[0];
const detailContainer = document.getElementById('product-detail');

if (detailContainer && currentProduct) {
    detailContainer.innerHTML = `
        <div class="product-gallery">
            <div class="main-image-wrapper">
                <img id="main-product-img" src="${currentProduct.img}" alt="${currentProduct.name}">
            </div>
        </div>
        <div class="product-details-info">
            <h1>${currentProduct.name}</h1>
            <p class="product-detail-price">${currentProduct.price} MDL</p>
            <p class="product-description">${currentProduct.desc}</p>
            <div class="stock-status">Disponibilitate: În Stoc (Livrare rapidă)</div>
            <button class="cta-btn" onclick="addToCart(currentProduct)">Adaugă în Coș</button>
        </div>
    `;
}