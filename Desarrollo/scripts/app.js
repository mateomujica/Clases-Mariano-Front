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


const alumno = document.getElementsById("Alumno");
const inputNombre = document.getElementById("InputNombre");
const selectMateria = document.getElementById("SelectMateria");
const inputNota = document.getElementById("InputNota");
const mensaje = document.getElementById("Mensaje");
const filtroMateria = document.getElementById("FiltroMateria");
const cuerpoTabla = document.getElementById("CuerpoTabla");
const totalAlumnos = document.getElementById("TotalAlumnos");
const promedioGeneral = document.getElementById("PromedioGeneral");
const totalAprobados = document.getElementById("TotalAprobados");
//#endregion

//#region Bloque 4 

function cargarMaterias(){
    selectMateria.innerHTML = "<option value = ''>Elegi una materia</option>";
    filtroMateria.innerHTML = "<option value = 'todas'>Todas las materias</option>";

    for (const materia  of materias ){
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

//Funcion pedida por el docente para filtrar por alumno (opcional)
function cargarAlumnos(){  
    for (const alumno of alumnos){
        const opcionAlumno = document.getElementsById("alumno");
        opcionAlumno.value = alumno.id;
        opcionAlumno.textContent = alumno.nombre;
        selectAlumno.appendChild(opcionAlumno);
    }

}
//#endregion




