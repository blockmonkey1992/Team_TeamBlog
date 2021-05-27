import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import Axios from "axios";

function Comment(props) {
    const [Comments, setComments] = useState([]);
    const [Content, setContent] = useState("");
    const currentUser = useSelector(state => state.user);

    useEffect(() => {
        Axios.get(`/api/comments/${props.match.params.id}`)
            .then(response => {
                setComments(response.data.result);
                console.log(Comments);
            });
    }, [Comments.length]);

    const handleContent = (e) => {
        setContent(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        if(Content.length < 3){
            alert("댓글은 3글자 이상 작성해주세요.");
            return ;
        };

        const variables = {
            content : Content,
        }
        Axios.post(`/api/comments/create/${props.match.params.id}`, variables)
            .then(response => {
                if(response.data.success){
                    alert("댓글작성완료");
                    setContent("");
                } else {
                    alert("댓글작성실패");
                }
            });
    }

    return (
 
    <div className="detailWrapper_comment">

        {Comments.length > 1 && 
            <div className="detailWrapper_comment__column">
                {Comments.map((item, idx)=>(
                    <div key={idx}>
                        <div className="detailWrapper_comment_creator">
                                <div>{item.creator.name}</div>
                                <div>{item.createdAt.split(".")[0].replace("T", " ")}</div>
                        </div>
                        <div className="detailWrapper_comment_reply">
                            <div>{item.content}</div>
                            <button>답글</button>
                        </div>
                    </div>
                ))}
            </div>
        }




        <div className="detailWrapper_comment__column">
            <textarea 
                value={Content} 
                placeholder="덧글을 달아주세요." 
                onChange={handleContent}
            />
            <button onClick={handleSubmit}>작성</button>
        </div>
    </div>

    )
}

export default withRouter(Comment);
