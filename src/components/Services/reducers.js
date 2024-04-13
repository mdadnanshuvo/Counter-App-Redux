import { CONTSTANTS } from "./constants";

const initialCounter = {counter : 0};


export  const counterReducer = (state = initialCounter,action) =>
{
   
    switch (action.type) {
        case CONTSTANTS.INCREMENT:
            return {
                ...state,
                counter : state.counter + 1,
            }
        case CONTSTANTS.DECREMENT:
            return {
                ...state,
                counter : state.counter - 1,
            }
        case CONTSTANTS.RESET:
            return {
                ...state,
                counter : 0,
            }
            
    
        default:
            return {
                ...state
            };
    }

}