import React from 'react';
import "../../Scss/Home.scss";
import { EyeOutlined, HeartOutlined, CommentOutlined } from '@ant-design/icons';
import { Row, Col, Divider } from 'antd';

function Home(props) {
    return (
        <div className="homeCard">
            <div className="homeCard_column">
                <img src="#" />
            </div>
            <div className="homeCard_column">
                <div className="homeCard_description">
                    <div className="homeCard__title">{props.title}</div>
                    <div className="homeCard__date">{props.createdAt}</div>
                </div>
                <div className="homeCard_description">
                    <div className="homeCard__author">{props.creator}</div>
                    <div className="homeCard__counts">
                        <div className="homeCard__counts-view"><EyeOutlined /> {props.views}</div>
                        <div className="homeCard__counts-like"><HeartOutlined /> 0</div>
                        <div className="homeCard__counts-comment"><CommentOutlined /> 0</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
