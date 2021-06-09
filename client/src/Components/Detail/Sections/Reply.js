import React, { useState, useEffect } from 'react';

import Axios from "axios";

import { CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';

function Reply(props) {

    console.log(props)

    const [ChildCommentNum, setChildCommentNum] = useState(0);

    useEffect(() => {
        let commentNumber = 0;
        props.commentsList.map((comment)=> {
            if(comment.refComment === props.parentCommentId){
                commentNumber ++;
            }
        })
        setChildCommentNum(commentNumber);
    }, [props.commentsList])

    return (
        <div>
            {ChildCommentNum > 0 &&
                props.commentsList.map((itm, idx) => (
                    itm.refComment === props.parentCommentId &&
                    <ReplyWrapper>
                        <div className='detailWrapper_comment__contents' id={idx}>
                            <div className="detailWrapper_comment_creator">
                                <div>
                                    <div>{itm.creator.name}</div>
                                    <div>{itm.createdAt.split("T")[0]}</div>
                                </div>
                                {props.userInfo.name === itm.creator.name ?
                                <CloseOutlined onClick={props.delete} /> : null}
                            </div>
                            <div className="detailWrapper_comment_reply">
                                <div>{itm.content}</div>
                            </div>
                        </div>
                    </ReplyWrapper>
                ))
            }
        </div>
    )
}

export default Reply

const ReplyWrapper = styled.div`
    background-color: #EFF2F3;
    .detailWrapper_comment__contents{
        padding-left: 60px;
    }
`;
