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
                myFavorites: action.payload,
                allCharacters: action.payload
            };

        case ELIMINAR_FAVORITO:
            return {
                ...state,
                allCharacters: action.payload,
                myFavorites: action.payload
            };

        case FILTER_CARDS: 
            if (action.payload === "All") {
                return {
                    ...state,
                    myFavorites: [...state.allCharacters]
                };
            }
            else {
                return {
                    ...state,
                    myFavorites: state.allCharacters.filter( char => char.gender === action.payload)
                };
            }
            

        case ORDER_CARDS: 
            if (action.payload === "Ascending") {
                return {
                    ...state,
                    myFavorites: state.myFavorites.sort((a,b) => a.name > b.name )
                };
            }
            else if (action.payload === "Descending") {
                return {
                    ...state,
                    myFavorites: state.myFavorites.sort((a,b) => b.name > a.name)
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