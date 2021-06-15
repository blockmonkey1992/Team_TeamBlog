import React from 'react';

import '../../../Scss/LandingCards.scss';
import { EyeOutlined } from '@ant-design/icons';

function LandingCards(props) {

    //props로 받아온 Cards 정보를 뿌리기
    return (
        <a href={`/detail/${props.id}`}>
            <div className="homeCard">
                <div className="homeCard_column">
                    <div className="homeCard_ImgContainer">
                        <img src={props.imgSrc} alt='/' />
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
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default LandingCards
