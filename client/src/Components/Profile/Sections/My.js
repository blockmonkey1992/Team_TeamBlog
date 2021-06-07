import React, { useEffect, useState} from 'react';

import Axios from 'axios';

import '../../../Scss/Profile.scss';


function My(props) {

    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [ID, setID] = useState('');

    useEffect(() => {
        Axios.get("/api/users/auth")
            .then(response => {
                console.log(response)
                setID(response.data._id)
                setName(response.data.name)
                setEmail(response.data.email)
            });
    }, []);

    const handleName = (e) => {
        e.preventDefault();
        setName(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(Name, ID);

        const variable = {
            'name' : Name,
            'id' : ID,
        }

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
            {Name, Email && 
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
