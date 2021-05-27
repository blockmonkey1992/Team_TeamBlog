import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Axios from "axios";

import '../../Scss/Header.scss';
import { Input, AutoComplete, Form } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import Login from '../Login/Login';
import Logout from '../Login/Logout';


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};


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

  // console.log(UserInfo);

    return (
        <div className='headerWrapper'>
            {/* <Form {...formItemLayout} /> */}
            <a href='/' className='headerName'>NINJA CODERS</a>
            <div className='headerMiddle'>
                <div className='menu'>
                    <a href='/'>MAIN</a>
                    <a href='/portfolio'>PORTFOLIO</a>
                    <a href='/introduce'>TEAM</a>
                    <a href='/contact'>CONTACT</a>
                </div>
                <div className='searchBar'>
                    <Form.Item style={{
                        borderRadius: '20px',
                        backgroundColor: '#F0F5FB',
                        width: '200px',
                        outline: 'none',
                        }}>
                        <Input.Group compact >
                            <AutoComplete >
                            <Input style={{
                                width: '200px',
                                borderRadius: '20px',
                                backgroundColor: '#f0f5fb8b',
                                outline: 'none',
                                }} suffix={<SearchOutlined style={{ fontSize: '16px', color: '#2D3133' }} />} />
                            </AutoComplete>
                        </Input.Group>
                    </Form.Item>
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