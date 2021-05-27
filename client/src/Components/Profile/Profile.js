import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import Axios from "axios";

import Menu from './Sections/Menu';
import My from './Sections/My';
import Like from './Sections/Like';
import Comment from './Sections/Comment';

import "../../Scss/Profile.scss";

function Profile() {

    const [UserInfo, setUserInfo] = useState([]);

    useEffect(() => {
        Axios.get("/api/users/auth")
            .then(response => {
                setUserInfo(response.data);
            });
    }, []);
    
    return (
        <div className="register_my__container">
            <div className="register_my__wrapper">
                {/* {props.user &&
                <div className="register_my__wrapper-title">{props.user.userData.name}</div>
                } */}
                <div className="register_my__wrapper-title"><p>{UserInfo.name}</p></div>
                <div className="myWrapper">
                    <Menu />
                    <Switch>
                        <Route exact path="/profile/:user" component={My} />
                        <Route exact path="/profile/:user/like" component={Like} />
                        <Route exact path="/profile/:user/comment" component={Comment} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Profile
