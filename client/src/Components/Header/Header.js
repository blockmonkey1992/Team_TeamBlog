import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory} from 'react-router-dom';
import { searchPost } from "../../actions/post_action";
import Axios from "axios";

import Login from '../Login/Login';
import Logout from '../Login/Logout';

import '../../Scss/Header.scss';
import { SearchOutlined } from '@ant-design/icons';



//(Blockmonkey);
function Header(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  //user 정보를 REDUX의 상태값에서 불러온다.
  const user = useSelector(state => state.user);

  const [UserInfo, setUserInfo] = useState([]);
  const [Content, setContent] = useState('');

  useEffect(() => {

    //Axios를 이용하여 데이터베이스에서 유저정보 가져오기
    Axios.get("/api/users/auth")
      .then(response => {
          setUserInfo(response.data);
      });
  }, []);

  // 검색창의 쓰여진 내용 실시간으로 감지하기 (Kkevi Do)
  const handleContent = (e) => {
    setContent(e.currentTarget.value);
  }

  //검색내용을 redux에 저장하고, 해당 검색페이지로 넘어가기 (Kkevi Do)
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
            
            {/* redux 상태값 user를 탐색 후, is_login 항목이 존재하는가에 따라 로그아웃 버튼 혹은 로그인 버튼을 출력하도록 함 (Blockmonkey) */}
            <div className='headerTail'>
              {user.userData &&
                <div>
                    {user.userData.is_login ? <Logout /> : <Login />}
                </div>
              }

              {/* Link를 이용하여 유저정보를 해당 My 페이지의 props값으로 넘겨주기 (Kkevi Do) */}
              <Link to={{
                pathname: `/profile/${UserInfo._id}`,
                state : UserInfo,
              }}>MY</Link>
            </div>
           
        </div>
    )
}

export default Header;