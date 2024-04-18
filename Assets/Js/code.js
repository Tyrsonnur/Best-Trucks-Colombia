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

// Objetos Camionetas -- Pagina Comparativa

let Gasolina_ford_f150 ={
    nombre: "Ford F-150",
    combustible: "Gasolina",
    potencia: "290 hp",
    torque: "359.2 Nm",
    medidas: "1,960 mm (alto) 2,030 mm (ancho) 5,890 mm (largo)",
    rin: "(17 in)",
    precio: "$200.000.000",
    }
let Gasolina_toyota_tundra ={
    nombre: "Toyota Tundra",
    combustible: "Gasolina",
    potencia: "375.81 hp",
    torque: "544 Nm",
    medidas: "Medidas: 1,935 mm (Alto) 2029 mm (Ancho) 5,814 mm (Largo)",
    rin: "Rines: (18 in)",
    precio: "Precio: $340.000.000",
    }
let Gasolina_nissan_frontier ={
    nombre: "Nissan Frontier",
    combustible: "Gasolina",
    potencia: "158 hp",
    torque: "233 Nm",
    medidas: "1,803 mm (Altura) 1,850 (Ancho) 5,253 (Laargo)",
    rin: "(16 in)",
    precio: "$147.000.000",
    }
let Gasolina_dodge_ram ={
    nombre: "Dodge Ram 1500",
    combustible: "Gasolina",
    potencia: "395 hp",
    torque: "548 Nm",
    medidas: "1,981 mm (alto) 2,093 mm (ancho) 6,060 mm (Largo)",
    rin: "(18 in)",
    precio: "$180.000.000",
    }
let Diesel_ford_f450 ={
    nombre: "Ford F-450 ",
    combustible: "Diesel",
    potencia: "330 hp",
    torque: "1,288.03 Nm",
    medidas: "2,085 mm (Alto) 2,438 mm (Ancho) 6,751 mm (Largo)",
    rin: "(19.5 in)",
    precio: "$343.339.750",
    }
let Diesel_mitsubishi_l200 ={
    nombre: "Mitsubishi L200",
    combustible: "Diesel",
    potencia: "136 hp",
    torque: "430 Nm",
    medidas: "1.815 mm (ancho)  1.795 mm (alto) 5.220 mm (largo)",
    rin: "(18 in)",
    precio: "$142.000.000",
    }
let Diesel_dodge_ram2500 ={
    nombre: "Dodge Ram 2500 Laramie",
    combustible: "Diesel",
    potencia: "370 hp",
    torque: "1,152.45 Nm",
    medidas: "1,981 mm (alto) 2,093 mm (ancho) 6,060 mm (Largo)",
    rin: "(18 in)",
    precio: "$200.000.000",
    }
let Diesel_toyota_hilux ={
    nombre: "Toyota Hilux",
    combustible: "Diesel",
    potencia: "166 hp",
    torque: "244.05 Nm",
    medidas: "1,815 mm (alto) 1,815 mm (ancho) 5,335 mm (Largo)",
    rin: "(17 in)",
    precio: "$190.000.000",
    }
let Electrica_ford_f150 ={
    nombre: "Ford F-150 Lightning",
    combustible: "Electrica",
    potencia: "562,24 Hp",
    torque: "1,050 Nm",
    medidas: "2,000 mm (alto) 2,030 mm (ancho) 5,890 mm (largo)",
    rin: "(17 in)",
    precio: "$279.445.951",
    }
let Electrica_jac_t8 ={
    nombre: "Jac T8 ",
    combustible: "Electrica",
    potencia: "140 hp",
    torque: "340 Nm",
    medidas: "1,830 mm (alto) 1,880 mm (ancho) 5,325 mm (largo)",
    rin: "(18 in)",
    precio: "$120.000.000",
    }
let Electrica_radar_rd6 ={
    nombre: "Radar RD6 EV",
    combustible: "Electrica",
    potencia: "268 hp",
    torque: "384 Nm",
    medidas: "1,865 mm (alto) 1,900 mm (ancho) 5,260 mm (largo)",
    rin: "(17 in)",
    precio: "$170.000.000",
    }
let Electrica_dongfeng_rich ={
    nombre: "Dongfeng Rich",
    combustible: "Electrica",
    potencia: "161 Hp",
    torque: "420 Nm",
    medidas: "1,820 mm (alto) 1,850 mm (ancho) 5,290 mm (largo)",
    rin: "(18 in)",
    precio: "$175.000.000",
    }

let ObjetoFormulario = {
    nombre: "Selecciona camioneta"
}


let opt_1 = [ObjetoFormulario, Gasolina_ford_f150,Gasolina_toyota_tundra,Gasolina_nissan_frontier, Gasolina_dodge_ram]
let opt_2 = [ObjetoFormulario, Diesel_ford_f450,Diesel_mitsubishi_l200,Diesel_dodge_ram2500,Diesel_toyota_hilux]
let opt_3 = [ObjetoFormulario, Electrica_ford_f150, Electrica_jac_t8, Electrica_radar_rd6, Electrica_dongfeng_rich]

let camionetas = [opt_1,opt_2,opt_3]

console.log(opt_1[1].nombre)

function camioneta_comparar1() {
    let seleccionado = document.forms["seleccionar_camioneta_1"]["seleccionado"].value;

    if (seleccionado != 0) {
        let mis_opciones;
        if (seleccionado === "1") {
            mis_opciones = opt_1;
        } else if (seleccionado === "2") {
            mis_opciones = opt_2;
        } else if (seleccionado === "3") {
            mis_opciones = opt_3;
        }

        let numero_opciones = mis_opciones.length;

        let selectOpt = document.forms["seleccionar_camioneta_1"]["opt"];
        selectOpt.length = numero_opciones;

        for (let i = 0; i < numero_opciones; i++) {
            selectOpt.options[i].value = mis_opciones[i].nombre;
            selectOpt.options[i].text = mis_opciones[i].nombre;
        }
    } else {
        let selectOpt = document.forms["seleccionar_camioneta_1"]["opt"];
        selectOpt.length = 1;
        selectOpt.options[0].value = "Selecciona camioneta";
        selectOpt.options[0].text = "Selecciona camioneta"
    }

    document.forms["seleccionar_camioneta_1"]["opt"].options[0].selected = true;
}

function camioneta_comparar2() {
    let seleccionado2 = document.forms["seleccionar_camioneta_2"]["seleccionado2"].value;

    if (seleccionado2 != 0) {
        let mis_opciones;
        if (seleccionado2 === "1") {
            mis_opciones = opt_1;
        } else if (seleccionado2 === "2") {
            mis_opciones = opt_2;
        } else if (seleccionado2 === "3") {
            mis_opciones = opt_3;
        }

        let numero_opciones = mis_opciones.length;

        let selectOpt = document.forms["seleccionar_camioneta_2"]["opt"];
        selectOpt.length = numero_opciones;

        for (let i = 0; i < numero_opciones; i++) {
            selectOpt.options[i].value = mis_opciones[i].nombre;
            selectOpt.options[i].text = mis_opciones[i].nombre;
        }
    } else {
        let selectOpt = document.forms["seleccionar_camioneta_2"]["opt"];
        selectOpt.length = 1;
        selectOpt.options[0].value = "Selecciona camioneta";
        selectOpt.options[0].text = "Selecciona camioneta"
    }

    document.forms["seleccionar_camioneta_2"]["opt"].options[0].selected = true;
}

const select1 = document.forms["seleccionar_camioneta_1"]["seleccionado"];
const select2 = document.forms["seleccionar_camioneta_2"]["seleccionado2"];

select1.addEventListener('change', camioneta_comparar1);
select2.addEventListener('change', camioneta_comparar2)

