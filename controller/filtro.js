import { bd } from "./bd.js";
import { createCards } from "./createCards.js";

export function filtrar(filtro) {
    let novoBanco = [];
    if (filtro === '') {
        return bd;
    } else {
        for (let i = 0; i < bd.length; i++) {
            if (bd[i].genero.includes(filtro)) {
                novoBanco.push(bd[i]);
            }
        }
        return novoBanco;
    }
}

export function ordenarIMDB() {
    let contagem = bd.length - 1;
    for (let voltas = 0; voltas < bd.length; voltas++) {
        for (let i = 0; i < contagem; i++) {
            if (bd[i].nota_imdb < bd[i + 1].nota_imdb) {
                let aux = bd[i];
                bd[i] = bd[i + 1];
                bd[i + 1] = aux;
            }
        }
        contagem--;
    }
    createCards('');
}

export function ordenarRotten() {
    let contagem = bd.length - 1;
    for (let voltas = 0; voltas < bd.length; voltas++) {
        for (let i = 0; i < contagem; i++) {
            if (bd[i].avaliacao_rotten_tomatoes < bd[i + 1].avaliacao_rotten_tomatoes) {
                let aux = bd[i];
                bd[i] = bd[i + 1];
                bd[i + 1] = aux;
            }
        }
        contagem--;
    }
    createCards('');
}