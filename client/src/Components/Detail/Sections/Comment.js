import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Axios from "axios";

import Reply from './Reply';
import Single from './Single';

function Comment(props) {

    const [Content, setContent] = useState("");
    const [UserInfo, setUserInfo] = useState("");

    useEffect(() => {
        Axios.get("/api/users/auth")
            .then(response => {
                setUserInfo(response.data);
            });
    }, []);

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

        Axios.post(`/api/comments/create/${props.match.params.id}`, variables)
            .then(response => {
                if(response.data.success){
                    setContent("");
                    // props.refreshFunction(response.data.success);
                    window.location.reload();
                } else {
                    alert("댓글작성실패");
                }
            });
    }

    const handleDelete = (e) => {
        e.preventDefault();
        const currentComment = e.currentTarget.parentNode.parentNode;
        const currentComment_id = props.commentsList[currentComment.getAttribute('id')]._id

        console.log(currentComment)

        Axios.delete(`/api/comments/delete/${currentComment_id}`)
            .then(response => {
                if(response.data.success === true){
                    alert('덧글 삭제가 완료 되었습니다.')
                    window.location.reload();
                }else{
                    alert('덧글을 삭제할 수 없습니다.')
                }
            })
    }

    return (
 
    <div className="detailWrapper_comment">

        {props.commentsList.length > 0 && props.commentsList.map((itm, idx) => (
            (!itm.refComment &&
                <div className="detailWrapper_comment__column">
                    <React.Fragment>
                        <Single 
                            key={idx}
                            comment = {itm}
                            delete = {handleDelete}
                            id = {idx}
                            url_id = {props.match.params.id}
                            userInfo = {UserInfo}
                            refreshFunction = {props.refreshFunction}
                        />
                        <Reply
                            commentsList={props.commentsList}
                            parentCommentId = {itm._id}
                            userInfo = {UserInfo}
                            delete = {handleDelete}
                            id = {idx}
                            url_id = {props.match.params.id}
                        />
                    </React.Fragment>
                </div>
            )
        ))}
            
        <div className="detailWrapper_comment__column">
            <textarea 
                value={Content} 
                placeholder="덧글을 달아주세요." 
                onChange={handleContent}
            />
            <button onClick={handleSubmit}>작성</button>
        </div>
    </div>
    )
}

export default withRouter(Comment);
