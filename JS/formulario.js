document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector(".form"); 
    const botonEnviar = document.querySelector("#enviar"); 

    formulario.addEventListener("submit", (e) => {
        e.preventDefault(); 
        if (validarFormulario()) {
            alert("Formulario enviado correctamente.");
            formulario.submit(); 
        }
    });

    const validarFormulario = () => {
        let esValido = true;

        const nombre = document.querySelector("#nombre").value.trim();
        const email = document.querySelector("#email").value.trim();
        const dudas = document.querySelector("#dudas").value.trim();

     
        if (nombre === "") {
            mostrarError("nombre", "El nombre es obligatorio");
            esValido = false;
        } else {
            limpiarError("nombre");
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mostrarError("email", "El email no es válido");
            esValido = false;
        } else {
            limpiarError("email");
        }

    
        if (dudas === "") {
            mostrarError("dudas", "Por favor escribe tus dudas.");
            esValido = false;
        } else {
            limpiarError("dudas");
        }

        return esValido;
    };

    const mostrarError = (campoID, mensaje) => {
        const errorContainer = document.querySelector(`#error-${campoID}`);
        if (errorContainer) {
            errorContainer.innerHTML = mensaje;
            errorContainer.style.color = "red";
            errorContainer.style.fontSize = "0.9em";
            errorContainer.style.marginTop = "4px";
        }
    };

    const limpiarError = (campoID) => {
        const errorContainer = document.querySelector(`#error-${campoID}`);
        if (errorContainer) {
            errorContainer.innerHTML = "";
        }
    };
});
