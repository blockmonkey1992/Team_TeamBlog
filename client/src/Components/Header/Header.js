import React from 'react';
import styled from 'styled-components';
import '../../Scss/Header.scss';
// import { DatePicker } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';
import { Input, AutoComplete, Form, TreeSelect, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

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
        <div className='wrapper'>
            <Form
                style={{
                margin: '0 auto',
                }}
                {...formItemLayout}
            />
            <div className='headerName'>NINJA CODERS</div>
            <div className='headerMiddle'>
                <div className='menu'>
                    <div>MAIN</div>
                    <div>PORTFOLIO</div>
                    <div>TEAM</div>
                    <div>CONTACT</div>
                </div>
                <div className='searchBar'>
                    <Form.Item style={{
                        borderRadius: '20px',
                        backgroundColor: '#f0f5fb8b',
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
                <div>LOGIN</div>
                <div>MY</div>
            </div>
        </div>
    )
}

export default Header