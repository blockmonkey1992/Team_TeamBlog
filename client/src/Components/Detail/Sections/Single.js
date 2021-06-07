import React, { useState, useEffect } from 'react';
import Axios from "axios";

import { CloseOutlined } from '@ant-design/icons';

function Single(props) {

    console.log(props)

    const [ReplyContent, setReplyContent] = useState("");

    const handleReplyContent = (e) => {
        setReplyContent(e.currentTarget.value);
    }

    const handleReplySubmit = (e) => {
        if(ReplyContent.length < 3){
            alert("댓글은 3글자 이상 작성해주세요.");
            return ;
        };

        const currentComment = e.currentTarget.parentNode.parentNode.parentNode;
        const currentComment_id = props.allComments[currentComment.getAttribute('id')]._id

        const variables = {
            refComment : currentComment_id,
            content : ReplyContent,
        }

        Axios.post(`/api/comments/createReply/${props.url_id}`, variables)
            .then(response => {
                if(response.data.success){
                    setReplyContent("");
                    window.location.reload();
                } else {
                    alert("댓글작성실패");
                }
            });
    }

    const elems = document.getElementsByClassName('toggle');

    const handleClick = (e) => {
        let target_id = e.target.parentNode.parentNode.getAttribute('id');

        for( let i = 0; i < elems.length; i+= 1 ){
            let elems_id = document.getElementById(`${i}`).getAttribute('id')
            if(target_id === elems_id){
                elems[i].classList.toggle('toggle_fold');
            }
        }
    }

    return (
        <React.Fragment>
            {!props.refComment ?
            <div className='detailWrapper_comment__contents' id={props.id}>
                <div className="detailWrapper_comment_creator">
                        <div>
                            <div>{props.creator}</div>
                            <div>{props.createdAt}</div>    
                        </div>
                        {props.userInfo.name === props.creator ?
                        <CloseOutlined onClick={props.delete} /> : <div></div>}
                </div>
                <div className="detailWrapper_comment_reply">
                    <div>{props.contents}</div>
                    <button onClick={handleClick} >답글</button>
                </div>
                <div className='toggle' id={props.id}>
                    <div className="detailWrapper_comment__column">
                        <textarea
                            value = {ReplyContent}
                            placeholder="답글을 달아주세요."
                            onChange = {handleReplyContent}
                        />
                        <button onClick={handleReplySubmit} >작성</button>
                    </div>
                </div>
            </div> : null}
        </React.Fragment>
    )
}

export default Single
