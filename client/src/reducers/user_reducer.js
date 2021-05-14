import { LOGIN_USER
    , REGISTER_USER
    ,AUTH_USER
} from '../actions/types';

export const defaultState = {
    is_login : false,
    fetching_update : false,
    user: {}
};

export default function(state = {}, action){
    switch(action.type){
        case LOGIN_USER:
            console.log(action.type);
            return{ ...state, loginSuccess: action.payload, is_login : true, fetching_update: true, }
        case REGISTER_USER:
            return {...state, register:action.payload}
        case AUTH_USER :
            return {...state, userData: action.payload}
        default:
            return state;

    }
    
}