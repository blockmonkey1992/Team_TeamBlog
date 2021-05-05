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
          
          <div className="ant-modal-input_group">
            <Input type="email" placeholder="E-mail" id="modal-input-email" />
            <Input.Password type="password" placeholder="password" id="modal-input-pw"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              )} />
          </div>
          
          <div class="ant-modal-footer" onClick={handleOk}>
            <button type="button" id="loginBtn">
              <span>LOGIN</span>
            </button>
            <div className="ant-modal-footer__column">
              <a href="/register">
                Register in
              </a>
            </div>
          </div>        
      </Modal>
  
      </div>
       
    )
}

export default Login