import React, { useState, useEffect } from 'react';

import Axios from "axios";

import { CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Single from './Single';

function Reply(props) {

    const [ChildCommentNumber, setChildCommentNumber] = useState(0);
    const [OpenReplyComments, setOpenReplyComments] = useState(false);

    useEffect(() => {

        let comment_num = 0;
        props.allComments.map((itm) => {
            if(itm._id === props.refComment){
                comment_num++
            }
        })
        setChildCommentNumber(comment_num);

    }, [props.allComments]);

    const renderReply = (parentCommentId) => {
        props.allComments.map((itm, idx) => (
            <React.Fragment>
                {itm._id === parentCommentId &&
                    <div style={{ width: "80%", paddingLeft: "80px", backgroundColor: '#F7F8F9'}}>
                        <Single
                            key={idx}
                            comment = {itm.content}
                        />

                        <div className='detailWrapper_comment__contents' id={props.id}>
                            <div className="detailWrapper_comment_creator">
                                <div>
                                    <div>{props.creator}</div>
                                    <div>{props.createdAt}</div>
                                </div>
                                {props.userInfo.name === props.creator ?
                                <CloseOutlined onClick={props.delete}/> : null}
                            </div>
                            <div className="detailWrapper_comment_reply">
                                <div>{props.contents}</div>
                            </div>
                        </div>
                    </div>
            }
            </React.Fragment>
        ))
    }

    const onHandleChange = () => {
        setOpenReplyComments(!OpenReplyComments);
    }

    return (
        <div>
            {ChildCommentNumber > 0 &&
            <p onClick={onHandleChange} style={{fontSize: "14px", margin: 0, color: "gray"}} >
                View {ChildCommentNumber} more comments
            </p>
            }
            {OpenReplyComments &&
                renderReply(props.refComment)
            }
        </div>
    )
}

export default Reply

{/* // const ReplyWrapper = styled.div`
//     
//     .detailWrapper_comment__contents{
//         padding-left: 80px;
//     }
// `; */}
