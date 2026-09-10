/* 
Bloque 1: variables y tipos de datos
Bloque 2: Arrays y objetos 
Bloque 3: Pescar elementos del HTML (del DOM)
Bloque 4: Funciones
Bloque 5: Condicionales y validaciones
Bloque 6: Eventos
*/

// #region Bloque 1 

const nombreEscuela = "UTN - FRP";
const anioLectivo = 2026; 
const cursoActivo = true; 
const Nota_Minima_Aprobado=6;

console.log("Escuela",nombreEscuela, "| tipo:", typeof nombreEscuela);
console.log("Año",anioLectivo, "| tipo:", typeof anioLectivo);
console.log("Curso",cursoActivo, "| tipo:", typeof cursoActivo);

//templats literals usan comillas invertidas (alt+96) o backticks
console.log(`Bienvenidos a ${nombreEscuela}, ciclo ${anioLectivo}`);
// #endregion

//#region Bloque 2 
const materias = [ "Matematicas" , "Lengua" , "Programación" , "Historia"]; 
console.log("Tenemos " + materias.length + " materias. La primera es "+ materias[0]);

let alumnos = [];
let proximoId= 1;
//#endregion

//#region Bloque 3

const formAlumno = document.getElementById("formAlumno");
const inputNombre = document.getElementById("inputNombre");
const selectMateria = document.getElementById("selectMateria");
const inputNota = document.getElementById("inputNota");
const mensaje = document.getElementById("mensaje");
const filtroMateria = document.getElementById("filtroMateria");
const cuerpoTabla = document.getElementById("cuerpoTable");
const totalAlumnos = document.getElementById("totalAlumnos");
const promedioGeneral = document.getElementById("promedioGeneral");
const totalAprobados = document.getElementById("totalAprobados");

//#endregion

//#region Bloque 4

function cargarMaterias(){
    selectMateria.innerHTML = "<option value=''>Elegi una materia</option>";
    filtroMateria.innerHTML = "<option value='todas'>Todas las materias</option>";

    for (const materia of materias){
        const opcion = document.createElement("option");
        opcion.value = materia;
        opcion.textContent = materia;
        selectMateria.appendChild(opcion);

        const opcionFiltro = document.createElement("option");
        opcionFiltro.value = materia;
        opcionFiltro.textContent = materia;
        filtroMateria.appendChild(opcionFiltro);
    }
}

function agregarAlumnos(nombre, materia, nota){
    const nuevoAlumno = {
        id: proximoId,
        nombre: nombre,
        materia: materia,
        nota: nota,
    };

    alumnos.push(nuevoAlumno);
    proximoId = proximoId + 1;
}

function obtenerAlumnosFiltrados(){
    const materiaElegida = filtroMateria.value;

    function filtrar(alumno){
        return alumno.materia === materiaElegida;
    }

    if (materiaElegida === "todas"){
        return alumnos;
    } else {
        return alumnos.filter(filtrar);
    }
}

function renderTable(){
    const lista = obtenerAlumnosFiltrados();
    cuerpoTabla.innerHTML = "";

    if (lista.length === 0){
        cuerpoTabla.innerHTML = "<tr><td colspan='5'>Todavia no hay alumnos</td></tr>";
        return;
    }

    for (const alumno of lista){
        const estado = alumno.nota >= Nota_Minima_Aprobado ? "Aprobado" : "Desaprobado";
        const fila = document.createElement("tr");
        fila.dataset.id = alumno.id; // <-- guardamos el id acá
        fila.innerHTML = `
            <td>${alumno.nombre}</td>
            <td>${alumno.materia}</td>
            <td>${alumno.nota}</td>
            <td>${estado}</td>
            <td><button class="btnEliminar">Eliminar</button></td>
        `;
        cuerpoTabla.appendChild(fila);
    }

    
}



//#endregion
cargarMaterias();

agregarAlumnos("Ana Garcia", "Matematica", 9);
agregarAlumnos("Bruno Diaz", "Programacion", 7);
agregarAlumnos("Carla Ruiz", "Lengua", 4);

renderTable();














