import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { FileAddOutlined } from "@ant-design/icons";
import '../../Scss/Posting.scss';


function ModifyPost(props) {

    console.log(props);
    
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Category, setCategory] = useState(0);
    const [Image, setImage] = useState("");
    const [UserInfo, setUserInfo] = useState([]);
    const [EditInfo, setEditInfo] = useState([]);

    useEffect(() => {

        Axios.get("/api/users/auth")
            .then(response => {
                console.log(response)
                setUserInfo(response.data);
            });

        Axios.get(`/api/post/postDetail/${props.match.params.id}`)
            .then(response => {
                console.log(response);
                // setEditInfo(response.data.post);
            })
    }, [])

    const handleTitle = (e) => {
        e.preventDefault();
        
        setTitle(e.currentTarget.value);
    }

    const handleDescription = (e) => {
        e.preventDefault();

        setDescription(e.currentTarget.value);
    }

    const handleCategory = (e) => {
        setCategory({ value: e.target.value });
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();


        const variable = {
            "title": Title,
            "description": Description,
            "category": Number(Category.value),
            "imgUrl" : Image,
            "creator": UserInfo.name,
        }

        // Axios.post(`/api/post/update/${EditInfo.}`, variable)
        //     .then(response => {
        //         if(response.data.success){
        //             props.history.push("/");
        //         } else {
        //             alert("포스팅에 실패하였습니다.");
        //         }
        // })
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
                    <select className='postingCategory' onChange={handleCategory}>
                        {categoryOptions.map((item, idx) => (
                            <option>{categoryOptions[idx].label}</option>
                        ))}
                    </select>

                    <input className='postingTitle' type="text" placeholder="제목을 입력해주세요." onChange={handleTitle} />

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
                
                <textarea className='postingTextarea' placeholder="내용을 입력하세요." onChange={handleDescription}></textarea>

                <button className='postingBtn' onClick={handleSubmit}>작성</button>
            </div>
        </div>
    )
}

export default withRouter(ModifyPost)
