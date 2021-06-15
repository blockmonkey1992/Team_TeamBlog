import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from "axios";

import { EyeOutlined } from '@ant-design/icons';

function LikeComponent(props) {

    const history = useHistory();
    const [LikeData, setLikeData] = useState([]);

    //Axios를 이용하여 좋아요를 누른 값을 가져오기
    useEffect(() => {
        Axios.get(`/api/users/profile/like/${history.location.pathname.split('/')[3]}`)
            .then(response => {
                setLikeData(response.data.result);
            })
    }, [LikeData, history])

    return (
        <div>
            {LikeData.length === 0? <p className='noData'>좋아요를 누른 글이 없습니다.</p>
                : LikeData && LikeData.map((itm, idx) => (
                    <div className="myLike__list">
                        <div className="myLike__title">
                            <a href={`/detail/${itm.whichPost._id}`} target='blank'>{itm.whichPost.title}</a>
                            <div>{itm.whichPost.createdAt.split('T')[0]}</div>
                        </div>
                        <div className="myLike__descriptions">
                            <div>{itm.whichPost.description}</div>
                            <div className="myLike__numbers">
                                <div><EyeOutlined /> {itm.whichPost.views}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default LikeComponent
