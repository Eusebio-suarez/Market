import { products } from "./products.js";

//contenedor de las Cards
const Container = document.querySelector(".container")

function renderProducts() {
    products.forEach(element => {
        let card = document.createElement(`div`)
        card.classList.add("card")
        card.innerHTML=`
           <img  tabindex="0" src="${element.img}" alt=${element.name}">
           <h3>${element.name}</h3>
           <p id ="description">${element.descrption}<p>
           <p>$ ${element.price}<p>
           <button type="button">Añadir al carrito</button>`
        Container.appendChild(card)
    });
}
renderProducts()
