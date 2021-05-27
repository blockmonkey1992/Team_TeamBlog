import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Axios from "axios";
import Like from "./Sections/Like";
import Comment from './Sections/Comment';
import { EyeOutlined, HeartOutlined, CommentOutlined, HeartFilled } from '@ant-design/icons';
import "../../Scss/Detail.scss";


function Detail(props) {

    const { location, history } = props;
    const root = location.state.props;
    const [LikeCount, setLikeCount] = useState(0);
    const [CommentCount, setCommentCount] = useState(0);

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
        console.log(props);
        if(location.state === undefined){
            history.push('/');
        }

        //댓글띄우는 API
        Axios.get(`/api/comments/${props.match.params.id}`)
            .then(response => {
                //댓글 띄우고 처리내용?
                setCommentCount(response.data.result.length);
            });
        //좋아요 갯수 API
        Axios.get(`/api/like/${props.match.params.id}`)
        .then(response => {
            setLikeCount(response.data.liked.length);
        });
    }, []);
    

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
                        <div><HeartOutlined /> {LikeCount}</div>
                        <div><CommentOutlined /> {CommentCount}</div>
                    </div>
                </div>
                <div className="detailWrapper_description">{root.description}</div>
                <Like />
            </div>
            
                <Comment />

        </div>
    )
}

export default withRouter(Detail)