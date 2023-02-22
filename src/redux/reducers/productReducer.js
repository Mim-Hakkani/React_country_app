import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes/actionTypes";

const intitialState = {
    cart:[]
}

const productReducer =(state=intitialState,action)=>{

    // console.log("dispatch ::",action);
  
    switch(action.type){
        case ADD_TO_CART : return{
            ...state,
             cart:[...state.cart,action.payload]

        }

        case REMOVE_FROM_CART : return {
            ...state,
            cart:state.cart.filter(removeCart=>removeCart.id!==action.payload.id)
           
        }

        default : 
        return state ; 
    }


}

export default productReducer;