console.log("asddddddd")
const getElement = document.getElementById("GET");

const img1 = document.querySelector("img");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");

async function ObtenerImgPorId(img ,id) {
    try {
        const response = await fetch("https://api.tvmaze.com/shows")
        if (!response.ok){
            throw new Error("Error no se cargaron los usuarios");
        }

        const jsonUsu = await response.json();
        const usu = jsonUsu.find( u => u.id === id);
        if (!usu) {
            throw new Error("No id");
        }

        img.src = usu.image["medium"];

    } catch (error) {
        console.log("Error: " + error);
    }
}

ObtenerImgPorId(img1, 1)
ObtenerImgPorId(img2, 2)
ObtenerImgPorId(img3, 3)
ObtenerImgPorId(img4, 4)

getElement.addEventListener("click", async(ev) => {
    const response = await fetch("https://api.tvmaze.com/shows")
    const jsonResponse = await response.json();

    console.log(jsonResponse)
});