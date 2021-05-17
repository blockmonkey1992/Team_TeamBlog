import { LOGIN_USER
    ,REGISTER_USER
    ,AUTH_USER
    ,LOGOUT_USER
} from '../actions/types';

export default function(state = {}, action){
    console.log(state);
    console.log(action);
    switch(action.type){
        case LOGIN_USER:
            return{
                ...state,
                loginSuccess: action.payload
            }

        case LOGOUT_USER :
            return { 
                ...state,
            };

        case REGISTER_USER:
            return { 
                ...state, 
                register: action.payload
            };

        case AUTH_USER :
            return { 
                ...state, 
                userData: action.payload
            };

        default:
            return state;

    }
    
}