document.addEventListener('DOMContentLoaded', function () {
    let botonMenuCatalogo = document.querySelectorAll('[data-boton-catalogo]');
    let menuSecundario = document.querySelector('.desplegable-secundario');

    // Función para ocultar el menú
    function ocultarMenu() {
        menuSecundario.style.display = 'none';
    }

    botonMenuCatalogo.forEach(boton => {
        boton.addEventListener('click', function (e) {
            e.stopPropagation(); // Detiene la propagación para evitar que se oculte inmediatamente
            menuSecundario.style.display = 'block';
            console.log("🚀 ~ menuSecundario:", menuSecundario);
            let lista = boton.getAttribute('data-boton-catalogo');
            console.log(lista);

            switch (lista) {
                case 'catalogo':
                    menuSecundario.innerHTML = `
                        <ul class="lista-segundo-menu">
                            <li><a class="link-gasolina" href="gasolina.html"> Gasolina </a></li>
                            <li><a class="link-diesel" href="diesel.html"> Diesel </a></li>
                            <li><a class="link-electrico" href="electrico.html"> Electrico </a></li>
                        </ul>`;
                    break;
                default:
                    ocultarMenu(); // Oculta el menú si no coincide con los casos
                    break;
            }
            console.log(lista);
        });
    });

    // Evento para ocultar el menú cuando se hace clic fuera de él
    document.addEventListener('click', ocultarMenu);

    const myOffcanvas = document.getElementById('offcanvasExample');
    myOffcanvas.addEventListener('hidden.bs.offcanvas', event => {
        ocultarMenu(); // Usa la función para ocultar el menú
    });
});