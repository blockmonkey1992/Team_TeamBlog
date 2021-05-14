import { LOGIN_USER
    , LOGOUT_USER
    , REGISTER_USER
    ,AUTH_USER
} from '../actions/types';

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
    ? { is_login: true, user }
    : { is_login: false, user : null};

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_USER:
            return{
                ...state,
                loginSuccess: action.payload,
            }
        case LOGOUT_USER:
            return{
                ...state,
                user: null,
            }
        case REGISTER_USER:
            return { ...state, register:action.payload}
        case AUTH_USER :
            return { ...state, userData: action.payload }
        default:
            return state;

    }
    
}