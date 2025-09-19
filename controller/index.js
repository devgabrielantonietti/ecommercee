import { createCards } from "./createCards.js";
import { buscarInformacoes } from "../services/cards_services.js";
import { ordenarIMDB } from "./filtro.js";
import { ordenarRotten } from "./filtro.js";
import { attBD} from './bd.js';

window.createCards = createCards;
window.ordenarIMDB = ordenarIMDB;
window.ordenarRotten = ordenarRotten;

document.addEventListener("DOMContentLoaded", async ()=>{
    attBD(await buscarInformacoes());
    createCards('');
});