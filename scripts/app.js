let products =[
    {
    img:"Assets/img/cap1.jpg",
    name : "New Era Cap New York",
    descrption :"A New era cap model new york color red",
    stock : 5,
    price : 13.0
},
{
    img:"Assets/img/cap2.jpg",
    name : "New Era Cap New York",
    descrption :"A New era cap model new york color black",
    stock : 7,
    price : 14.0
},
{
    img:"Assets/img/cap3.jpg",
    name : "New Era Cap New York",
    descrption :"A New era cap model new york color blue",
    stock : 3,
    price : 20.0
},
{
    img:"Assets/img/cap4.jpg",
    name : "New Era Cap sox",
    descrption :"A New era cap model color black",
    stock : 5,
    price : 16.0
},
{
    img:"Assets/img/cap5.jpg",
    name : "New Era Cap Sox",
    descrption :"A New era cap model Sox color black",
    stock : 2,
    price : 10.0
},
{
    img:"Assets/img/cap6.jpg",
    name : "New Era Cap blue",
    descrption :"A New era cap color blue ski",
    stock : 4,
    price : 17.0
},
{
    img:"Assets/img/cap7.jpg",
    name : "New Era Cap Bulls",
    descrption :"A New era cap color Red",
    stock : 2,
    price : 15.0
},
{
    img:"Assets/img/cap8.jpg",
    name : "New Era Cap NBA",
    descrption :"A New era cap color Black",
    stock : 4,
    price : 10.0
},
{
    img:"Assets/img/cap9.jpg",
    name : "New Era Cap Green",
    descrption :"A New era cap color Green",
    stock : 6,
    price : 10.0
},
{
    img:"Assets/img/cap10.jpg",
    name : "New Era Cap Blue",
    descrption :"A New era cap Model IA Blue",
    stock : 2,
    price : 23.0
},
{
    img:"Assets/img/cap11.jpg",
    name : "New Era Cap Blue Ski",
    descrption :"A New era cap Model New York color Blue Ski",
    stock : 9,
    price : 10.0
},
{
    img:"Assets/img/cap12.jpg",
    name : "New Era Cap Pelicans",
    descrption :"A New era cap Pelicans color Green",
    stock : 8,
    price : 12.0
},
{
    img:"Assets/img/cap13.jpg",
    name : "New Era Cap Red",
    descrption :"A New era cap Model IA Red",
    stock : 2,
    price : 23.0
},
{
    img:"Assets/img/cap14.jpg",
    name : "New Era Cap Lakers",
    descrption :"A New era cap Lakers color Purple",
    stock : 4,
    price : 10.0
},
{
    img:"Assets/img/cap15.jpg",
    name : "New Era Cap Black",
    descrption :"A New era cap Model New York Black",
    stock : 3,
    price : 25.0
},
{
    img:"Assets/img/cap16.jpg",
    name : "New Era Cap Beige",
    descrption :"A New era cap Model Sox color Beige",
    stock : 6,
    price : 10.0
},
{
    img:"Assets/img/cap17.jpg",
    name : "New Era Cap NBA",
    descrption :"A New era cap Model NBA color Blue",
    stock : 9,
    price : 13.0
},
{
    img:"Assets/img/cap18.jpg",
    name : "New Era Cap Black",
    descrption :"A New era cap color Black-Purpel",
    stock : 5,
    price : 9.0
},
{
    img:"Assets/img/cap19.jpg",
    name : "New Era Cap Brown",
    descrption :"A New era cap Model P color Brown",
    stock : 4,
    price : 12.0
},
{
    img:"Assets/img/cap20.jpg",
    name : "New Era Cap Green",
    descrption :"A New era cap Model X color Green-Golden",
    stock : 1,
    price : 15.0
}]

//contenedor de las Cards
const Container = document.querySelector(".container")

//cointenedor carrito
const carrito = document.querySelector(".carrito")


//lista de productos en el carrito
let carProducts = []

//funcion para añadir al carrito
function addCar(id) {
    if (carProducts.includes(id)) {
        updateProduct(id, 1);
    } else {
        carProducts.push(id);
        let amount = 1;

        // Creamos el contenedor del producto
        let product = document.createElement("div");
        product.classList.add("product");
        product.id = `product-${id}`; // ID único basado en ID del producto

        // Establecemos el contenido HTML
        product.innerHTML = `
            <img src="${products[id].img}" alt="${products[id].name}">
            <h3>Nombre: ${products[id].name}</h3>
            <p>Cantidad:</p>
            <p class="amount">${amount}</p>
            <p class="price" data-price="${products[id].price}">$${products[id].price.toFixed(2)}</p>
            <div>
                <button type="button" onclick="updateProduct(${id}, -1)" class="btnProduct">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ff0000" class="icon icon-tabler-filled icon-tabler-arrow-badge-left"><path d="M17 6h-6a1 1 0 0 0 -.78 .375l-4 5a1 1 0 0 0 0 1.25l4 5a1 1 0 0 0 .78 .375h6a1 1 0 0 0 .669 -1.619l-3.501 -4.375l3.5 -4.375a1 1 0 0 0 -.78 -1.625z" /></svg>
                </button>
                <button type="button" onclick="updateProduct(${id}, 1)" class="btnProduct">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0091ff" class="icon icon-tabler-filled icon-tabler-arrow-badge-right"><path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" /></svg>
                </button>
            </div>
        `;
        carrito.appendChild(product);
    }
}


// actualizar carrito
function updateProduct(id, number) {
    let product = document.getElementById(`product-${id}`);
    let amountEl = product.querySelector(".amount");
    let priceEl = product.querySelector(".price");

    let priceBase = parseFloat(priceEl.getAttribute("data-price"));
    let currentAmount = parseInt(amountEl.textContent);
    let newAmount = currentAmount + number;

    if (newAmount < 1) return;
    amountEl.textContent = newAmount;
    priceEl.textContent = `$${(priceBase * newAmount).toFixed(2)}`;
}



// funcion para renderizar productos
function renderProducts() {
    products.forEach((element,index) => {
        let card = document.createElement(`div`)
        card.classList.add("card")
        card.innerHTML=`
           <img  tabindex="0" src="${element.img}" alt=${element.name}">
           <h3>${element.name}</h3>
           <p id ="description">${element.descrption}<p>
           <p>$ ${element.price}<p>
           <button type="button" onclick="addCar(${index})">Añadir al carrito</button>`
        Container.appendChild(card)
    });
}
renderProducts()