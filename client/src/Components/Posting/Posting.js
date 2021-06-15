import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import Axios from 'axios';

import { FileAddOutlined } from "@ant-design/icons";
import '../../Scss/Posting.scss';


function Posting(props) {
    
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Category, setCategory] = useState(0);
    const [Image, setImage] = useState("");
    const [UserInfo, setUserInfo] = useState([]);

    //유저 정보를 가져오는 API
    useEffect(() => {
        Axios.get("/api/users/auth")
            .then(response => {
                setUserInfo(response.data);
            });
    }, [])

    //실시간으로 input 내용을 감지
    const handleTitle = (e) => {
        e.preventDefault();
        setTitle(e.currentTarget.value);
    }

    //실시간으로 input 내용을 감지
    const handleDescription = (e) => {
        e.preventDefault();
        setDescription(e.currentTarget.value);
    }

    //카테고리 값을 변동할 수 있도록 제어
    const handleCategory = (e) => {
        setCategory({ value: e.target.value });
    }

    //글작성 API
    const handleSubmit = (e) => {
        e.preventDefault();

        const variable = {
            "title": Title,
            "description": Description,
            "category": Number(Category.value),
            "imgUrl" : Image,
            "creator": UserInfo.name,
        }

        Axios.post(`/api/post/create`, variable)
            .then(response => {
                if(response.data.success){
                    props.history.push("/");
                } else {
                    alert("포스팅에 실패하였습니다.");
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

    //React-Dropzone을 활용해 이미지를 끌어 올릴 수 있도록 함. (Blockmonkey);
    //header 설정을 multipart/form-data로 함으로써 이미지 데이터임을 표시하고, (Blockmonkey);
    //Dropzone에 Form데이터를 생성해, 이미지는 1개만 올릴 수 있도록 올린 파일의 [0]번째 값만을 추가함. (Blockmonkey);
    //그렇게 저장한 이미지를 백엔드의 이미지 업로드 API로 전송하면 S3버킷에 올리는 작업을 함. (Blockmonkey);
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
                    <select className='postingCategory' onChange={handleCategory}>
                        {categoryOptions.map((item, idx) => (
                            <option value={item.value}>{categoryOptions[idx].label}</option>
                        ))}
                    </select>

                    <input className='postingTitle' type="text" placeholder="제목을 입력해주세요." value={Title} onChange={handleTitle} />

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

                {/* 드랍존에 넣으면 옆에 이미지가 출력되기 위한 이미지태그. (Blockmoneky) */}
                <div className='postingImg_Container'>
                    <img src={Image} alt=""/>
                </div>
                
                <textarea className='postingTextarea' placeholder="내용을 입력하세요." value={Description} onChange={handleDescription}></textarea>

                <div className='postingContents_footer'>
                    <button className='postingBtn cancelBtn' onClick={handleCancel}>취소</button>
                    <button className='postingBtn' onClick={handleSubmit}>작성</button>
                </div>
                
            </div>
        </div>
    )
}

export default withRouter(Posting)
