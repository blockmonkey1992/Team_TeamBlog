import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Axios from "axios";

import '../../Scss/Header.scss';
import { SearchOutlined } from '@ant-design/icons';

import Login from '../Login/Login';
import Logout from '../Login/Logout';


function Header(props) {


  const user = useSelector(state => state.user);

  const [UserInfo, setUserInfo] = useState([]);

  useEffect(() => {
      Axios.get("/api/users/auth")
        .then(response => {
            // console.log(response);
            setUserInfo(response.data);
        });
  }, []);

  const handleSubmit = (e) => {

    Axios.get("/api/post/search")
      .then(response => console.log(response));
    
  }

    return (
        <div className='headerWrapper'>
            <a href='/' className='headerName'>NINJA CODERS</a>
            <div className='headerMiddle'>
                <div className='menu'>
                    <a href='/'>MAIN</a>
                    <a href='/portfolio'>PORTFOLIO</a>
                    <a href='/introduce'>TEAM</a>
                    <a href='/contact'>CONTACT</a>
                </div>
                <div className='searchBar'>
                  <input type='text' />
                  <button onClick={handleSubmit} type='submit' ><SearchOutlined /></button>
                </div>
            </div>
            
            <div className='headerTail'>
              {user.userData &&
                <div>
                    {user.userData.is_login ? <Logout /> : <Login />}
                </div>
              }
              <Link to={{
                pathname: `/profile/${UserInfo._id}`,
                state : UserInfo,
              }}>MY</Link>
            </div>
           
        </div>
    )
}

export default Header;