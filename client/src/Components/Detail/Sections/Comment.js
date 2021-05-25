import React, { useState, useEffect } from 'react';
// import Axios from "axios";

function Comment() {

    // const [Content, setContent] = useState("");

    // const handleContent = (e) => {
    //     setContent(e.currentTarget.value);
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     let dataToSubmit = {
    //         content : Content
    //     }
    //     //댓글작성 API
    //     Axios.post(`/api/comments/create/${props.match.params.id}`, dataToSubmit)
    //         .then(response => {
    //             alert("댓글작성 완료");
    //         });
    // }

    return (
        <div className="detailWrapper_comment__column">
            <div className="detailWrapper_comment_creator">
                <div>Nickname</div>
                <div>21-05-30</div>
            </div>
            <div className="detailWrapper_comment_reply">
                <div>굿굿~ 잘하셨네요 ㅋㅋ</div>
                <button>답글</button>
            </div>
                        {/* <div className="detailWrapper_comment__column">
            <textarea 
                value={Content} 
                placeholder="덧글을 달아주세요." 
                onChange={handleContent} 
            />
            <button onClick={handleSubmit}>작성</button>
        </div> */}
        </div>
    )
}

export default Comment
