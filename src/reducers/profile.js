import { USER_PROFILE_SUCCESS, USER_PROFILE_FAILURE, FETCH_USER_PROFILE } from "../actions/actionTypes";

 const initialProfileState={
    user:'',
    error:null,
    success:null,
    inProgress: false,
}


export default function profile(state=initialProfileState, action){
    //{[]}
    switch(action.type){
        case USER_PROFILE_SUCCESS:
            return{
               ...state,
               success:true,
               inProgress:false,
               user:action.user,
             }
             case USER_PROFILE_FAILURE:
                 return{
                     ...state,
                     error: action.error,
                     inProgress:true,
                 }
                 case FETCH_USER_PROFILE:
                    return{
                        ...state,
                        inProgress:true,
                    }
            default :
            return state;
    }
    
}