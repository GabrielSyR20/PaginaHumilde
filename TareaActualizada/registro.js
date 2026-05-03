/**
 * 
 * @type {HTMLButtonElement}
 */
const registroBtn = document.querySelector(".ButtonRegistro");

/**
 * 
 * @type {HTMLInputElement}
 */
const nombreInput = document.querySelector("#nombre");
/**
 * 
 * @type {HTMLInputElement}
 */
const apellidoInput = document.querySelector("#apellido");
/**
 * 
 * @type {HTMLInputElement}
 */
const mailInput = document.querySelector("#email");
/**
 * 
 * @type {HTMLInputElement}
 */
const passwordInput = document.querySelector("#password");
/**
 * 
 * @type {HTMLInputElement}
 */
const passwordDobleInput = document.querySelector("#passwordDoble");
/**
 * 
 * @type {HTMLInputElement}
 */
const DNIInput = document.querySelector("#DNI");

const mensajeError = document.getElementById("mensaje")

DNIInput.addEventListener("input", (value) => {
    const valor = value.target.value.replace(/\D/g, "")
    value.target.value = valor.slice(0, 8)
})

registroBtn.addEventListener("click", (evento) =>{
    evento.preventDefault();
    mensajeError.textContent = "";

    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const email = mailInput.value;
    const password = passwordInput.value;
    const password2 = passwordDobleInput.value;
    const dni = DNIInput.value

    if (password.length < 8) {
        mensajeError.textContent = "La contraseña es muy corta";
        return;
    }
    if (!email.includes("@")) {
        mensajeError.textContent = "El email no es válido";
        return;
    }
    if (password != password2){
        mensajeError.textContent = "La contraseña no es la misma";
        return
    }
    mensajeError.textContent = "Registro exitoso!";

    const usuario ={
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        email: email,
        password: password
    };

    const jsonUsuario = JSON.stringify(usuario);

    localStorage.setItem("usuario", jsonUsuario);
});
