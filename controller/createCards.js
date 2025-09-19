import { filtrar } from "./filtro.js";

const cardsSection = document.getElementById("cards");

export async function createCards(filtro) {
    cardsSection.innerHTML = '';
    let bdCards = filtrar(filtro);
    for (let i = 0; i < bdCards.length; i++) {

        let card = document.createElement("div");
        card.className = "card";


        card.style.backgroundImage = `url(${bdCards[i].imagem})`;


        let titulo = document.createElement("h1");
        titulo.textContent = bdCards[i].nome;
        card.appendChild(titulo);


        let descricaoCard = document.createElement("div");
        descricaoCard.className = "descricao_card";

        let produtor = document.createElement("h5");
        produtor.textContent = bdCards[i].diretor;
        descricaoCard.appendChild(produtor);

        let genero = document.createElement("h6");
        genero.textContent = bdCards[i].genero;
        descricaoCard.appendChild(genero);


        let numeros = document.createElement("div");
        numeros.className = "numeros_card";

        let tempo = document.createElement("p");
        tempo.innerHTML = `<i class="fa-regular fa-clock" style="color:#fff;"></i> ${bdCards[i].duracao}`;
        numeros.appendChild(tempo);

        let imdb = document.createElement("p");
        imdb.innerHTML = `<i class="fa-solid fa-star" style="color:#FFD43B;"></i> ${bdCards[i].nota_imdb}`;
        numeros.appendChild(imdb);

        let rotten = document.createElement("p");
        rotten.innerHTML = `<i class="fa-solid fa-apple-whole" style="color:#e00000;"></i> ${bdCards[i].avaliacao_rotten_tomatoes}`;
        numeros.appendChild(rotten);

        descricaoCard.appendChild(numeros);
        card.appendChild(descricaoCard);


        let descricaoExtra = document.createElement("div");
        descricaoExtra.className = "descricao_extra";
        descricaoExtra.textContent = bdCards[i].descricao;
        card.appendChild(descricaoExtra);


        cardsSection.appendChild(card);
    }
}
