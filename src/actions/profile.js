import { USER_PROFILE_SUCCESS, USER_PROFILE_FAILURE, FETCH_USER_PROFILE } from "./actionTypes";
import { APIUrls } from "../helpers/urls";
// import { getFormBody } from "../helpers/utils";
import{getAuthTokenFromLocalStorage} from '../helpers/utils';

export function startUserProfileFetch(user){
    return{
        type:FETCH_USER_PROFILE,


    };
}

export function userProfileSuccess(user){
    return{
        type:USER_PROFILE_SUCCESS,
        user

    };
}

export function userProfileFailed(error){
    return{
        type:USER_PROFILE_FAILURE,
        error,

    };
}


export function fetchUserProfile(userId){
    return(dispatch) =>{
        dispatch(startUserProfileFetch());
        const url = APIUrls.userProfile(userId);
        fetch(url, {
            // method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
            },
        //    body: getFormBody({})
            
        })
        .then((response) => response.json())
        .then((data)=>{

            if(data.success){
                //do something
                dispatch(userProfileSuccess(data.data.user));
                return;
            }
            dispatch(userProfileFailed(data.message));
            
        })
    }
}

