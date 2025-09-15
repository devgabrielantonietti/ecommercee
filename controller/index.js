import { createCards } from "./createCards.js";

window.createCards = createCards;

document.addEventListener("DOMContentLoaded", ()=>{
    createCards('');
});