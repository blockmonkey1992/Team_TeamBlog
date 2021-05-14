import React from 'react';
import axios from "axios";

function Logout() {

  const LogoutHandler = () => {
    axios.get("api/users/logout")
      .then(response => {
      console.log(response);
      localStorage.removeItem("user");
      alert('logout complete');
      })
    }
  return (
      <div>
        <button onClick={LogoutHandler}>로그아웃</button>
      </div>
  )
}

export default Logout;