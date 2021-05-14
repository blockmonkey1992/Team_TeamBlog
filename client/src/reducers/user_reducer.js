import { LOGIN_USER
    , REGISTER_USER
    ,AUTH_USER
} from '../actions/types';

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
    ? { is_login: true, user }
    : { is_login: false, user : null };

// export const defaultState = {
//     is_login : false,
//     fetching_update : false,
//     user: {}
// };

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_USER:
            console.log(action.type);
            return{
                ...state,
                loginSuccess: action.payload,
                is_login : true,
            }
        case REGISTER_USER:
            return { ...state, register:action.payload }
        case AUTH_USER :
            return { ...state, userData: action.payload }
        default:
            return state;

    }
    
}