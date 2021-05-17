import React from 'react';
import axios from "axios";

function Logout(props) {

  const LogoutHandler = () => {
    axios.post("/api/users/logout")
      .then(response => {
        console.log(response);
      })
    }
  return (
        <div onClick={LogoutHandler}>로그아웃</div>
  )
}

export default Logout;