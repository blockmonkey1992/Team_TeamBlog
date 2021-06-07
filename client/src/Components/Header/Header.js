import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory} from 'react-router-dom';
import { searchPost } from "../../actions/post_action";
import Axios from "axios";

import '../../Scss/Header.scss';
import { SearchOutlined } from '@ant-design/icons';

import Login from '../Login/Login';
import Logout from '../Login/Logout';


function Header(props) {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [UserInfo, setUserInfo] = useState([]);
  const [Content, setContent] = useState('');

  useEffect(() => {
    Axios.get("/api/users/auth")
      .then(response => {
          setUserInfo(response.data);
      });
  }, []);

  const handleContent = (e) => {
    setContent(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPost(Content))
    history.push(`/search/?term=${Content}`);
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
                <form className='searchBar'>
                  <input type='text' value={Content} onChange={handleContent} />
                  <button onClick={handleSubmit} ><SearchOutlined /></button>
                </form>
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