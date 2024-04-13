
import  Axios from "axios"

import { CONSTANTS } from "./constants"


export const getRequest = () =>
{
   return {
    type : CONSTANTS.GET_REQUEST,
   }
}


export const getRequestSuccess = (value) => {

    return {
        type : CONSTANTS.GET_REQUEST_SUCCESS,
        payload : value,
    }
}

export const getRequestFailed = (value) => {
    return {
        type : CONSTANTS.GET_REQUEUST_FAILED,
        payload : value, 
    }
}

export const getAllTodos = () => {
    return async (dispatch) => {
       dispatch(getRequest());
       try {
          const res = await Axios.get("https://jsonplaceholder.typicode.com/todos");
          dispatch(getRequestSuccess(res.data));
       } catch (error) {
          dispatch(getRequestFailed(error.message));
       }
    };
};
