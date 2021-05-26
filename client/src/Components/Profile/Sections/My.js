import React, { useState, useEffect } from 'react';

import '../../../Scss/Profile.scss';

import { useSelector } from 'react-redux';
import Axios from "axios";

function My(props) {

    const [UserInfo, setUserInfo] = useState([]);

    useEffect(() => {
        Axios.get("/api/users/auth")
            .then(response => {
                console.log(response.data);
                setUserInfo(response.data);
            });
    }, []);
    
    return (
        <div className="myWrapper__container">
            <div className="myMy__title">개인정보 설정</div>
            <div className="myMy__contents">
                <div className="myMy__inputs">
                    <input value={UserInfo.name} />
                    <input value={UserInfo.email} />
                </div>
                <button>수정</button>
            </div>
        </div>
    )
}

export default My
