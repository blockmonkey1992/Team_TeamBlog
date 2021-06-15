import React from 'react';
import { useDispatch } from "react-redux";
import { logoutUser } from "../../actions/user_action";


//(Blockmonkey);
function Logout(props) {
  const dispatch = useDispatch();

  //로그아웃 버튼을 눌렀을 때, 실행할 함수 
  const logoutHandler = () => {
    dispatch(logoutUser()).then(response => {
      if(response.payload.success){
        //로그아웃에 성공했을 때,
        alert("로그아웃에 성공했습니다.");
        window.location.reload();
      } else {
        //로그아웃에 실패했을 때,
        alert('로그아웃에 실패했습니다.');
      }
    });
  }

  return (
        <div onClick={logoutHandler}>로그아웃</div>
  )
}

export default Logout;