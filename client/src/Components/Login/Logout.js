import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { logoutUser } from '../../actions/user_action';

function Logout(props) {
  const dispatch = useDispatch();
  const userData = useSelector(state => state);
  
  
  const logoutHandler = () => {
    dispatch(logoutUser);
    alert("로그아웃되었습니다.");
    console.log(userData);
  }

  return (
        <div onClick={logoutHandler}>로그아웃</div>
  )
}

export default Logout;