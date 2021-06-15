import React, { useState } from 'react';
import Axios from "axios";

import { CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';

function Single(props) {

    const [ReplyContent, setReplyContent] = useState("");   
    const [Toggle, setToggle] = useState(false); 

    //실시간으로 input내용 감지 (Kkevi Do)
    const handleReplyContent = (e) => {
        setReplyContent(e.currentTarget.value);
    }

    //답글 작성 API (Kkevi Do)
    const handleReplySubmit = (e) => {
        if(ReplyContent.length < 3){
            alert("댓글은 3글자 이상 작성해주세요.");
            return ;
        };

        //답글을 작성하려고 하는 덧글을 파악 (Kkevi Do)
        const currentComment_id = props.comment._id

        //작성한 답글의 내용과 답글의 부모 덧글 _id값을 refComment로 넘겨줌. (Kkevi Do)
        const variables = {
            refComment : currentComment_id,
            content : ReplyContent,
        }

        Axios.post(`/api/comments/createReply/${props.url_id}`, variables)
            .then(response => {
                console.log(response)
                if(response.data.success){
                    setReplyContent("");
                    setToggle(false);
                    window.location.reload();
                } else {
                    alert("로그인 후 덧글을 작성해주세요.");
                }
            });
    }

    //답글 toggle (Kkevi Do)
    const handleToggle = (e) => {
        setToggle(!Toggle);
    }

    return (
        <React.Fragment>
            {<div className='detailWrapper_comment__contents' id={props.id}>
                <div className="detailWrapper_comment_creator">
                        <div>
                            <div>{props.comment.creator.name}</div>
                            <div>{props.comment.createdAt.split("T")[0]}</div>    
                        </div>
                        {/* 덧글 작성자와 덧글을 삭제하려는 자의 name값이 일치하면 삭제 버튼이 보인다. (Kkevi Do) */}
                        {props.userInfo.name === props.comment.creator.name ?
                        <CloseOutlined onClick={props.delete} /> : null}
                </div>
                <div className="detailWrapper_comment_reply">
                    <div>{props.comment.content}</div>
                    <button onClick={handleToggle} >답글</button>
                </div>
                
            {Toggle &&
                <ReplyBtn className="detailWrapper_comment__column">
                    <textarea
                        value = {ReplyContent}
                        placeholder="답글을 달아주세요."
                        onChange = {handleReplyContent}
                    />
                    <button onClick={handleReplySubmit} >작성</button>
                </ReplyBtn>
            }
            </div>}
        </React.Fragment>
    )
}

export default Single

const ReplyBtn = styled.div`
    margin-bottom: -15px;
`