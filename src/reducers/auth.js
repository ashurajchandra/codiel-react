import { Login_START, LOGIN_FAILED } from "../actions/actionTypes";

const initialAuthState={
    user: {},
    error: null,
    isLoggedin: false,
    inProgress: false
    
}


export function auth(state= initialAuthState, action){
       switch(action.type){
           case Login_START:
           return{
               ...state,
               inProgress:true

           }
           case LOGIN_SUCCESS:
            return{
                ...state,
                user: action.user,
                isLoggedin:true,
                inProgress:false,
                error:null
            }
            case LOGIN_FAILED:
                return{
                    ...state,
                    inProgress: false,
                    error: action.error
     
                }
           default:
               return{
                   state,
               }
       }
}