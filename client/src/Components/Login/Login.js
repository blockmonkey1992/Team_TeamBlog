import React, { Component, useState } from 'react';
import axios from 'axios'
import { Modal, Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import '../../Scss/Login.scss';


function Login() {

    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    return (
      <div>
        <div type="primary" onClick={showModal}>
          로그인
        </div>
        
        <Modal title="Login to Ninja Coders" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
          <Input style={{
            borderRadius:'5px',
            marginTop: '30px',
            width: '54vw'        
          }}
            type="email"
            placeholder="E-mail"
          />
          <Space direction="vertical">
            <div>
              <Input.Password
                style={{
                  borderRadius:'5px',
                  marginTop: '30px',
                  width: '54vw'        
                }}
                  type="password"
                  placeholder="password"
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                )}
              />
            </div>
        </Space>
        <div class="ant-modal-footer" onClick={handleOk}>
          <button type="button" class="ant-btn ant-btn-primary" id="loginBtn">
            <span>LOGIN</span>
          </button>
        </div>

        <a href="/register"
        className="RegisterIn">Register in</a>
        
      </Modal>
  
      </div>
       
    )
}

export default Login