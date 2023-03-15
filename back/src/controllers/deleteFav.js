const favs = require("../utils/favs");


const deleteFav = (req, res) => {
    const {id} = req.params;
    
    // No puedo usar filter en la variable favs porque no es un método de mutación (ver explicación en favs.js).
    // Pero puedo usar splice, que sí es un mutating method (modifica el array original).
    
    // Creo una varible para guardar el índice del character a eliminar
    let indexTarget;

    // Recorro favs buscando el favorito cuyo id coincida con el id recibido por params
    favs.forEach((f, index) => {
        // IMPORTANTE:
        // Recordar que el id extraido de params es un string (proviene de la url), por lo tanto hay que parsearlo a número para poder hacer una comparación de igualdad numérica.
        // Por otro lado, el id del character guardado en favs también es un string (a raíz del proceso de stringificación necesario para enviar los datos)
        if (Number(f.id) === Number(id)) {
            // Guardo la posición que ocupa en favs en la variable indexTarget
            indexTarget = index;
        }
    })

    // Si existe dicho character...
    if (indexTarget !== undefined) {
        // Eliminarlo de favs
        favs.splice(indexTarget, 1);
        res.status(200).json(favs);
    }
    // si no existe dicho character...
    else {
        res.status(400).send("No se encontró un personaje con el id indicado")
    }
}

module.exports = deleteFav;