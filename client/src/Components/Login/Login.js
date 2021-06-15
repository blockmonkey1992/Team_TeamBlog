import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from "../../actions/user_action";
import { Modal, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import '../../Scss/Login.scss';


//Blockmonkey;
function Login() {

  const dispatch = useDispatch();
  const [UserEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassWord] = useState("");

  const userEmailHandler = (e) => {
    setUserEmail(e.currentTarget.value);
  }

  const userPwdHandler = (e) => {
    setUserPassWord(e.currentTarget.value);
  }

  //사용자가 로그인 버튼을 눌렀을 시, 실행할 함수.
  const loginSubmitHandler = (e) => {
    e.preventDefault();

    //ㅂ
    let variables = {
      email : UserEmail,
      password : UserPassword,
    }

    dispatch(loginUser(variables))
      .then(response => {
        if(response.payload.loginSuccess){
          //로그인 성공시 할 일,
          window.location.reload();
        } else {
          //로그인 실패시 할 일,
          alert(`아이디 혹은 비밀번호가 일치하지 않습니다.`);
        }
      });
  }

  //모달창 컨트롤 함수.
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const okBtnHandler = () => {
    setIsModalVisible(false);
  };

  const cancleBtnHandler = () => {
    setIsModalVisible(false);
  };
  
  return (
    <React.Fragment>

        <div type="primary" onClick={showModal}>
          로그인
        </div>
      
      <Modal title="Login to Ninja Coders" visible={isModalVisible} onOk={okBtnHandler} onCancel={cancleBtnHandler} >
        <form onSubmit={loginSubmitHandler}>
          <div className="ant-modal-input_group">
            <Input
              type="email"
              placeholder="E-mail"
              value={UserEmail}
              onChange={userEmailHandler}
              id="modal-input-email" />
            <Input.Password
              type="password"
              placeholder="password"
              value={UserPassword}
              onChange={userPwdHandler}
              id="modal-input-pw"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
          </div>
          
          <div class="ant-modal-footer" onClick={okBtnHandler}>
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

    </React.Fragment>
    )
}

export default Login;