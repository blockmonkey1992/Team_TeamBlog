import React from 'react';
import axios from "axios";
import { useSelector } from 'react-redux';

function Logout() {

  const is_login = useSelector(state => state.user.is_login);
  

  const LogoutHandler = () => {
    axios.get("api/users/logout")
      .then(response => {
      console.log(response);
      localStorage.removeItem("user");
      alert('logout complete');
      console.log(is_login);
      window.location.reload();
      })
    }
  return (
      <div>
        <button onClick={LogoutHandler}>로그아웃</button>
      </div>
  )
}

export default Logout;