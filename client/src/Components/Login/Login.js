import React, { Component, useState } from 'react';
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {loginUser} from '../../actions/user_action'
import { Modal, Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import '../../Scss/Login.scss';


function Login(props) {

  

  const dispatch = useDispatch();

  const[Email, setEmail] = useState("")
  const[Password, setPassword]= useState("")

  const onEmailHandler = (event) =>{
    setEmail(event.currentTarget.value)
  }
  const onPasswordHandler = (event) =>{
    setPassword(event.currentTarget.value)
  }
  const onSubmitHandler = (event) =>{
    event.preventDefault();


    let body = {
      email:Email,
      password: Password
    }

    axios.post("/api/users/login", body)
      .then(response => {
        if(response.data.success){
          //로그인에 성공했을 때 할 작업을 여기서 하면되겠네?
          dispatch(loginUser(body))
          setEmail("");
          setPassword("");

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
      <div>
        <div type="primary" onClick={showModal}>
          로그인
        </div>
        
        <Modal title="Login to Ninja Coders" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
          
          <div className="ant-modal-input_group">
            <Input type="email" placeholder="E-mail" value={Email} id="modal-input-email" onChange={onEmailHandler}/>
            <Input.Password type="password" placeholder="password" value={Password} id="modal-input-pw" onChange={onPasswordHandler}
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              )} />
          </div>
          
          <div class="ant-modal-footer" onClick={handleOk}>
            <button type="button" id="loginBtn" onClick={onSubmitHandler}>
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