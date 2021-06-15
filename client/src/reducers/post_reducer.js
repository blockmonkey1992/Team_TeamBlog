import { SEARCH } from '../actions/types';

//글 검색 리듀서 (Blockmonkey);
//이전 스테이트값과, searchedPost라는 이름으로 검색 API를 활용해 검색된 글들을 state값에 저장한다.
export default function(state = {}, action){
    switch(action.type){
        case SEARCH:
            return{
                ...state,
                searchedPost: action.payload
            }
        default:
            return state;
    }
}