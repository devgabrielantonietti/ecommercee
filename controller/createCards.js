const cardsSection = document.getElementById("cards");

export function createCards() {
    for (let i = 0; i < 25; i++) {

        let card = document.createElement("div");
        card.className = "card";

        const imagensTeste = [
            "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
        ];


        card.style.backgroundImage = `url(${imagensTeste[i]})`;


        let titulo = document.createElement("h1");
        titulo.textContent = "Título do Filme";
        card.appendChild(titulo);


        let descricaoCard = document.createElement("div");
        descricaoCard.className = "descricao_card";

        let produtor = document.createElement("h5");
        produtor.textContent = "Produtor";
        descricaoCard.appendChild(produtor);

        let genero = document.createElement("h6");
        genero.textContent = "Gênero";
        descricaoCard.appendChild(genero);


        let numeros = document.createElement("div");
        numeros.className = "numeros_card";

        let tempo = document.createElement("p");
        tempo.id = "tempo";
        tempo.innerHTML = `<i class="fa-regular fa-clock" style="color:#fff;"></i> 2h`;
        numeros.appendChild(tempo);

        let imdb = document.createElement("p");
        imdb.id = "imdb";
        imdb.innerHTML = `<i class="fa-solid fa-star" style="color:#FFD43B;"></i> 8.0`;
        numeros.appendChild(imdb);

        let rotten = document.createElement("p");
        rotten.id = "rotten";
        rotten.innerHTML = `<i class="fa-solid fa-apple-whole" style="color:#e00000;"></i> 94%`;
        numeros.appendChild(rotten);

        descricaoCard.appendChild(numeros);
        card.appendChild(descricaoCard);


        let descricaoExtra = document.createElement("div");
        descricaoExtra.className = "descricao_extra";
        descricaoExtra.textContent = "Descrição detalhada do card.";
        card.appendChild(descricaoExtra);


        cardsSection.appendChild(card);
    }
}
