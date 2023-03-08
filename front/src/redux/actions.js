import { AGREGAR_FAVORITO, ELIMINAR_FAVORITO, FILTER_CARDS, ORDER_CARDS } from "./actionsTypes";

export const agregarFavorito = (character) => {
    return {type: AGREGAR_FAVORITO, payload: character }
}

export const eliminarFavorito = (id) => {
    return {type: ELIMINAR_FAVORITO, payload: id }
}

export const filterCards = (gender) => {
    return {type: FILTER_CARDS, payload: gender }
}

export const orderCards = (order) => {
    return {type: ORDER_CARDS, payload: order }
}