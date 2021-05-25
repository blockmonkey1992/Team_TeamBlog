import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import { FileAddOutlined } from "@ant-design/icons";
import axios from 'axios';


function Posting(props) {
    
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Category, setCategory] = useState(0);
    const [Image, setImage] = useState("");

    useEffect(() => {
        //화면 랜더링 됐을때 내가 실행된다.
        //componentDidMount와 같은 역할을 하는 친구!
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
            "creator": "blockmonkey",
        }

        Axios.post('/api/post/create', variable)
            .then(response => {
                if(response.data.success){
                    props.history.push("/");
                } else {
                    alert("포스팅에 실패하였습니다.");
                }
        })
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
        <div style={{
            margin: '20px',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '30px',
            }} >
                <select onChange={handleCategory}>
                    {categoryOptions.map((item, idx) => (
                        <option value={item.value}>{categoryOptions[idx].label}</option>
                    ))}
                </select>
                <Dropzone onDrop={imgDropHandler}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                        <div style={{ width: 300, height: 240, border: "1px solid lightgray", display: "flex", alignItems: "center", justifyContent: "center"}}
                            {...getRootProps()}>
                            <input {...getInputProps()} />
                            <FileAddOutlined style={{ fontSize: "3rem" }} />
                        </div>
                        </section>
                    )}
                </Dropzone>
                {/* 드랍존에 넣으면 옆에 이미지가 출력되기 위한 이미지태그. */}
                <div>
                    <img src={Image} alt="Image"/>
                </div>
                <input type="text" placeholder="title" value={Title} onChange={handleTitle} />
                <textarea placeholder="내용을 입력하세요." value={Description} onChange={handleDescription}
                    style={{height: '300px', resize: 'none'}}
                ></textarea>
                <button onClick={handleSubmit}>제출</button>
            </div>
        </div>
    )
}

export default withRouter(Posting)
