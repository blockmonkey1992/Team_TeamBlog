import Axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';
import Select from "react-select";

function Posting() {
    
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Category, setCategory] = useState("");

    const options = useMemo(
        () => [
            { value : "HtmlCss", label : "HTML/CSS" },
            { value : "Js", label : "Js" },
            { value : "React", label : "React" },
            { value : "Node/Express", label : "Node/Express" },
            { value : "MongoDB", label : "MongoDB" },
            { value : "Git", label : "Git/GitHub" },
            { value : "HTTP", label : "HTTP" },
            { value : "Algorithm", label : "Algorithm" },
            { value : "AWS", label : "AWS" },
        ],
        []
    );

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
        e.preventDefault();
        setCategory(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const variable = {
            "title": Title,
            "description": Description,
            "category": options,
            "creator": "blockmonkey",
        }
        Axios.post('/api/post/create', variable)
            .then(response => console.log(response))
    }

    return (
        <div style={{
            margin: '20px',
        }}>
            <form style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '30px',
            }}>
                <Select options={options} isSearchable />
                <input type="text" placeholder="title" value={Title} onChange={handleTitle} />
                <textarea placeholder="내용을 입력하세요." value={Description} onChange={handleDescription}
                    style={{height: '300px', resize: 'none'}}
                ></textarea>
                <input type="submit" onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default Posting
