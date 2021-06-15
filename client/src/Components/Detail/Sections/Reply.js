import React, { useState, useEffect } from 'react';

import { CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';

function Reply(props) {

    //답글이 존재 여부를 파악할 state값
    const [ChildCommentNum, setChildCommentNum] = useState(0);

    useEffect(() => {
        //초기 답글은 0개
        //전체 덧글 중, 답글이 존재하는 덧글을 찾을 때마다 commentNumber를 하나씩 더해준다.
        let commentNumber = 0;
        props.commentsList.forEach((comment)=> {
            if(comment.refComment === props.parentCommentId){
                commentNumber ++;
            }
        })
        setChildCommentNum(commentNumber);
    }, [props.commentsList, props.parentCommentId])

    return (
        <div>
            {/* 만약 답글이 0개 이상이라면 답글을 렌더링한다. */}
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
