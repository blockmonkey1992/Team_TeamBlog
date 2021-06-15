import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from "axios";

function CommentComponent(props) {

    const history = useHistory();
    const [CommentData, setCommentData] = useState([]);

    //Axios를 이용하여 작성한 덧글 값들을 가져오기 (Kkevi Do)
    useEffect(() => {
        Axios.get(`/api/users/profile/comment/${history.location.pathname.split('/')[3]}`)
            .then(response => {
                setCommentData(response.data.result);
            })
    }, [CommentData, history])


    return (
        <div>
            {CommentData.length === 0? <p className='noData'>작성한 덧글이 없습니다.</p>
                : CommentData && CommentData.map((itm, idx) => (
                    <div className="myComment__list">
                        <a href={`/detail/${itm.postId._id}`} target='blank'>{itm.content}</a>
                        <div>{itm.createdAt.split('T')[0]}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default CommentComponent
