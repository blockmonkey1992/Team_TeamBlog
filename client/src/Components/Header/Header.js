import React from 'react';
import styled from 'styled-components';
import '../../Scss/Header.scss';
// import { DatePicker } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
import { Input, AutoComplete, Form, TreeSelect, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Login from '../Login/Login';



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
                <div><Login /></div>
                <a href='/profile/:user'>MY</a>
            </div>
        </div>
    )
}

export default Header