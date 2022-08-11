import {combineReducers} from "redux";
import {createStore} from "redux"
import { AuthReducer } from "./notes/reducer";
const rootReducer=combineReducers({
    ndata:AuthReducer
})

export const store=createStore(rootReducer);

store.subscribe(()=>{
    console.log(store.getState());
})