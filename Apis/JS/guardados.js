import { series } from "./serie.js";

const seriesContainer = document.getElementById("series");
const buttonOrdenarNombre = document.getElementById("orderNombre");
const buttonOrdenarId = document.getElementById("orderId");
let seriesArray = [];

const jsonSeries = localStorage.getItem("series");

if (jsonSeries) {
    //const seriesArray = JSON.parse(jsonSeries);
    seriesArray = series.createFromJsonString(jsonSeries);
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
    render();

}

function render(){
    //seriesContainer.innerHTML = "";
    document.querySelectorAll(".serie-card").forEach(card => card.remove());
    seriesArray.forEach(serie => {
        seriesContainer.insertAdjacentElement("beforeend", serie.createHtmlElement())
    });
}

buttonOrdenarNombre.addEventListener("click", () => {
    seriesArray.sort((a, b) => a.name.localeCompare(b.name)); 
    render();
})

buttonOrdenarId.addEventListener("click", () => {
    seriesArray.sort((a, b) => a.id - b.id);
    render();
})


