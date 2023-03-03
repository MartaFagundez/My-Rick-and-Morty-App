import { AGREGAR_FAVORITO, ELIMINAR_FAVORITO } from "./actionsTypes";

export const agregarFavorito = (character) => {
    return {type: AGREGAR_FAVORITO, payload: character }
}

export const eliminarFavorito = (id) => {
    return {type: ELIMINAR_FAVORITO, payload: id }
}