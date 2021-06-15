import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Axios from "axios";

import Reply from './Reply';
import Single from './Single';

function Comment(props) {

    const [Content, setContent] = useState("");
    const [UserInfo, setUserInfo] = useState("");

    //유저정보를 가져오는 API (Kkevi Do)
    useEffect(() => {
        Axios.get("/api/users/auth")
            .then(response => {
                setUserInfo(response.data);
            });
    }, []);

    //실시간으로 input값을 감지 (Kkevi Do)
    const handleContent = (e) => {
        setContent(e.currentTarget.value);
    }

    //덧글 작성 API (Kkevi Do)
    const handleSubmit = () => {

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
                    alert("로그인 후 덧글을 작성해주세요.");
                }
            });
    }

    //덧글 삭제 API (Kkevi Do)
    const handleDelete = (e) => {
        e.preventDefault();

        //사용자가 클릭한 덧글을 가져오고
        //사용자가 클릭한 덧글의 id값을 이용하여 모든 덧글 리스트 중 클릭한 덧글의 _id값을 가져옴
        //(Kkevi Do)
        const currentComment = e.currentTarget.parentNode.parentNode;
        const currentComment_id = props.commentsList[currentComment.getAttribute('id')]._id

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
            
            //먼저 답글이 없는 일반 덧글과 답글이 있는 덧글을 구분하여 답글이 없는 일반 덧글은 그대로 출력하고,
            //refComment가 존재하는 답글이 일반 덧글처럼 출력되며 중복되는 것을 막기 위해
            //itm.refComment가 아닌 것은 출력하지 않도록 한다.
            //(Kkevi Do)
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
