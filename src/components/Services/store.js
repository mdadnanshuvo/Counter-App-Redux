import { counterReducer } from "./reducers";
import {createStore} from "redux"



export const counterStore = createStore(counterReducer);
