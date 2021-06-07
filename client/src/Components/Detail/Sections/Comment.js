import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Axios from "axios";

import Reply from './Reply';
import Single from './Single';

function Comment(props) {

    const [Comments, setComments] = useState([]);
    const [Content, setContent] = useState("");
    const [UserInfo, setUserInfo] = useState("");

    useEffect(() => {
        Axios.get(`/api/comments/${props.match.params.id}`)
            .then(response => {
                setComments(response.data.result);
            });
        
        Axios.get("/api/users/auth")
            .then(response => {
                setUserInfo(response.data);
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

        Axios.post(`/api/comments/create/${props.match.params.id}`, variables)
            .then(response => {
                if(response.data.success){
                    setContent("");
                    window.location.reload();
                } else {
                    alert("댓글작성실패");
                }
            });
    }

    const handleDelete = (e) => {
        e.preventDefault();
        const currentComment = e.currentTarget.parentNode.parentNode;
        const currentComment_id = Comments[currentComment.getAttribute('id')]._id

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

        {Comments.length > 0 && 
            <div className="detailWrapper_comment__column">
                {Comments.map((item, idx)=>(
                    <React.Fragment>
                        <Single 
                            id={idx}
                            key={idx}
                            allComments = {Comments}
                            refComment = {item.refComment}
                            creator = {item.creator.name}
                            createdAt = {item.createdAt.split("T")[0]}
                            contents = {item.content}
                            userInfo = {UserInfo}
                            delete = {handleDelete}
                            url_id = {props.match.params.id}
                        />
                        

                        <Reply 
                            id = {idx}
                            allComments = {Comments}
                            refComment = {item.refComment}
                            creator = {item.creator.name}
                            createdAt = {item.createdAt.split("T")[0]}
                            contents = {item.content}
                            userInfo = {UserInfo}
                            delete = {handleDelete}
                        />
                    </React.Fragment>
                ))}
            </div>
        }
        
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
