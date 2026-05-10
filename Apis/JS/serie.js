export class series{
    constructor(id, url, name, lenguage, generes, Image){
        this.id = id;
        this.url = url;
        this.name = name;
        this.lenguage = lenguage;
        this.generes = generes;
        this.Image = Image;
    }
    tojsonString(){
        return JSON.stringify(this);
    }

    static createFromJsonString(json){
        //const obj = JSON.parse(json)
        //return new series(
        //    obj.id, obj.url, obj.name,
        //    obj.lenguage, obj.generes, obj.Image
        //);
        //return new series(obj);

    const array = JSON.parse(json);
    return array.map(obj =>
        new series(
            obj.id,
            obj.url,
            obj.name,
            obj.lenguage,
            obj.generes,
            obj.Image
        )
    );
    }

    createHtmlElement(){
        const div = document.createElement("div");
        div.classList.add("serie-card");
        div.innerHTML = `
            <a href="${this.url}" target="_blank">
                <img src="${this.Image}" alt="${this.name}">
            </a>
            <h2>${this.name}</h2>
            <p>Language: ${this.lenguage}</p>
            <p>Genres: ${this.generes.join(", ")}</p>
        `;
        const buttonGuardar = document.createElement("button");
        buttonGuardar.textContent = "Guardar";
        buttonGuardar.onclick = () => {this.guardarSerie()}

        div.appendChild(buttonGuardar);
        //const titulo = document.createElement("h2");
        //titulo.textContent = this.name;
        //
        //const lenguage = document.createElement("p");
        //lenguage.textContent = this.lenguage;
        //
        //const generes = document.createElement("p");
        //generes.textContent = "Generos: " + this.generes.join(", ");
        //
        //const img = document.createElement("img");
        //img.src = this.Image;
        //img.alt = this.name;
        //
        //div.appendChild(titulo);
        //div.appendChild(lenguage);
        //div.appendChild(generes);
        //div.appendChild(img);
        return div;
        
    }
    
    guardarSerie(){
        console.log(this.name);
        let arrayAnteriorString = localStorage.getItem("series");
        let array = JSON.parse(arrayAnteriorString);
        if (!array) {
        array = [];
        }

        const serieRepetida = array.some(serie => serie.id === this.id);
        if(serieRepetida){
            throw new Error("Serie repetida");
        }

        array.push(this);

        localStorage.setItem("series", JSON.stringify(array));
    }
}

//console.log("Serie class created");
//const serie1 = new series(1, "https://www.tvmaze.com/shows/1/under-the-dome", "Under the Dome", "English", ["Drama", "Science-Fiction", "Thriller"], "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg");
//console.log(serie1.tojsonString());
//console.log(serie1.createHtmlElement());