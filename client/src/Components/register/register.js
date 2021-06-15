import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from "../../actions/user_action";
import Axios from 'axios';

import '../../Scss/Register.scss';


function Register(props) {

    const dispatch = useDispatch();

    const [Name, setName] = useState("");
    const [CheckName, setCheckName] = useState("");
    const [Email, setEmail] = useState("");
    const [CheckEmail, setCheckEmail] = useState("");
    const [Pwd, setPwd] = useState("");
    const [VerifyPwd, setVerifyPwd] = useState("")


    //사용자가 입력한 닉네임과 이메일값이 이미 회원가입되어있는 유저와 중복되는 검사 (Kkevi Do)
    useEffect(() => {

      let nameCheck = {
        name : Name,
      }
      let emailCheck = {
        email : Email,
      }

      //닉네임 중복 체크 API
      Axios.post('/api/users/checkname', nameCheck)
        .then(response => {
          if(response.data.result.length > 0){
            setCheckName("이미 사용중인 닉네임입니다.");
          }else{
            setCheckName("");
          }
        })

      //이메일 중복 체크 API
      Axios.post('/api/users/checkemail', emailCheck)
       .then(response => {
          if(response.data.result.length > 0){
            setCheckEmail("이미 사용중인 이메일입니다.")
          }else{
            setCheckName("");
          }
        })
      
    }, [Email, Name])

    
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
          .then(response => {
            if(response.payload.success){
              alert('회원가입에 성공하였습니다.');
              props.history.push('/');
            } else {
              alert('회원가입에 실패하였습니다.');
            }
          });
      }
    };


    return (
        <div className="register_my__container" onSubmit={submitHandler}>
          <div className="register_my__wrapper">
              <div className="register_my__wrapper-title" >Register in NINJA CODERS</div>
              <div className="registerWrapper">
                  <div className="registerWrapper_column">
                      <div>Nick name</div>
                      <input type="text" minLength="2" maxLength="20" required placeholder="닉네임은 두 글자 이상이어야 합니다." value={Name} onChange={NameHandler} />
                      <div>{CheckName}</div>
                  </div>
                  <div className="registerWrapper_column">
                      <div>E-mail</div>
                      <input type="email" minLength="10" maxLength="30" required placeholder="이메일을 입력하세요."  value={Email} onChange={emailHandler}/>
                      <div>{CheckEmail}</div>
                  </div>
                  <div className="registerWrapper_column">
                      <div>Password</div>
                      <input type="password" minLength="8" required placeholder="비밀번호는 8자~30자 이내로 작성해야 합니다." value={Pwd} onChange={pwdHandler}/>
                      {Pwd.length < 8 ? <div>비밀번호는 8글자 이상이어야 합니다!</div> : null}
                  </div>
                  <div className="registerWrapper_column">
                      <div>Verify Password</div>
                      <input type="password" minLength="8" required placeholder="비밀번호 확인을 위해 다시 입력해주세요." value={VerifyPwd} onChange={VerifyPwdHandler}/>
                      {Pwd !== VerifyPwd ? <div>비밀번호가 일치하지 않습니다!</div> : null}
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

export default Register;
