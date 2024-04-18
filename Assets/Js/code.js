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

// Objetos Camionetas

let Gasolina_ford_f150 ={
    nombre: "Ford F-150",
    combustible: "Gasolina",
    cilindraje: "3,500 c.c",
    potencia: "290 hp",
    torque: "359.2 Nm",
    medidas: "1,960 mm (alto) 2,030 mm (ancho) 5,890 mm (largo)",
    rin: "(17 in)",
    precio: "$200.000.000",
    }
let Gasolina_toyota_tundra ={
    nombre: "Toyota Tundra",
    combustible: "Gasolina",
    cilindraje: "5,663 c.c",
    potencia: "375.81 hp",
    torque: "544 Nm",
    medidas: "Medidas: 1,935 mm (Alto) 2029 mm (Ancho) 5,814 mm (Largo)",
    rin: "Rines: (18 in)",
    precio: "Precio: $340.000.000",
    }
let Gasolina_nissan_frontier ={
    nombre: "Nissan Frontier",
    combustible: "Gasolina",
    cilindraje: "2,500 c.c",
    potencia: "158 hp",
    torque: "233 Nm",
    medidas: "1,803 mm (Altura) 1,850 (Ancho) 5,253 (Laargo)",
    rin: "(16 in)",
    precio: "$147.000.000",
    }
let Gasolina_dodge_ram ={
    nombre: "Dodge Ram 1500",
    combustible: "Gasolina",
    cilindraje: "5,654 c.c",
    potencia: "395 hp",
    torque: "548 Nm",
    medidas: "1,981 mm (alto) 2,093 mm (ancho) 6,060 mm (Largo)",
    rin: "(18 in)",
    precio: "$180.000.000",
    }
let Diesel_ford_f450 ={
    nombre: "Ford F-450 ",
    combustible: "Diesel",
    cilindraje: "6,700 c.c",
    potencia: "330 hp",
    torque: "1,288.03 Nm",
    medidas: "2,085 mm (Alto) 2,438 mm (Ancho) 6,751 mm (Largo)",
    rin: "(19.5 in)",
    precio: "$343.339.750",
    }
let Diesel_mitsubishi_l200 ={
    nombre: "Mitsubishi L200",
    combustible: "Diesel",
    cilindraje: "2,442 C.C",
    potencia: "136 hp",
    torque: "430 Nm",
    medidas: "1.815 mm (ancho)  1.795 mm (alto) 5.220 mm (largo)",
    rin: "(18 in)",
    precio: "$142.000.000",
    }
let Diesel_dodge_ram2500 ={
    nombre: "Dodge Ram 2500 Laramie",
    combustible: "Diesel",
    cilindraje: "6,708 c.c",
    potencia: "370 hp",
    torque: "1,152.45 Nm",
    medidas: "1,981 mm (alto) 2,093 mm (ancho) 6,060 mm (Largo)",
    rin: "(18 in)",
    precio: "$200.000.000",
    }
let Diesel_toyota_hilux ={
    nombre: "Toyota Hilux",
    combustible: "Diesel",
    cilindraje: "2,700 c.c",
    potencia: "166 hp",
    torque: "244.05 Nm",
    medidas: "1,815 mm (alto) 1,815 mm (ancho) 5,335 mm (Largo)",
    rin: "(17 in)",
    precio: "$190.000.000",
    }
let Electrica_ford_f150 ={
    nombre: "Ford F-150 Lightning",
    combustible: "Electrica",
    capacidad_bateria: "131 kWh",
    potencia: "562,24 Hp",
    torque: "1,050 Nm",
    medidas: "2,000 mm (alto) 2,030 mm (ancho) 5,890 mm (largo)",
    rin: "(17 in)",
    precio: "$279.445.951",
    }
let Electrica_jac_t8 ={
    nombre: "Jac T8 ",
    combustible: "Electrica",
    capacidad_bateria: "65,3 kWh",
    potencia: "140 hp",
    torque: "340 Nm",
    medidas: "1,830 mm (alto) 1,880 mm (ancho) 5,325 mm (largo)",
    rin: "(18 in)",
    precio: "$120.000.000",
    }
let Electrica_radar_rd6 ={
    nombre: "Radar RD6 EV",
    combustible: "Electrica",
    capacidad_bateria: "100 kWh",
    potencia: "268 hp",
    torque: "384 Nm",
    medidas: "1,865 mm (alto) 1,900 mm (ancho) 5,260 mm (largo)",
    rin: "(17 in)",
    precio: "$170.000.000",
    }
let Electrica_dongfeng_rich ={
    nombre: "Dongfeng Rich",
    combustible: "Electrica",
    capacidad_bateria: "67.09 kWh",
    potencia: "161 Hp",
    torque: "420 Nm",
    medidas: "1,820 mm (alto) 1,850 mm (ancho) 5,290 mm (largo)",
    rin: "(18 in)",
    precio: "$175.000.000",
    }

let camionetas = [Gasolina_ford_f150, Gasolina_toyota_tundra, Gasolina_nissan_frontier, Gasolina_dodge_ram, Diesel_ford_f450, Diesel_mitsubishi_l200, Diesel_dodge_ram2500, Diesel_toyota_hilux, Electrica_ford_f150, Electrica_jac_t8, Electrica_radar_rd6, Electrica_dongfeng_rich]

console.log(camionetas[11].nombre)
