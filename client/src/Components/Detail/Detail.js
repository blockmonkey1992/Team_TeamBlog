import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Axios from "axios";

import Like from "./Sections/Like";
import Comment from './Sections/Comment';
import { EyeOutlined, HeartOutlined, CommentOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons';
import "../../Scss/Detail.scss";
// import { response } from 'express';


function Detail(props) {

    const [DetailData, setDetailData] = useState([]);
    const [LikeCount, setLikeCount] = useState(0);
    const [CommentCount, setCommentCount] = useState(0);
    const [Comments, setComments] = useState([]);

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

    const createdAt = (DetailData.createdAt || '').split("T")[0];

    useEffect(() => {
       
        Axios.get(`/api/post/postDetail/${props.match.params.id}`)
            .then(response => {
                // console.log(response);
                setDetailData(response.data.post)
            })

        //댓글띄우는 API
        Axios.get(`/api/comments/${props.match.params.id}`)
            .then(response => {
                //댓글 띄우고 처리내용?
                if(response.data.success){
                    setCommentCount(response.data.result.length);
                    setComments(response.data.result);
                }
            });
        
        //좋아요 갯수 API
        Axios.get(`/api/like/${props.match.params.id}`)
        .then(response => {
            setLikeCount(response.data.liked.length);
        });
    }, []);


    const handleDelete = (e) => {

        e.preventDefault();
        
        Axios.delete(`/api/post/delete/${props.match.params.id}`)
            .then(response => {
                if(response.data.success === true){
                    alert('성공적으로 삭제되었습니다.')
                    props.history.push('/');
                }
            });
    }

    const handleEdit = (e) => {
        props.history.push(`/update/${props.match.params.id}`)
    }

    return (
        <div className="detailContainer">
            <div className="detailWrapper">
                <div className="detailWrapper_title">
                    {DetailData.category &&
                        <div className="detailColumn">
                            <div className="detail__category">{categoryOptions[DetailData.category].label}</div>
                            <div>{DetailData.title}</div>
                            <div>{createdAt}</div>
                        </div>
                    }
                        <div className="detailColumn">
                            <div><EyeOutlined />{DetailData.views}</div>
                            <div><HeartOutlined /> {LikeCount}</div>
                            <div><CommentOutlined /> {CommentCount}</div>
                            <div onClick={handleDelete}><CloseOutlined /></div>
                            <div onClick={handleEdit}><EditOutlined /></div>
                        </div>
                </div>
                <div className="detailWrapper_description">{DetailData.description}</div>
                <Like />
            </div>
            <Comment commentsList={Comments} />
        </div>
    )
}

export default withRouter(Detail)