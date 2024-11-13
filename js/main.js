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

    getPuntos() {
        if (this.puntos >= 5) 
            return `Apto`;
        return `No apto`;
    }
}

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







