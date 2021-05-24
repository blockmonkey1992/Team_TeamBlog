import React, { useEffect, useState } from 'react';
// import Axios from "axios";
import { EyeOutlined, HeartOutlined, CommentOutlined, HeartFilled } from '@ant-design/icons';
import "../../Scss/Detail.scss";

function Detail(props) {

    const { location, history } = props;
    const rootWay = location.state.props;

    useEffect(() => {

        console.log(location.state.props);
        if(location.state === undefined){
            history.push('/');
        }

    }, []);

    return (

        <div className="detailContainer">
            <div className="detailWrapper">
                <div className="detailWrapper_title">
                    <div className="detailColumn">
                        <div className="detail__category">React</div>
                        <div>{rootWay.title}</div>
                        <div>{rootWay.createdAt.split("T")[0]}</div>
                    </div>
                    <div className="detailColumn">
                        <div><EyeOutlined />{rootWay.views}</div>
                        <div><HeartOutlined /> 1</div>
                        <div><CommentOutlined /> 1</div>
                    </div>
                </div>
                <div className="detailWrapper_description">Description</div>
                <div className="detailWrapper_like"><HeartOutlined /><span>2</span></div>  
            </div>
            <div className="detailWrapper_comment">
                <div className="detailWrapper_comment__column">
                    <div className="detailWrapper_comment_creator">
                        <div>Nickname</div>
                        <div>21-05-30</div>
                    </div>
                    <div className="detailWrapper_comment_reply">
                        <div>굿굿~ 잘하셨네요 ㅋㅋ</div>
                        <button>답글</button>
                    </div>
                </div>
                <div className="detailWrapper_comment__column">
                    <textarea placeholder="덧글을 달아주세요." />
                    <button>작성</button>
                </div>
            </div>
        </div>
    )
}

export default Detail

