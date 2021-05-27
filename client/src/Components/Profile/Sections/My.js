import React, { useState, useEffect } from 'react';
import Axios from "axios";

import '../../../Scss/Profile.scss';


function My() {

    const [UserInfo, setUserInfo] = useState([]);

    useEffect(() => {
        Axios.get("/api/users/auth")
            .then(response => {
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
