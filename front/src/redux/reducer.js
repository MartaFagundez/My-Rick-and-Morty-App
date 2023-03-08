import { AGREGAR_FAVORITO, ELIMINAR_FAVORITO, FILTER_CARDS, ORDER_CARDS } from "./actionsTypes";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case AGREGAR_FAVORITO:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            };

        case ELIMINAR_FAVORITO:
            return {
                ...state,
                allCharacters: state.allCharacters.filter(char => char.id !== action.payload),
                myFavorites: state.myFavorites.filter(char => char.id !== action.payload)
            };

        case FILTER_CARDS: 
            if (action.payload === "All") {
                return {
                    ...state,
                    myFavorites: state.allCharacters
                };
            }
            else {
                return {
                    ...state,
                    myFavorites: state.myFavorites.filter( char => char.gender === action.payload)
                };
            }
            

        case ORDER_CARDS: 
            if (action.payload === "Ascendente") {
                return {
                    ...state,
                    myFavorites: state.myFavorites.sort((a,b) => Number(a.id) > Number(b.id))
                };
            }
            else if (action.payload === "Descendente") {
                return {
                    ...state,
                    myFavorites: state.myFavorites.sort((a,b) => Number(b.id) > Number(a.id))
                };  
            } 
            else {
                return {
                    ...state,
                    myFavorites: state.myFavorites.sort((a,b) => 0.5 - Math.random())
                };
            }    
            
    
        default:
            return {
                ...state
            };
    }
    
}

export default reducer;