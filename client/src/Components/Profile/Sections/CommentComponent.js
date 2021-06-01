import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { useHistory } from 'react-router-dom';

function CommentComponent(props) {

    const history = useHistory();
    const [CommentData, setCommentData] = useState([]);

    useEffect(() => {
        Axios.get(`/api/users/profile/comment/${history.location.pathname.split('/')[3]}`)
            .then(response => {
                console.log(response);
                // setCommentData(response.data.result);
            })
    }, [])


    return (
        <div className="myComment__list">
            <a href="/">덧글 내용</a>
            <div>21-05-11</div>
        </div>
    )
}

export default CommentComponent
