const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const loginButton = document.getElementById("login");
const mensajeButton = document.getElementById("mensajeError");

loginButton.onclick = (evento) => {
    evento.preventDefault();
    mensajeButton.textContent = "";
    
    const email = emailInput.value;
    const password = passwordInput.value;

    const jsonGuardado = localStorage.getItem("usuario");
    console.log(jsonGuardado);
    if (jsonGuardado){
        const usuarioRegister = JSON.parse(jsonGuardado);

        if (email === usuarioRegister.email 
        && password === usuarioRegister.password)
        {
            mensajeButton.textContent = "Login exitoso - " + usuarioRegister.nombre;
        }
        else{
            mensajeButton.textContent = "Usuario no encotrado";
        }

    }
}