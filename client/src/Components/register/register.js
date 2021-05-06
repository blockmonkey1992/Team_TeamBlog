import React from 'react';
import '../../Scss/Register.scss';
// import styled from 'styled-components';

function register() {
    return (
        <div className="register_my__container">
            <div className="register_my__wrapper">
                <div className="register_my__wrapper-title" >Register in NINJA CODERS</div>
                <div className="registerWrapper">
                    <div className="registerWrapper_column">
                        <div>Nick name</div>
                        <input type="text" required placeholder="닉네임은 두 글자 이상이어야 합니다." />
                    </div>
                    <div className="registerWrapper_column">
                        <div>E-mail</div>
                        <input type="email" required placeholder="이메일을 입력하세요." />
                    </div>
                    <div className="registerWrapper_column">
                        <div>Password</div>
                        <input type="password" required placeholder="비밀번호는 8자~30자 이내로 작성해야 합니다." />
                    </div>
                    <div className="registerWrapper_column">
                        <div>Verify Password</div>
                        <input type="password" required placeholder="비밀번호 확인을 위해 다시 입력해주세요." />
                    </div>
                </div>
            </div>
            <div className="registerWrapper_btn">
                <button>취소</button>
                <button type="submit">확인</button>
            </div>
        </div>
    )
}

export default register
