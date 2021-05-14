import React from 'react';
import '../../Scss/Header.scss';
import { Input, AutoComplete, Form } from 'antd';
import { useSelector } from 'react-redux';
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



function Header() {

  const is_login = useSelector(state => state.user.is_login);
  console.log(is_login);

    return (
        <div className='headerWrapper'>
            <Form {...formItemLayout} />
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
                <div>
                  {is_login ? <Logout /> : <Login />}
                  {/* <Login />
                  <Logout /> */}
                </div>
                <a href='/profile/:user'>MY</a>
            </div>
        </div>
    )
}

export default Header