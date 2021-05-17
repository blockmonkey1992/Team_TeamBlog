import React from 'react';
import { HeartOutlined, MessageOutlined, EyeOutlined } from '@ant-design/icons';

function LikeComponent() {
    return (
        <div className="myLike__list">
                <div className="myLike__title">
                    <div>제목</div>
                    <div>21-04-25</div>
                </div>
                <div className="myLike__descriptions">
                    <div>내용</div>
                    <div className="myLike__numbers">
                        <div><EyeOutlined /> 조회수</div>
                        <div><HeartOutlined /> 좋아요</div>
                        <div><MessageOutlined /> 덧글수</div>
                    </div>
                </div>
            </div>
    )
}

export default LikeComponent
