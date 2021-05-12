import Axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';

//ckEditor 깔기

function Posting(props) {
    
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Category, setCategory] = useState(0);


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
            "creator": "blockmonkey",
        }

        Axios.post('/api/post/create', variable)
            .then(response => {
                if(response.data.success){
                    alert("글작성완료");
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
                <input type="text" placeholder="title" value={Title} onChange={handleTitle} />
                <textarea placeholder="내용을 입력하세요." value={Description} onChange={handleDescription}
                    style={{height: '300px', resize: 'none'}}
                ></textarea>
                <button onClick={handleSubmit}>제출</button>
            </div>
        </div>
    )
}

export default Posting
