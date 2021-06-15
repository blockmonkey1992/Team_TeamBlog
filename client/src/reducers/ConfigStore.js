import { combineReducers } from "redux";
import user from './user_reducer';
import post from './post_reducer';

//Reducer Store 설정.
//원칙상 Redux Store는 하나만 받을 수 있어 CombineReducers를 활용해 user와, post 리듀서 두개를 포함시켰다. (Blockmonkey);
const rootReducer = combineReducers({
   user,
   post
})

export default rootReducer;