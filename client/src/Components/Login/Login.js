import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from "../../actions/user_action";
import { Modal, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import '../../Scss/Login.scss';


function Login() {

  const dispatch = useDispatch();
  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassWord] = useState("");

  const UserEmailHandler = (e) => {
    setUserEmail(e.currentTarget.value);
  }

  const UserpwdHandler = (e) => {
    setUserPassWord(e.currentTarget.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    let data = {
      email : UserEmail,
      password : UserPassword,
    }

    dispatch(loginUser(data))
      .then(response => {
        if(response.payload.loginSuccess){
          //로그인 성공시 할 일,
          console.log(response);
        } else {
          //로그인 실패시 할 일,
          alert(response.payload.msg);
        }
      });
  }

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
      <div className="loginWrapper">
        <div type="primary" onClick={showModal}>
          로그인
        </div>
      
        <Modal title="Login to Ninja Coders" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
          <form onSubmit={submitHandler}>
            <div className="ant-modal-input_group">
              <Input
                type="email"
                placeholder="E-mail"
                value={UserEmail}
                onChange={UserEmailHandler}
                id="modal-input-email" />
              <Input.Password
                type="password"
                placeholder="password"
                value={UserPassword}
                onChange={UserpwdHandler}
                id="modal-input-pw"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
            </div>
            
            <div class="ant-modal-footer" onClick={handleOk}>
              <button type="submit" id="loginBtn" >
                <span>LOGIN</span>
              </button>
              <div className="ant-modal-footer__column">
                <a href="/register">
                  Register in
                </a>
            </div>
          </div>        
          </form>
        </Modal>
      </div>
    )
}

export default Login