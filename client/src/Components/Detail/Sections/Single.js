import React, { useState } from 'react';
import Axios from "axios";

import { CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';

function Single(props) {

    const [ReplyContent, setReplyContent] = useState("");   
    const [Toggle, setToggle] = useState(false); 

    //실시간으로 input내용 감지
    const handleReplyContent = (e) => {
        setReplyContent(e.currentTarget.value);
    }

    //답글 작성 API
    const handleReplySubmit = (e) => {
        if(ReplyContent.length < 3){
            alert("댓글은 3글자 이상 작성해주세요.");
            return ;
        };

        const currentComment_id = props.comment._id

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

    //답글 toggle
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
                        {/* 덧글 작성자와 덧글을 삭제하려는 자의 name값이 일치하면 삭제 버튼이 보인다. */}
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