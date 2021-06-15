import axios from 'axios';
import {
    SEARCH
} from './types';


//검색 Redux Action (Blockmonkey);
//queryString을 이용해 axios 신호전송 후, 검색된 글 데이터를 받아온다.
export function searchPost(term){
    const request = axios.get(`/api/post/search/?term=${term}`)
        .then(response => response.data.searchedResult);

    return {
        type: SEARCH,
        payload: request
    }
};