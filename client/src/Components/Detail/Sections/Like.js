import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import Axios from "axios";
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

function Like(props){
    const [LikeCount, setLikeCount] = useState(0);
    const [LikeActionState, setLikeActionState] = useState(false);
    let user = useSelector(state => state.user); //현재 로그인한 유저의 상태값은 리덕스를 활용해 불러옴. (Blockmonkey)

    useEffect(() => {
        //좋아요는 로그인한 유저의 권한으로 한정, 따라서 로그인되어있는지 확인 후 (Blockmonkey)
        if(user.userData){
            //Axios를 활용해 api로 신호전달; (Blockmonkey)
            Axios.get(`/api/like/${props.match.params.id}`)
            .then(response => {
                setLikeCount(response.data.liked.length);
                response.data.liked.forEach((item, idx)=> {
                    if(user.userData._id === item.likedUser){
                        setLikeActionState(true);
                    } else {
                        setLikeActionState(false);
                    }
                })
            });
        } else {
            //만약 로그인이 되어있지 않다면, 아무런 동작도 하지않음;(Blockmonkey)
            return ;
        }
    }, [user.userData]);

    //좋아요 버튼을 클릭했을 때, 좋아요 생성 혹은 삭제 (Blockmonkey);
    const likeBtnHandler = (e) => {
        e.preventDefault();
        Axios.get(`/api/like/likeaction/${props.match.params.id}`)
            .then(response => {
                if(response.data.addLikeSuccess){
                    //본인이 좋아요한 유저가 아니라, 좋아요를 추가했을 때, (Blockmonkey)
                    setLikeCount(LikeCount+1);
                    setLikeActionState(true);
                } else {
                    //본인이 좋아요한 유저라, 좋아요를 삭제했을 때, (Blockmonkey)
                    setLikeCount(LikeCount-1);
                    setLikeActionState(false);
                }
            });
    }

    return (
        <div>
            <div className="detailWrapper_like">
                {/* LikeAction의 상태값(본인이 좋아요 했는지 확인)에 따라, 꽉찬 하트 혹은 빈하트출력 (Blockmonkey) */}
                {LikeActionState ?
                    <HeartFilled onClick={likeBtnHandler} style={{color : '#CA526B' }} /> :
                    <HeartOutlined onClick={likeBtnHandler} style={{opacity : '0.7' }} />
                }
                {LikeActionState ?
                    <span style={{color : '#CA526B' }}>{LikeCount}</span> :
                    <span style={{opacity : '0.7' }}>{LikeCount}</span>
                }
            </div>  
        </div>
    )
}

export default withRouter(Like);
