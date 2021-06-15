import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import Axios from 'axios';

import { FileAddOutlined } from "@ant-design/icons";
import '../../Scss/Posting.scss';


function ModifyPost(props) {
    const [Image, setImage] = useState("");
    const [EditTitle, setEditTitle] = useState('');
    const [EditDescription, setEditDescription] = useState('');
    const [EditCategory, setEditCategory] = useState(0);

    //수정 하고자 하는 해당 게시글을 불러오는 API
    //(Kkevi Do)
    useEffect(() => {
        Axios.get(`/api/post/postDetail/${props.match.params.id}`)
            .then(response => {
                console.log(response);
                setEditTitle(response.data.post.title);
                setEditDescription(response.data.post.description);
                setEditCategory(response.data.post.category);
            })
    }, [props])

    //실시간으로 input 내용을 감지 (Kkevi Do)
    const handleTitle = (e) => {
        e.preventDefault();
        setEditTitle(e.currentTarget.value);
    }

    //실시간으로 input 내용을 감지 (Kkevi Do)
    const handleDescription = (e) => {
        e.preventDefault();
        setEditDescription(e.currentTarget.value);
    }

    //실시간으로 input 내용을 감지 (Kkevi Do)
    const handleCategory = (e) => {
        setEditCategory({ value: e.target.value, label: e.target.label });
    }

    //글수정 API (Kkevi Do)
    const handleSubmit = (e) => {
        e.preventDefault();

        //작성한 글 정보들(제목, 내용, 카테고리, 작성자 등등)을 전송해주는 자료 (Kkevi Do)
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

    //글 작성을 취소할 시 확인문구
    const handleCancel = (e) => {
        e.preventDefault();

        if(window.confirm("작성 중인 글은 저장되지 않습니다. 계속하시겠습니까?") === true){
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

    //드랍존에 이미지를 올리고 난 뒤, header[config]설정 및 이미지 form-data를 이미지 S3저장 API에 전송 후, (Blockmonkey);
    //저장된 이미지를 response로 받아옴 (Blockmonkey);
    const imgDropHandler = (file) => {
        let formData = new FormData();
        const config = {
            header: {"content-type": "multipart/form-data"}
        };
        formData.append("postImg", file[0])

        Axios.post("/api/post/uploadImg", formData, config)
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

                {/* 드랍존에 넣으면 옆에 이미지가 출력되기 위한 코드.
                Image 상태값에 이미지를 S3에 올린 뒤, 파일을 받아와서 이미지를 띄워준다.
                (추가: S3에 올리고 난 뒤 만약, 다른 이미지를 올리면 S3에 기존 이미지가 그대로 남아있다. 개선여부는?)
                (Blockmonkey); */}
                
                <div className='postingImg_Container'>
                    <img src={Image} alt=""/>
                </div>
                
                <textarea className='postingTextarea' placeholder="내용을 입력하세요." value={EditDescription} onChange={handleDescription}></textarea>

                <div className='postingContents_footer'>
                    <button className='postingBtn cancelBtn' onClick={handleCancel}>취소</button>
                    <button className='postingBtn' onClick={handleSubmit}>수정</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(ModifyPost)
