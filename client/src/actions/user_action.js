import axios from 'axios';
import {
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER,
    AUTH_USER,
    SEARCH
} from './types';

export function registerUser(bodyData){
    const request = axios.post("api/users/register", bodyData)
        .then(response => response.data);

    return {
        type: REGISTER_USER,
        payload: request
    }
};

export function loginUser(bodyData){
    const request = axios.post("/api/users/login", bodyData)
        .then(response => response.data);
    
    return {
        type: LOGIN_USER,
        payload: request,
    }
};

export function logoutUser(){
    const request = axios.get("/api/users/logout")
        .then(response => response.data);

    return{
        type: LOGOUT_USER,
        payload: request
    }
};

export function authUser(){
    const request = axios.get("/api/users/auth")
        .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    }
}


