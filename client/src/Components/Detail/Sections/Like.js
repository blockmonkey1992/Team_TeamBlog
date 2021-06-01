import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

function Like(props){
    const dispatch = useDispatch()
    const [LikeCount, setLikeCount] = useState(0);
    const [LikeActionState, setLikeActionState] = useState(false);
    let user = useSelector(state => state.user);

    useEffect(() => {
        if(user.userData){
            Axios.get(`/api/like/${props.match.params.id}`)
            .then(response => {
                setLikeCount(response.data.liked.length);
                response.data.liked.map((item, idx)=> {
                    if(user.userData._id === item.likedUser){
                        setLikeActionState(true);
                    } else {
                        setLikeActionState(false);
                    }
                })
            });
        } else {
            return ;
        }
    }, [user.userData]);

    const likeBtnHandler = (e) => {
        e.preventDefault();
        Axios.get(`/api/like/likeaction/${props.match.params.id}`)
            .then(response => {
                if(response.data.addLikeSuccess){
                    //본인이 좋아요한 유저가 아니라, 좋아요를 추가했을 때,
                    setLikeCount(LikeCount+1);
                    setLikeActionState(true);
                } else {
                    //본인이 좋아요한 유저라, 좋아요를 삭제했을 때,
                    setLikeCount(LikeCount-1);
                    setLikeActionState(false);
                }
            });
    }
    return (
        <div>
            <div className="detailWrapper_like">
                {LikeActionState ?
                    <HeartFilled onClick={likeBtnHandler} /> :
                    <HeartOutlined onClick={likeBtnHandler} />
                }
                <span>{LikeCount}</span>
            </div>  
        </div>
    )
}

export default withRouter(Like);
