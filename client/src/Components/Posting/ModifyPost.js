import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { FileAddOutlined } from "@ant-design/icons";
import '../../Scss/Posting.scss';


function ModifyPost(props) {
    const [Image, setImage] = useState("");
    const [EditTitle, setEditTitle] = useState('');
    const [EditDescription, setEditDescription] = useState('');
    const [EditCategory, setEditCategory] = useState(0);

    useEffect(() => {
        Axios.get(`/api/post/postDetail/${props.match.params.id}`)
            .then(response => {
                console.log(response);
                setEditTitle(response.data.post.title);
                setEditDescription(response.data.post.description);
                setEditCategory(response.data.post.category);
            })
    }, [])

    const handleTitle = (e) => {
        e.preventDefault();
        setEditTitle(e.currentTarget.value);
    }

    const handleDescription = (e) => {
        e.preventDefault();
        setEditDescription(e.currentTarget.value);
    }

    const handleCategory = (e) => {
        setEditCategory({ value: e.target.value, label: e.target.label });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const variable = {
            "title": EditTitle,
            "description": EditDescription,
            "category": Number(EditCategory.value),
        }

        Axios.post(`/api/post/update/${props.match.params.id}`, variable)
            .then(response => {
                if(response.data.success){
                    props.history.push(`/detail/${props.match.params.id}`);
                } else {
                    alert("수정에 실패하였습니다.");
                }
        })
    }

    const handleCancel = (e) => {
        
        e.preventDefault();

        if(window.confirm("작성 중인 글은 저장되지 않습니다. 계속하시겠습니까?") == true){
            props.history.push(`/detail/${props.match.params.id}`)
        }else{
            return false;
        }
    }

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
    ]

    const imgDropHandler = (file) => {
        let formData = new FormData();
        const config = {
            header: {"content-type": "multipart/form-data"}
        };
        formData.append("postImg", file[0])

        axios.post("/api/post/uploadImg", formData, config)
            .then(response => {
                setImage(response.data.img);
            });
    };

    return (
        <div className='postingWrapper'>
            <div className='postingContents'>
                <div className='postingContents__column'>
                    <select className='postingCategory' value={EditCategory} onChange={handleCategory}>
                        {categoryOptions.map((item, idx) => (
                            <option value={item.value} >{categoryOptions[idx].label}</option>
                        ))}
                        {/* <option value={0}>HTML/CSS</option>
                        <option value={1}>JS</option>
                        <option value={2}>React</option>
                        <option value={3}>Node/Express</option>
                        <option value={4}>MongoDB</option>
                        <option value={5}>Git/GitHub</option>
                        <option value={6}>HTTP</option>
                        <option value={7}>Algorithm</option>
                        <option value={8}>AWS</option>
                        <option value={9}>Network</option> */}
                    </select>

                    <input className='postingTitle' type="text" placeholder="제목을 입력해주세요." value={EditTitle} onChange={handleTitle} />

                    <Dropzone onDrop={imgDropHandler}>
                        {({getRootProps, getInputProps}) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()}/>
                                    <FileAddOutlined style={{ fontSize: "35px" }} />
                                </div>
                            </section>
                        )}
                    </Dropzone>
                </div>

                {/* 드랍존에 넣으면 옆에 이미지가 출력되기 위한 이미지태그. */}
                <div className='postingImg_Container'>
                    <img src={Image} alt="Image"/>
                </div>
                
                <textarea className='postingTextarea' placeholder="내용을 입력하세요." value={EditDescription} onChange={handleDescription}></textarea>

                <div className='postingContents_footer'>
                    <button className='postingBtn' className='cancelBtn' onClick={handleCancel}>취소</button>
                    <button className='postingBtn' onClick={handleSubmit}>수정</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(ModifyPost)
