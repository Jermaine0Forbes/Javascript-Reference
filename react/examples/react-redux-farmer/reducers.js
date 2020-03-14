import { GET_FARMERS, GET_FARMERS_SUCCESS,
        CREATE_FARMER, CREATE_FARMER_SUCCESS,
        UPDATE_FARMER, UPDATE_FARMER_SUCCESS,
        DELETE_FARMER, DELETE_FARMER_SUCCESS,
      } from "./types";

const initialState ={
  farmers:[],
  message:null
}

export const farmerReducer = (state = initialState, action) =>{
  switch(action.type){
    case GET_FARMERS:
    return  { farmers:state.farmers,
              message:action.payload
           }
    case GET_FARMERS_SUCCESS:
     return  { farmers:action.payload,
              message: action.message
            }
    case CREATE_FARMER:
    return  { farmers:state.farmers,
              message:action.payload
           }
    case CREATE_FARMER_SUCCESS:
     return  { farmers:state.farmers,
               message:action.payload
            }
    case UPDATE_FARMER:
    return  { farmers:state.farmers,
              message:action.payload
           }
    case UPDATE_FARMER_SUCCESS:
     return  { farmers:state.farmers,
               message:action.payload
            }
    case DELETE_FARMER:
    return  { farmers:state.farmers,
              message:action.payload
           }
    case DELETE_FARMER_SUCCESS:
     return  { farmers:state.farmers,
               message:action.payload
            }
    default:
    return state;
  }
}
