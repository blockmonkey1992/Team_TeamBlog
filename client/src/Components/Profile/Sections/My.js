import React, { useEffect, useState} from 'react';
import Axios from 'axios';

import '../../../Scss/Profile.scss';

function My(props) {

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [ID, setID] = useState('');

    //Axios를 이용하여 데이터베이스에 있는 유저정보를 가져와 state값에 저장하기
    useEffect(() => {
        Axios.get("/api/users/auth")
            .then(response => {
                setID(response.data._id)
                setName(response.data.name)
                setEmail(response.data.email)
            });
    }, []);

    //실시간으로 변경되는 input값 감지
    const handleName = (e) => {
        e.preventDefault();
        setName(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const variable = {
            'name' : Name,
            'id' : ID,
        }

        //alert창으로 유저에게 다시 한 번 변경 여부를 물어본 뒤, true값이라면
        //Axios를 이용하여 변경된 유저 닉네임을 전송한다.
        if(window.confirm(`닉네임을 ${Name}(으)로 수정하시겠습니까?`) === true){
            Axios.post(`/api/users/profile/${props.match.params.userId}`, variable)
            .then(response => {
                if(response.data.success === true){
                    window.location.reload();   
                }
            })
        }
    }

    
    return (
        <div className="myWrapper__container">
            <div className="myMy__title">개인정보 설정</div>
            <div className="myMy__contents">
            {Name && Email && 
                <div className="myMy__inputs">
                    <input value={Name} onChange={handleName} />
                    <input value={Email} disabled />
                </div>
            }
                <button onClick={handleSubmit}>수정</button>
            </div>
        </div>
    )
}

export default My
