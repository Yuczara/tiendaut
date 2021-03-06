$(document).ready(function() {
    $("#btnRegistro").click(function(e) {
        e.preventDefault();
        mostrarDato();
    });

    async function mostrarDato() {
        const datos = new FormData(document.getElementById('registro'));

        await fetch('assets/data/registro.php', {
                method: 'POST',
                body: datos
            })
            .then(response => response.json()) //mandar llamar y enviar los datos
            .then(response => {
                if (response.dato == 'ok') {
                    alert("Registro insertado");
                    location.href = "index.html"

                } else {
                    alert("Datos Incorrectos");
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
});