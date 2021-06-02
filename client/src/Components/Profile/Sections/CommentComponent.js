import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { useHistory } from 'react-router-dom';

function CommentComponent(props) {

    const history = useHistory();
    const [CommentData, setCommentData] = useState([]);

    useEffect(() => {
        Axios.get(`/api/users/profile/comment/${history.location.pathname.split('/')[3]}`)
            .then(response => {
                console.log(response.data.result);
                setCommentData(response.data.result);
            })
    }, [])


    return (
        <div>
            {CommentData &&
                CommentData.map((itm, idx) => (
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
