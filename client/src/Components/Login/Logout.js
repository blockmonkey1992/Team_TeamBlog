import React from 'react';
import { useDispatch } from "react-redux";
import { logoutUser } from "../../actions/user_action";


function Logout(props) {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser()).then(response => {
      if(response.payload.success){
        //로그아웃에 성공했을 때, 할 작업.
        alert("로그아웃에 성공했습니다.");
      } else {
        alert('로그아웃에 실패했습니다.');
      }
    });
  }

  return (
        <div onClick={logoutHandler}>로그아웃</div>
  )
}

export default Logout;