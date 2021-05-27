import React from 'react';

import '../../../Scss/Profile.scss';


function My(props) {

    console.log(props);
    
    return (
        <div className="myWrapper__container">
            <div className="myMy__title">개인정보 설정</div>
            <div className="myMy__contents">
                <div className="myMy__inputs">
                    <input value={props.location.state.name} />
                    <input value={props.location.state.email} />
                </div>
                <button>수정</button>
            </div>
        </div>
    )
}

export default My
