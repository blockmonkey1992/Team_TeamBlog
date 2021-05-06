import { LOGIN_USER } from '../actions/types';

export default function(state = {}, action){
    switch(action.type){
        case LOGIN_USER:
            console.log(action.type);
            return{ ...state, loginSuccess: action.payload }

        default:
            return state;

    }
    
}