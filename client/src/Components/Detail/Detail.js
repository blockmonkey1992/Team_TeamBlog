import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
// import Axios from "axios";
import { EyeOutlined, HeartOutlined, CommentOutlined, HeartFilled } from '@ant-design/icons';
import "../../Scss/Detail.scss";
import Axios from "axios";


function Detail(props) {
    const [Content, setContent] = useState("");

    const { location, history } = props;
    const root = location.state.props;

    const categoryOptions = [
        { value : 0, label : "HTML/CSS" },
        { value : 1, label : "Js" },
        { value : 2, label : "React" },
        { value : 3, label : "Node/Express" },
        { value : 4, label : "MongoDB" },
        { value : 5, label : "Git/GitHub" },
        { value : 6, label : "HTTP" },
        { value : 7, label : "Algorithm" },
        { value : 8, label : "AWS" },
        { value : 9, label : "Network" },
    ];

    let sortingCategory = categoryOptions.filter( (list) => {
        return list.value === root.category;
    });
    

    useEffect(() => {
        if(location.state === undefined){
            history.push('/');
        }
        //댓글띄우는 API
        Axios.get(`/api/comments/${props.match.params.id}`)
            .then(response => console.log(response));
    }, []);

    const handleContent = (e) => {
        setContent(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let dataToSubmit = {
            content : Content
        }
        //댓글작성 API
        Axios.post(`/api/comments/create/${props.match.params.id}`, dataToSubmit)
            .then(response => {
                if(response.data.success){
                    alert("댓글작성 완료");
                } else {
                    alert("댓글작성 실패");
                }
            });
    }

    return (
        <div className="detailContainer">
            <div className="detailWrapper">
                <div className="detailWrapper_title">
                    <div className="detailColumn">
                        <div className="detail__category">{sortingCategory[0].label}</div>
                        <div>{root.title}</div>
                        <div>{root.createdAt.split("T")[0]}</div>
                    </div>
                    <div className="detailColumn">
                        <div><EyeOutlined /> {root.views}</div>
                        <div><HeartOutlined /> 1</div>
                        <div><CommentOutlined /> 1</div>
                    </div>
                </div>
                <div className="detailWrapper_description">{root.description}</div>
                <div className="detailWrapper_like"><HeartOutlined /><span>2</span></div>  
            </div>
            <div className="detailWrapper_comment">
                <div className="detailWrapper_comment__column">
                    <div className="detailWrapper_comment_creator">
                        <div>Nickname</div>
                        <div>21-05-30</div>
                    </div>
                    <div className="detailWrapper_comment_reply">
                        <div>굿굿~ 잘하셨네요 ㅋㅋ</div>
                        <button>답글</button>
                    </div>
                </div>
                <div className="detailWrapper_comment__column">
                    <textarea 
                        value={Content} 
                        placeholder="덧글을 달아주세요." 
                        onChange={handleContent} 
                    />
                    <button onClick={handleSubmit}>작성</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Detail)