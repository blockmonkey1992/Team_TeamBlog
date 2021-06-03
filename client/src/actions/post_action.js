import axios from 'axios';
import {
    SEARCH
} from './types';

export function searchPost(term){
    const request = axios.get(`/api/post/search/?term=${term}`)
        .then(response => response.data.searchedResult);

    return {
        type: SEARCH,
        payload: request
    }
};