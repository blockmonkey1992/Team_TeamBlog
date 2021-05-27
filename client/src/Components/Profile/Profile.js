import React, { useEffect } from 'react'
import { Route, Switch, Link } from 'react-router-dom';
import Menu from './Sections/Menu';
import My from './Sections/My';
import Like from './Sections/Like';
import Comment from './Sections/Comment';

import "../../Scss/Profile.scss";

function Profile(props) {
    
    return (
        <div className="register_my__container">
            <div className="register_my__wrapper">
                <div className="register_my__wrapper-title">User Name</div>
                <div className="myWrapper">
                    <Menu />
                    <Switch>
                        <Route exact path="/profile/:user/" component={My} />
                        <Route exact path="/profile/like/:user" component={Like} />
                        <Route exact path="/profile/comment/:user" component={Comment} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Profile
