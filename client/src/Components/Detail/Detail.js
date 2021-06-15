import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Axios from "axios";

import Like from "./Sections/Like";
import Comment from './Sections/Comment';

import { EyeOutlined, HeartOutlined, CommentOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons';
import "../../Scss/Detail.scss";


function Detail(props) {

    const [DetailData, setDetailData] = useState([]);
    const [LikeCount, setLikeCount] = useState(0);
    const [CommentCount, setCommentCount] = useState(0);
    const [Comments, setComments] = useState([]);
    const [Admin, setAdmin] = useState(false);
    
    const createdAt = (DetailData.createdAt || '').split("T")[0];

    //데이터베이스에서 가져온 글들의 카테고리 값을 해석할 배열을 만듦 (Kkevi Do)
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

    useEffect(() => {

        //데이터베이스에서 모든 게시글들을 불러오기 (Kkevi Do)
        Axios.get(`/api/post/postDetail/${props.match.params.id}`)
            .then(response => {
                setDetailData(response.data.post)
            })

        //댓글띄우는 API (Blockmonkey)
        //댓글 갯수 상태값과, 댓글 정보를 Comments 상태값에 저장해 화면에 출력할 것 (Blockmonkey);
        Axios.get(`/api/comments/${props.match.params.id}`)
            .then(response => {
                if(response.data.success){
                    setCommentCount(response.data.result.length);
                    setComments(response.data.result);
                }
            });
        
        //좋아요 갯수 API (Blockmonkey);
        //현재 글의 _id값을 포함해 axios로 리퀘스트를 보내면,
        //현재 글의 좋아요 갯수를 가져올 수 있다.
        Axios.get(`/api/like/${props.match.params.id}`)
            .then(response => {
                setLikeCount(response.data.liked.length);
            });

        //유저정보를 가져오는 API (Kkevi Do)
        Axios.get("/api/users/auth")
            .then(response => {
                setAdmin(response.data.isAdmin);
            });

    }, [props]);


    //게시글을 삭제하는 API (Kkevi Do)
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

    //게시글을 수정하는 링크 (Kkevi Do)
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
                            {!Admin ? null
                            :<div>
                                <div onClick={handleDelete}><CloseOutlined /></div>
                                <div onClick={handleEdit}><EditOutlined /></div>
                            </div>
                            }
                        </div>
                </div>
                <div className="detailWrapper_description">{DetailData.description}</div>
                <Like />
            </div>
            
            {/* 모든 덧글을 출력한 배열을 props로 넘겨줌 (Kkevi Do) */}
            <Comment commentsList={Comments} />
        </div>
    )
}

export default withRouter(Detail)