import React, { useState, useEffect } from 'react';

import Axios from "axios";

import { CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Single from './Single';

function Reply(props) {

    console.log(props)

    return (
        <ReplyWrapper>
           {props.refComment?
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
            </div> : null}
        </ReplyWrapper>
    )
}

export default Reply

const ReplyWrapper = styled.div`
    background-color: #F6F5F5;
    .detailWrapper_comment__contents{
        padding-left: 80px;
    }
`;
