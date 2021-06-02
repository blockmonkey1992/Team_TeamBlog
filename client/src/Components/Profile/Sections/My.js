import React, { useEffect, useState} from 'react';

import Axios from 'axios';

import '../../../Scss/Profile.scss';


function My(props) {

    console.log(props);

    const [UserInfo, setUserInfo] = useState([]);

    useEffect(() => {
        Axios.get("/api/users/auth")
            .then(response => {
                // console.log(response);
                setUserInfo(response.data);
            });
    }, []);

    console.log(UserInfo);

    return (
        <div className="myWrapper__container">
            <div className="myMy__title">개인정보 설정</div>
            <div className="myMy__contents">
            {UserInfo.name && 
                <div className="myMy__inputs">
                    <input value={UserInfo.name} />
                    <input value={UserInfo.email} />
                </div>
            }
                <button>수정</button>
            </div>
        </div>
    )
}

export default My
