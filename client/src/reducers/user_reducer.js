import { LOGIN_USER, REGISTER_USER, LOGOUT_USER, AUTH_USER } from '../actions/types';

export default function(state = {}, action){
    switch(action.type){
        case LOGIN_USER:
            return{
                loginSuccess: action.payload
            }
        case REGISTER_USER:
            return{
                registerSuccess: action.payload
            }
        case LOGOUT_USER:
            return{
                logoutSuccess: action.payload
            }
        case AUTH_USER:
            return{
                userData: action.payload
            }
        default:
            return state;
    }
}