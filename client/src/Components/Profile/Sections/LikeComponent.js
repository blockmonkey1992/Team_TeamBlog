import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { useHistory } from 'react-router-dom';

import NoLike from './NoLike';
import { EyeOutlined } from '@ant-design/icons';

function LikeComponent(props) {

    const history = useHistory();
    const [LikeData, setLikeData] = useState([]);

    useEffect(() => {
        Axios.get(`/api/users/profile/like/${history.location.pathname.split('/')[3]}`)
            .then(response => {
                console.log(response);
                setLikeData(response.data.result);
            })
    }, [])

    console.log(LikeData);

    // LikeData === []? <p>안돼</p> :

    return (
        <div>
            {
            LikeData &&
                LikeData.map((itm, idx) => (
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
