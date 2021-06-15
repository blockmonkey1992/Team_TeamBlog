import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Menu from './Sections/Menu';
import My from './Sections/My';
import Like from './Sections/Like';
import Comment from './Sections/Comment';

import "../../Scss/Profile.scss";

function Profile(props) {
    return (
        <div className="register_my__container">
            {/* props로 받아온 유저정보를 화면에 렌더링함 */}
            {props.user.userData && 
                <div className="register_my__wrapper">
                    <div className="register_my__wrapper-title"><p>{props.user.userData.name}</p></div>
                    <div className="myWrapper">
                        <Menu
                            id={props.user.userData._id}
                            name={props.user.userData.name}
                            email={props.user.userData.email}
                        />
                        <Switch>
                            <Route exact path="/profile/:userId" component={My} />
                            <Route path="/profile/like/:userId" component={Like} />
                            <Route path="/profile/comment/:userId" component={Comment} />
                        </Switch>
                    </div>
                </div>
            }
        </div>
    )
}

export default Profile
