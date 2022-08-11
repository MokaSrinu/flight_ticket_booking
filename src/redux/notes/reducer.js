import { set_Auth,set_User} from "./action";

export const AuthReducer=(store={Auth:false,User:[]},{type,payload})=>{
    switch(type){
         case set_Auth:
            return{
               ...store,
               Auth:payload
            };  
            case set_User:
                return{
                   ...store,
                   User:payload
                };      
        default:
            return store;         
    }
}