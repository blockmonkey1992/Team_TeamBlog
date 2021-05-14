import { verify } from 'jsonwebtoken';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../actions/user_action';
import { useHistory } from 'react-router-dom';


import '../../Scss/Register.scss';


function Register(props) {

    const history = useHistory();

    useEffect(() => {
      console.log(history);
    }, [])

    const dispatch = useDispatch();

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("");
    const [PassWord, setPassWord] = useState("");
    const [VefrifyPwd, setVefrifyPwd] = useState("")


    const emailHandler = (e) => {
      setEmail(e.currentTarget.value);
    }
    const NameHandler = (e) => {
        setName(e.currentTarget.value);
      }
  
    const pwdHandler = (e) => {
      setPassWord(e.currentTarget.value);
    }
    const vefpwdHandler = (e) => {
        setVefrifyPwd(e.currentTarget.value);
      }
   
    const submitHandler = (e) => {
      e.preventDefault();
    

      if(PassWord !== VefrifyPwd){
        return alert("비밀 번호가 일치하지 않습니다.")
      }
  
      let body = {
        name: Name,
        email : Email,
        password : PassWord,
      }

      console.log(body)
  
      dispatch(registerUser(body))
        .then(response => {
          if(response.payload.success){
            //가입이 성공적으로 끝날을 떄 할 일,
            history.push("/");
          } else {
            alert("회원가입에 실패했습니다. 다시 시도해주세요");
          }
        })
    }

    return (
        <div className="register_my__container" onSubmit={submitHandler}>
          
            <div className="register_my__wrapper">
                <div className="register_my__wrapper-title" >Register in NINJA CODERS</div>
                <div className="registerWrapper">
                    <div className="registerWrapper_column">
                        <div>Nick name</div>
                        <input type="text" minLength="2" maxLength="20" required placeholder="닉네임은 두 글자 이상이어야 합니다." value={Name} onChange={NameHandler} />
                    </div>
                    <div className="registerWrapper_column">
                        <div>E-mail</div>
                        <input type="email" minLength="10" maxLength="30" required placeholder="이메일을 입력하세요."  value={Email} onChange={emailHandler}/>
                    </div>
                    <div className="registerWrapper_column">
                        <div>Password</div>
                        <input type="password" minLength="8" required placeholder="비밀번호는 8자~30자 이내로 작성해야 합니다." value={PassWord} onChange={pwdHandler}/>
                    </div>
                    <div className="registerWrapper_column">
                        <div>Verify Password</div>
                        <input type="password" minLength="8" required placeholder="비밀번호 확인을 위해 다시 입력해주세요." value={VefrifyPwd} onChange={vefpwdHandler}/>
                    </div>
                </div>
            </div>
            <div className="registerWrapper_btn" >
                <button>취소</button>
                <button type="submit" onClick={submitHandler}>확인</button>
            </div>
        </div>
    )
}

export default Register
