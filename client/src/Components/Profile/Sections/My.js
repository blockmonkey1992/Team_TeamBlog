import React from 'react'

import '../../../Scss/Profile.scss';

function My() {
    return (
        <div className="myWrapper__container">
            <div className="myMy__title">개인정보 설정</div>
            <div className="myMy__contents">
                <div className="myMy__inputs">
                    <input value={'name'} />
                    <input value={'email'} />
                    <input placeholder={'변경할 비밀번호를 입력하세요.'} />
                    <input placeholder={'비밀번호 확인'} />
                </div>
                <button>수정</button>
            </div>
        </div>
    )
}

export default My
