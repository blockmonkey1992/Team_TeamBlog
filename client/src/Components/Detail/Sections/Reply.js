import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import Axios from "axios";

function Reply(props) {

    // console.log(props);

    const [Comments, setComments] = useState([]);
    const [Content, setContent] = useState("");
    const currentUser = useSelector(state => state.user);

    useEffect(() => {
        Axios.get(`/api/comments/${props.props.match.params.id}`)
            .then(response => {
                setComments(response.data.result);
                // console.log(Comments);
            });
    }, [Comments.length]);

    const handleContent = (e) => {
        setContent(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        if(Content.length < 3){
            alert("댓글은 3글자 이상 작성해주세요.");
            return ;
        };

        const variables = {
            content : Content,
        }
        Axios.post(`/api/comments/create/${props.props.match.params.id}`, variables)
            .then(response => {
                if(response.data.success){
                    alert("댓글작성완료");
                    setContent("");
                    // window.location.reload();
                } else {
                    alert("댓글작성실패");
                }
            });
    }

    return (
        <div>
            <div className="detailWrapper_comment__column">
                <textarea 
                    value={Content} 
                    placeholder="답글을 달아주세요." 
                    onChange={handleContent}
                />
                <button onClick={handleSubmit}>작성</button>
            </div>
        </div>
    )
}

export default Reply
