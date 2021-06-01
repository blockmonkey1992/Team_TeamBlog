import React from 'react';
import LikeComponent from './LikeComponent';
import NoLike from './NoLike';


function Like(props) {

    console.log(props)

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
