import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerUser } from "../../actions/user_action";


import '../../Scss/Register.scss';


function Register(props) {

    const history = useHistory();
    const dispatch = useDispatch();

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("");
    const [Pwd, setPwd] = useState("");
    const [VerifyPwd, setVerifyPwd] = useState("")


    const emailHandler = (e) => {
      setEmail(e.currentTarget.value);
    }
    const NameHandler = (e) => {
        setName(e.currentTarget.value);
      }
  
    const pwdHandler = (e) => {
      setPwd(e.currentTarget.value);
    }
    const VerifyPwdHandler = (e) => {
      setVerifyPwd(e.currentTarget.value);
    }
   
    const submitHandler = (e) => {
      e.preventDefault();
      if(Pwd !== VerifyPwd ){
        //비밀번호 확인 불일치
        console.log(`비밀번호를 다시 확인해주세요.`);
      } else {
        //비밀번호 확인 일치
        let dataToSubmit = {
          email : Email,
          name : Name,
          password : Pwd,
        } 
        dispatch(registerUser(dataToSubmit))
          .then(response => console.log(response));
      }
    };

    return (
        <div className="register_my__container" onSubmit={submitHandler}>
          
            <div className="register_my__wrapper">
                <div className="register_my__wrapper-title" >Register in NINJA CODERS</div>
                <div className="registerWrapper">
                    <div className="registerWrapper_column">
                        <div>Nick name</div>
                        <input type="text" 
                                minLength="2" 
                                maxLength="20" 
                                required 
                                placeholder="닉네임은 두 글자 이상이어야 합니다." 
                                value={Name} 
                                onChange={NameHandler} 
                                />
                    </div>
                    <div className="registerWrapper_column">
                        <div>E-mail</div>
                        <input type="email" 
                                minLength="10" 
                                maxLength="30" 
                                required 
                                placeholder="이메일을 입력하세요."  
                                value={Email} 
                                onChange={emailHandler}/>
                    </div>
                    <div className="registerWrapper_column">
                        <div>Password</div>
                        <input type="password" 
                                minLength="8" 
                                required 
                                placeholder="비밀번호는 8자~30자 이내로 작성해야 합니다." 
                                value={Pwd} 
                                onChange={pwdHandler}/>
                    </div>
                    <div className="registerWrapper_column">
                        <div>Verify Password</div>
                        <input type="password" 
                                minLength="8" 
                                required 
                                placeholder="비밀번호 확인을 위해 다시 입력해주세요." 
                                value={VerifyPwd} 
                                onChange={VerifyPwdHandler}/>
                    </div>
                </div>
            </div>
            <div className="registerWrapper_btn" >
                <button onClick={()=> props.history.goBack()}>취소</button>
                <button type="submit" onClick={submitHandler}>확인</button>
            </div>
        </div>
    )
}

export default Register
