import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory} from 'react-router-dom';
import { searchPost } from "../../actions/post_action";
import Axios from "axios";

import Login from '../Login/Login';
import Logout from '../Login/Logout';

import '../../Scss/Header.scss';
import { SearchOutlined } from '@ant-design/icons';


function Header(props) {
  
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const [UserInfo, setUserInfo] = useState([]);
  const [Content, setContent] = useState('');

  useEffect(() => {

    //Axios를 이용하여 데이터베이스에서 유저정보 가져오기
    Axios.get("/api/users/auth")
      .then(response => {
          setUserInfo(response.data);
      });
  }, []);

  // 검색창의 쓰여진 내용 실시간으로 감지하기
  const handleContent = (e) => {
    setContent(e.currentTarget.value);
  }

  //검색내용을 redux에 저장하고, 해당 검색페이지로 넘어가기
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

              {/* Link를 이용하여 유저정보를 해당 My 페이지의 props값으로 넘겨주기 */}
              <Link to={{
                pathname: `/profile/${UserInfo._id}`,
                state : UserInfo,
              }}>MY</Link>
            </div>
           
        </div>
    )
}

export default Header;