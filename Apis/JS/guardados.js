import { series } from "./serie.js";

const seriesContainer = document.getElementById("series");

const jsonSeries = localStorage.getItem("series");

if (jsonSeries) {
    const seriesArray = JSON.parse(jsonSeries);
    //const seriesArray = series.createFromJsonString(jsonSeries);
    console.log(seriesArray[1].name);
    console.log(seriesArray[5].id);
    console.log(seriesArray);
    //for (let i = 0; i < seriesArray.length; i++) {
    //    const serie1 = new series(
    //        seriesArray[i].id,
    //        seriesArray[i].url,
    //        seriesArray[i].name,
    //        seriesArray[i].language,
    //        seriesArray[i].genres,
    //        seriesArray[i].image
    //    );
    //    console.log(serie1[i].name)
    //    //seriesContainer.insertAdjacentElement("beforebegin", serie1.createHtmlElement());
    //}
    seriesArray.forEach((serie) => {
        seriesContainer.insertAdjacentElement("beforebegin", serie.createHtmlElement())
    });
}

