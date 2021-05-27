import React, { useEffect } from 'react';
import LikeComponent from './LikeComponent';

import Axios from "axios";


function Like(props) {

    console.log(props);

    useEffect(() => {
        Axios.post(`/api/users/profile/${props.match.params.user}/like}`)
            .then(response => {console.log(response)})
    }, [])

    return (
        <div className="myWrapper__container">
            <div className="myMy__title">좋아요 한 글 보기</div>
            <div className="myLike__contents">
                <LikeComponent />
            </div>
        </div>
    )
}

export default Like
