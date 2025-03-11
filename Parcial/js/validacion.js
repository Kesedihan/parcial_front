function validarForm() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let nacimiento = document.getElementById("nacimiento").value;
    let estrato = document.getElementById("Estrato").value;
    let opciones = document.getElementById("opciones").value; // select
    let genero = document.querySelector('input[name="genero"]:checked'); // radio

    let regexApellido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Solo letras y espacios
    let regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Solo letras y espacios
    let regexTelefono = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/; // Solo 10 digitos
    let regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Formato de email
    let mensaje = "";

    if (!regexNombre.test(nombre)) {
        mensaje += "El nombre no es valido.\n";
    } else {
        mensaje += "Nombre Valido.\n"
    }
    if (!regexApellido.test(apellido)) {
        mensaje += "El apellido no es valido.\n";
    } else {
        mensaje += "Apellido Valido.\n"
    }
    if (!regexTelefono.test(telefono)) {
        mensaje += "El telefono no es valido.\n";
    } else {
        mensaje += "Telefono Valido.\n"
    }

    if (!regexCorreo.test(correo)) {
        mensaje += "El correo no es valido.\n";
    } else {
        mensaje += "Correo Valido.\n"
    }
    if (!nacimiento) {
        mensaje += "La fecha de nacimiento no puede estar vacía.\n";
    } else {
        mensaje += "Fecha de nacimiento válida.\n";
    }
    if (!estrato || isNaN(estrato)) {
        mensaje += "El estrato no es válido. Debe ser un número.\n";
    } else {
        mensaje += "Estrato válido.\n";
    }
    // Validación de select (opciones)
    if (opciones === "" || opciones === "Seleccione una opción") {
        mensaje += "Debe seleccionar una opción en el select.\n";
    } else {
        mensaje += "Opción seleccionada en el select.\n";
    }

    // Validación de radio (género)
    if (!genero) {
        mensaje += "Debe seleccionar un género.\n";
    } else {
        mensaje += "Género seleccionado.\n";
    }


    alert(mensaje);

}