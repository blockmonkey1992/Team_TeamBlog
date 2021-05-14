import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../actions/user_action';


import { Modal, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import '../../Scss/Login.scss';


function Login() {

  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");




  const emailHandler = (e) => {
    setEmail(e.currentTarget.value);
  }

  const pwdHandler = (e) => {
    setPassWord(e.currentTarget.value);
  }



  const submitHandler = (e) => {
    e.preventDefault();

    let body = {
      email : Email,
      password : PassWord,
    }

    dispatch(loginUser(body));
    //loginUser = action

    axios.post("/api/users/login", body)
        .then(response => {
          if(response.data.success){
            //로그인에 성공했을 때 할 작업을 여기서 하면되겠네?
            dispatch(loginUser(body))
            setEmail("");
            setPassWord("");
            console.log('로그인 햇음');
            localStorage.setItem("user", JSON.stringify(response.data));
            window.location.reload();
          } else {
            //로그인에 실패했네? 이 때 할 작업이 뭘까?
            alert("이메일 혹은 비밀번호가 일치하지 않습니다.");
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
                value={Email}
                onChange={emailHandler}
                id="modal-input-email" />
              <Input.Password
                type="password"
                placeholder="password"
                value={PassWord}
                onChange={pwdHandler}
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