
async function TraerSeries() {
    try {
        const respuesta = await fetch("https://api.tvmaze.com/shows");
        if (!respuesta.ok) {
            throw new Error("se murio");
        }

        const jsonRespuesta = await respuesta.json();
    } catch (error) {
        
    }
}