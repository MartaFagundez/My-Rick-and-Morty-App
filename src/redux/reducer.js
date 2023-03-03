import { AGREGAR_FAVORITO, ELIMINAR_FAVORITO } from "./actionsTypes";

const initialState = {
    myFavorites: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AGREGAR_FAVORITO:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            };

        case ELIMINAR_FAVORITO:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload)
            };
    
        default:
            return {
                ...state
            };
    }
    
}

export default reducer;