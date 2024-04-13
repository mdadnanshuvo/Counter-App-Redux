import { CONSTANTS } from "./constants";


const initialTodosState = {

    isLoading : false,
    todos : [],
    error : null
};


 export const todosReducer = (state = initialTodosState, action) =>
{
      switch (action.type) {

        case CONSTANTS.GET_REQUEST:
            
        return {
            ...state,
            isLoading: true,
        }

        case CONSTANTS.GET_REQUEST_SUCCESS:
            
        return {
            isLoading: false,
            todos : action.payload,
            error : null,
        }


        case CONSTANTS.GET_REQUEUST_FAILED:
            
        return {
        
            isLoading: false,
            todos : [],
            error : action.payload,
        }
        
      
        default:
            return {
                ...state,
            }
        }
    }


    