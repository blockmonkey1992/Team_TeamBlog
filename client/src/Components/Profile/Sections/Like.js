import React, { useEffect, useState } from 'react';
import LikeComponent from './LikeComponent';

import Axios from "axios";


function Like() {

    return (
        <div className="myWrapper__container">
            <div className="myMy__title">좋아요 한 글 보기</div>
            <div className="myLike__contents">
                <LikeComponent />
                {/* {LikeData.map((itm, idx) => {
                    <LikeComponent
                        title={itm.whichPost.title}
                    />
                })} */}
            </div>
        </div>
    )
}

export default Like
