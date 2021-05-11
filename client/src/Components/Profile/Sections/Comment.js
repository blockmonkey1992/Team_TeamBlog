import React from 'react';
import CommentComponent from './CommentComponent';

function Comment() {
    return (
        <div className="myWrapper__container">
            <div className="myMy__title">작성 덧글</div>
            <div className="myComment_contents">
                <CommentComponent />
            </div>
           
        </div>
    )
}

export default Comment
