import { series } from "./serie.js";

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
        
        const mainSeries = document.getElementById("series");
        mainSeries.insertAdjacentElement("beforeend", serie1.createHtmlElement());

    } catch (error) {
        console.log("Error: " + error);
    }
}
TraerSeries(1);
//const serie1 = TraerSeries(1);