class VideoJuego {
    constructor(titulo, genero, duracion, plataforma, lanzamiento) {
        this.titulo = titulo;
        this.genero = genero;
        this.duracionHoras = duracionHoras;
        this.plataforma = plataforma;
        this.lanzamiento = lanzamiento;
    }

}

const listaVideojuegos = [{ titulo: "Diablo", genero: "Accion", duracionHoras: 120, plataforma: "Consolas", lanzamiento: 2023 },
{ titulo: "Half-life", genero: "Disparos", duracionHoras: 12, plataforma: "PC", lanzamiento: 1998 },
{ titulo: "The legend of Zelda", genero: "Aventuras", duracionHoras: 27, plataforma: "Consolas", lanzamiento: 1998 },
{ titulo: "Control", genero: "Accion", duracionHoras: 34, plataforma: "Consolas", lanzamiento: 2019 },
{ titulo: "Command & Conquer Remastered Collection", genero: "Estrategia", duracionHoras: 37, plataforma: "PC", lanzamiento: 2021 },
{ titulo: "God of war", genero: "Accion", duracionHoras: 14, plataforma: "Consolas", lanzamiento: 2005 },
{ titulo: "Silent hill", genero: "Terror", duracionHoras: 19, plataforma: "Consolas", lanzamiento: 2009 },
{ titulo: "Hades", genero: "Indie", duracionHoras: 49, plataforma: "PC", lanzamiento: 2020 },
{ titulo: "Uncharted", genero: "Aventuras", duracionHoras: 20, plataforma: "Consolas", lanzamiento: 2016 },
{ titulo: "Mortal kombat", genero: "Lucha", duracionHoras: 5, plataforma: "Consolas", lanzamiento: 2020 },
{ titulo: "Limbo", genero: "Indie", duracionHoras: 8, plataforma: "Consolas", lanzamiento: 2008 },
{ titulo: "Baldur's Gate", genero: "Rol", duracionHoras: 51, plataforma: "PC", lanzamiento: 2023 },
{ titulo: "Grid", genero: "Carreras", duracionHoras: 20, plataforma: "Consolas", lanzamiento: 2010 },
{ titulo: "Resident evil Remake", genero: "Terror", duracionHoras: 17, plataforma: "Consolas", lanzamiento: 2019 },
{ titulo: "Sifu", genero: "Indie", duracionHoras: 19, plataforma: "Consolas", lanzamiento: 2005 },
{ titulo: "Flight simulator", genero: "Simulacion", duracionHoras: 35, plataforma: "Consolas", lanzamiento: 2022 },

];

function mostrar() {

  for(let i =0; i<listaVideojuegos.length; i++){
        console.table(listaVideojuegos[i]);
  }
}

function buscarJuego() {
    let parametro = prompt("Ingrese el titulo a buscar:").trim().toLocaleUpperCase()
    let resultado = listaVideojuegos.find((juego) => juego.titulo.toLocaleUpperCase().includes(parametro))

    if (resultado != undefined) {
        console.table(resultado)
    } else {
        console.warn("No hay resultado con el nombre", parametro);   
    }
}

function buscarPorCategoria() {

    let parametro = prompt("Ingrese categoria:\n Accion \n Disparos \n Aventuras \n Estrategia \n Terror \n Lucha \n Indie \n Carreras \n Simulacion").trim().toLocaleUpperCase()
    let resultado = listaVideojuegos.filter((juego) => juego.genero.toLocaleUpperCase().includes(parametro))

    if (resultado.length > 0) {
        console.table(resultado)
    } else {
        console.warn("No hay resultado con el nombre", parametro);
    }
}

let opcion;
    do {
         opcion = parseInt(prompt("ingrese una opcion para comenzar:\n 1.Ultimos agregados \n 2.Buscar juego\n 3.Buscar por categoria \n 4.Para salir "))

    switch (opcion) {

        case 1:

            mostrar();
            break;

        case 2:
            buscarJuego();
            break;
        case 3:
            buscarPorCategoria();
            break;

            case 4:
                alert("Adios...")    
            break;
        default:
            alert("seleccione una opcion valida ")
            break;
    }
} while (opcion !=4);
