import { AGREGAR_FAVORITO, ELIMINAR_FAVORITO, FILTER_CARDS, ORDER_CARDS } from "./actionsTypes";
import axios from "axios";

export const agregarFavorito = (character) => {
    return function(dispatch) {
        axios.post("http://localhost:3001/rickandmorty/favs", character)
        .then(response => {
            return dispatch({
                type: AGREGAR_FAVORITO,
                payload: response.data
            });
        })
    }
}

export const eliminarFavorito = (id) => {
    return function(dispatch) {
        axios.delete(`http://localhost:3001/rickandmorty/favs/${id}`)
        .then(response => {
            return dispatch({
                type: ELIMINAR_FAVORITO,
                payload: response.data
            });
        })
    }
}

export const filterCards = (gender) => {
    return {type: FILTER_CARDS, payload: gender }
}

export const orderCards = (order) => {
    return {type: ORDER_CARDS, payload: order }
}