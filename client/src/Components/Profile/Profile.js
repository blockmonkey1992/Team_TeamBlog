import React from 'react'
import { Route, Switch } from 'react-router-dom';
import "../../Scss/Profile.scss";

import Menu from './Sections/Menu';
import My from './Sections/My';
import Like from './Sections/Like';
import Comment from './Sections/Comment';


function Profile() {
    return (
        <div className="register_my__container">
            <div className="register_my__wrapper">
                <div className="register_my__wrapper-title">User Name</div>
                <div className="myWrapper">
                    <Menu />
                    <Switch>
                        <Route exact path="/profile/:user/" component={My} />
                        <Route exact path="/profile/:user/like" component={Like} />
                        <Route exact path="/profile/:user/comment" component={Comment} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Profile
