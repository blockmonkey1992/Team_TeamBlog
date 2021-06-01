import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { useHistory, Link } from 'react-router-dom';

import { HeartOutlined, MessageOutlined, EyeOutlined } from '@ant-design/icons';

function LikeComponent(props) {

    const history = useHistory();
    const [LikeData, setLikeData] = useState([]);
    const [DetailData, setDetailData] = useState([]);

    useEffect(() => {
        Axios.get(`/api/users/profile/like/${history.location.pathname.split('/')[3]}`)
            .then(response => {
                console.log(response);
                setLikeData(response.data.result);
            })
    }, [])

    // Link to={{
    //     pathname: `/detail/${itm.whichPost._id}`,
    //     state : {props},

    return (
        <div>
            {LikeData &&
                LikeData.map((itm, idx) => (

                    Axios.get(`/api/post/postDetail/${itm.whichPost._id}`)
                        .then(response => {
                        }),
                    
                    <div className="myLike__list">
                        <div className="myLike__title">
                            <div>{itm.whichPost.title}</div>
                            <div>{itm.whichPost.createdAt.split('T')[0]}</div>
                            <a href={`/detail/${itm.whichPost._id}`}>원문보기</a>
                        </div>
                        <div className="myLike__descriptions">
                            <div>{itm.whichPost.description}</div>
                            <div className="myLike__numbers">
                                <div><EyeOutlined /> {itm.whichPost.views}</div>
                                <div><HeartOutlined /> 좋아요</div>
                                <div><MessageOutlined /> 덧글수</div>
                            </div>
                        </div>
                    </div>
                ))            
            }
        </div>
    )
}

export default LikeComponent
