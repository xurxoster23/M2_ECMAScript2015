// ** Desarrollo de la práctica Evaluable en JavaScript **

// * Clase Alumno *
class Alumno {
    nombre;
    apellidos;
    puntos;

    constructor (nombre, apellidos, puntos){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.puntos = this.getPuntos(puntos);
    }

    setPuntos(puntos) {
       this.puntos = puntos;
    }

    getPuntos(puntos) {
        if (puntos >= 5) 
            return `Apto`;
        return `No apto`;
    }
}

<<<<<<< HEAD:practicaEvaluable/js/main.js
=======
let name = document.getElementById("name").value;
let surname = document.getElementById("surname").value;
let points = document.getElementById("points").value;

>>>>>>> b996622a13a2b5ea77d735fdd3a45e86ac186111:js/main.js
function getAlumno (name,surname,points) {
    return new Promise((resolve, reject) => {
        if (
            (name === '') || (surname === '') || (points === '') 
        ) {
            reject({mensaje: `Datos no válidos`})
        }
        setTimeout(() => {
            resolve(new Alumno(name,surname,points))
        },2000)
    })
}

async function showUserResult() {
    try {
        let alumn = await getAlumno(
            document.getElementById("name").value,
            document.getElementById("surname").value,
            document.getElementById("points").value
        );
        console.log(`
                Nombre : ${alumn.nombre},
                Apellidos : ${alumn.apellidos}.
                Su califiación es de '${alumn.puntos}'
               `);
    } catch (error) {
        console.error(error);  
    }
}

<<<<<<< HEAD:practicaEvaluable/js/main.js

=======
>>>>>>> b996622a13a2b5ea77d735fdd3a45e86ac186111:js/main.js
// // ** CallBack del Objeto Promise **
// getAlumno('Jorge','Borrego',4) // Los parámetros usados en la function son de Ejemplo
//     .then( data => {
//         console.log(`
//             Nombre : ${data.nombre},
//             Apellidos : ${data.apellidos}.
//             Su califiación es de '${data.puntos}'
//             `);
//     })
//     .catch(error => 
//         console.error(error)
//     );







