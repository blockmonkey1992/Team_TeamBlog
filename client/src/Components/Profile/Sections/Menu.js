import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../../Login/Logout';

import { UserOutlined, HeartOutlined, CommentOutlined, LogoutOutlined } from '@ant-design/icons';
import "../../../Scss/Profile.scss";

function Menu(props) {

    return (
        <div className="myMenu__Wrapper">
            <div className="myMenu__title">나의 정보</div>
            <div className="myMenu__contents">
                <div className="myMenu__list">
                    <UserOutlined />
                    <Link to={{
                        pathname: `/profile/${props.id}`
                    }}>My</Link>
                </div>
                <div className="myMenu__list">
                    <HeartOutlined />
                    <Link to={{
                        pathname: `/profile/like/${props.id}`
                    }}>Like</Link>
                </div>
                <div className="myMenu__list">
                    <CommentOutlined />
                    <Link to={{
                        pathname: `/profile/comment/${props.id}`
                    }}>Comment</Link>
                </div>
                <div className="myMenu__list">
                    <LogoutOutlined />
                    <Logout />
                    {/* <a href="/">Logout</a> */}
                </div>
            </div>
        </div>
    )
}

export default Menu
