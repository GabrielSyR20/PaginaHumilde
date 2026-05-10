import { series } from "./serie.js";

const seriesContainer = document.getElementById("series");

const buttonSiguiente = document.getElementById("siguiente");
const buttonAnterior = document.getElementById("anterior");


async function TraerSeries(id) {
    try {
        const respuesta = await fetch("https://api.tvmaze.com/shows");
        if (!respuesta.ok) {
            throw new Error("se murio");
        }

        const jsonRespuesta = await respuesta.json();
        const traerSerie = jsonRespuesta.find(s => s.id === id);
        if (!traerSerie) {
            throw new Error("no se encontro la serie");
        }
        const serie1 = new series(
            traerSerie.id,
            traerSerie.url,
            traerSerie.name,
            traerSerie.language,
            traerSerie.genres,
            traerSerie.image["medium"]
        );

        console.log(serie1.tojsonString());
        //const mainSeries = document.getElementById("series");
        seriesContainer.insertAdjacentElement("beforeend", serie1.createHtmlElement());

    } catch (error) {
        console.log("Error: " + error);
    }
}

function mostrarSeries(i = 1) {
    seriesContainer.replaceChildren();
    for (let index = i; index < i + 6; index++) {
            TraerSeries(index);
    }
}
mostrarSeries();

let paginaActual = 1;

function PaginaSiguiente(){
    paginaActual++;
    mostrarSeries(1 + (paginaActual - 1) * 6);
}

function PaginaAnterior(){
    if (paginaActual > 1) {
        paginaActual--;
        mostrarSeries(1 + (paginaActual - 1) * 6);
    }
}

buttonSiguiente.onclick = PaginaSiguiente;

buttonAnterior.onclick = PaginaAnterior;