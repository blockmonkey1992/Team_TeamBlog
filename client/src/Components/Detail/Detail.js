import React from 'react';
import { EyeOutlined, HeartOutlined, CommentOutlined, HeartFilled } from '@ant-design/icons';

function Detail() {
    return (
        <div>
            <div className="detailWrapper">
                <div className="detailWrapper_title">
                    <div className="detailColumn">
                        <div>Catetory</div>
                        <div>Title</div>
                        <div>Date</div>
                    </div>
                    <div className="detailColumn">
                        <div><EyeOutlined /> Number</div>
                        <div><HeartOutlined /> Number</div>
                        <div><CommentOutlined /> Number</div>
                    </div>
                </div>
                <div className="detailWrapper_description">Description</div>
                <div className="detailWrapper_like"><HeartFilled /> Number</div>  
            </div>
            <div className="detailWrapper_comment">
                <div className="detailWrapper_comment__column">
                    <div className="detailWrapper_comment_creator">
                        <div>Nickname</div>
                        <div>Date</div>
                    </div>
                    <div className="detailWrapper_comment_reply">
                        <div>Comment</div>
                        <button>답글</button>
                    </div>
                </div>
                <div className="detailWrapper_comment__column">
                    <input placeholder="덧글을 달아주세요." />
                    <button>작성</button>
                </div>
            </div>
        </div>
    )
}

export default Detail

