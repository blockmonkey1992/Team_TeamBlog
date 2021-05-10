import React from 'react';
import { UserOutlined, HeartOutlined, CommentOutlined, LogoutOutlined } from '@ant-design/icons';

import "../../../Scss/Profile.scss";

function Menu() {
    return (
        <div className="myMenu__Wrapper">
            <div className="myMenu__title">나의 정보</div>
            <div className="myMenu__contents">
                <div className="myMenu__list">
                    <UserOutlined />
                    <a href="/profile/:user/">My</a>
                </div>
                <div className="myMenu__list">
                    <HeartOutlined />
                    <a href="/profile/:user/like">Like</a>
                </div>
                <div className="myMenu__list">
                    <CommentOutlined />
                    <a href="/profile/:user/comment">Comment</a>
                </div>
                <div className="myMenu__list">
                    <LogoutOutlined />
                    <a href="/">Logout</a>
                </div>
            </div>
        </div>
    )
}

export default Menu
