import { ADD_FAV,REMOVE_FAV } from "./actions-types"

const inicialState = {
    myFavorites : [],
}

const rootReducer = (state = inicialState, action) =>{
switch(action.type){
    
   case ADD_FAV:
     return {
        ...state, myFavorites:[...state.myFavorites,action.payload ],
     };
   
     case REMOVE_FAV:
        return {
            ...state,
            myFavorites: state.myFavorites.filter((char) => char.id !== parseInt(action.payload, 10))
          }
          

    default:
        return {...state};
}

}

export default rootReducer;

