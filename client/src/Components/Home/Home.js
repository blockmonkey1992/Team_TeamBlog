import React from 'react';
import { Link } from 'react-router-dom';

import "../../Scss/Home.scss";
import { EyeOutlined, HeartOutlined, CommentOutlined } from '@ant-design/icons';

function Home(props) {

    return (
        <Link className='homeLink' to={{
            pathname: `/detail/${props.id}`,
            state : {props},
            }}>

            <div className="homeCard">
                <div className="homeCard_column">
                    <div className="homeCard_ImgContainer">
                        <img src={props.imgSrc} />
                    </div>
                </div>
                <div className="homeCard_column">
                    <div className="homeCard_description">
                        <div className="homeCard__title">{props.title}</div>
                        <div className="homeCard__date">{props.createdAt.split("T")[0]}</div>
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
        </Link>
    )
}

export default Home
