import React, { useState, useEffect } from 'react';
import { CloseOutlined } from '@ant-design/icons'
import styled from "styled-components";
import '../../Scss/Category.scss';

function Category(props) {

    useEffect(() => {
        console.log(props);
    }, [])

    const [HtmlCssCategory, setHtmlCssCategory] = useState(true);
    const [JsCategory, setJsCategory] = useState(true);
    const [ReactCategory, setReactCategory] = useState(true);
    const [NodeExpressCategory, setNodeExpressCategory] = useState(true);
    const [MongodbCategory, setMongodbCategory] = useState(true);
    const [GitCategory, setGitCategory] = useState(true);
    const [HttpCategory, setHttp] = useState(true);
    const [AlgorithmCategory, setAlgorithm] = useState(true);
    const [AwsCategory, setAws] = useState(true);
    const [CloseBtn, setCloseBtn] = useState(true);

    const handleHtmlBtnClick = () => {
        setHtmlCssCategory(true);
        setJsCategory(false);
        setReactCategory(false);
        setNodeExpressCategory(false);
        setMongodbCategory(false);
        setGitCategory(false);
        setHttp(false);
        setAlgorithm(false);
        setAws(false);
        setCloseBtn(false);
    }
    const handleJsBtnClick = () => {
        setHtmlCssCategory(false);
        setJsCategory(true);
        setReactCategory(false);
        setNodeExpressCategory(false);
        setMongodbCategory(false);
        setGitCategory(false);
        setHttp(false);
        setAlgorithm(false);
        setAws(false);
        setCloseBtn(false);
    }
    const handleReactBtnClick = () => {
        setHtmlCssCategory(false);
        setJsCategory(false);
        setReactCategory(true);
        setNodeExpressCategory(false);
        setMongodbCategory(false);
        setGitCategory(false);
        setHttp(false);
        setAlgorithm(false);
        setAws(false);
        setCloseBtn(false);
    }
    const handleNodeBtnClick = () => {
        setHtmlCssCategory(false);
        setJsCategory(false);
        setReactCategory(false);
        setNodeExpressCategory(true);
        setMongodbCategory(false);
        setGitCategory(false);
        setHttp(false);
        setAlgorithm(false);
        setAws(false);
        setCloseBtn(false);
    }
    const handleMongoBtnClick = () => {
        setHtmlCssCategory(false);
        setJsCategory(false);
        setReactCategory(false);
        setNodeExpressCategory(false);
        setMongodbCategory(true);
        setGitCategory(false);
        setHttp(false);
        setAlgorithm(false);
        setAws(false);
        setCloseBtn(false);
    }
    const handleGitBtnClick = () => {
        setHtmlCssCategory(false);
        setJsCategory(false);
        setReactCategory(false);
        setNodeExpressCategory(false);
        setMongodbCategory(false);
        setGitCategory(true);
        setHttp(false);
        setAlgorithm(false);
        setAws(false);
        setCloseBtn(false);
    }
    const handleHttpBtnClick = () => {
        setHtmlCssCategory(false);
        setJsCategory(false);
        setReactCategory(false);
        setNodeExpressCategory(false);
        setMongodbCategory(false);
        setGitCategory(false);
        setHttp(true);
        setAlgorithm(false);
        setAws(false);
        setCloseBtn(false);
    }
    const handleAlgorithmBtnClick = () => {
        setHtmlCssCategory(false);
        setJsCategory(false);
        setReactCategory(false);
        setNodeExpressCategory(false);
        setMongodbCategory(false);
        setGitCategory(false);
        setHttp(false);
        setAlgorithm(true);
        setAws(false);
        setCloseBtn(false);
    }
    const handleAwsBtnClick = () => {
        setHtmlCssCategory(false);
        setJsCategory(false);
        setReactCategory(false);
        setNodeExpressCategory(false);
        setMongodbCategory(false);
        setGitCategory(false);
        setHttp(false);
        setAlgorithm(false);
        setAws(true);
        setCloseBtn(false);
    }
    const handleCloseBtnClick = () => {
        setHtmlCssCategory(true);
        setJsCategory(true);
        setReactCategory(true);
        setNodeExpressCategory(true);
        setMongodbCategory(true);
        setGitCategory(true);
        setHttp(true);
        setAlgorithm(true);
        setAws(true);
        setCloseBtn(true);
    }

    return (
        <div className="categoryWrapper">
            <button className="closeBtn" onClick={handleCloseBtnClick} value={CloseBtn} style={{display: CloseBtn ? 'none' : 'block'}}>
                <CloseOutlined style={{marginLeft: '-3.7px'}} />
            </button>
            <div className="buttonColumn">
                <CategoryBtn onClick={handleHtmlBtnClick} value={HtmlCssCategory} opacity={HtmlCssCategory ? 1 : 0.4}>HTML/CSS</CategoryBtn>
                <CategoryBtn onClick={handleJsBtnClick} value={JsCategory} opacity={JsCategory ? 1 : 0.4}>JS</CategoryBtn>
                <CategoryBtn onClick={handleReactBtnClick} value={ReactCategory} opacity={ReactCategory ? 1 : 0.4}>React</CategoryBtn>
                <CategoryBtn onClick={handleNodeBtnClick} value={NodeExpressCategory} opacity={NodeExpressCategory ? 1 : 0.4}>Node/Express</CategoryBtn>
                <CategoryBtn onClick={handleMongoBtnClick} value={MongodbCategory} opacity={MongodbCategory ? 1 : 0.4}>MongoDB</CategoryBtn>
            </div>
            <div className="buttonColumn">
                <CategoryBtn onClick={handleGitBtnClick} value={GitCategory} opacity={GitCategory ? 1 : 0.4}>Git/GitHub</CategoryBtn>
                <CategoryBtn onClick={handleHttpBtnClick} value={HttpCategory} opacity={HttpCategory ? 1 : 0.4}>HTTP</CategoryBtn>
                <CategoryBtn onClick={handleAlgorithmBtnClick} value={AlgorithmCategory} opacity={AlgorithmCategory ? 1 : 0.4}>Algorithm</CategoryBtn>
                <CategoryBtn onClick={handleAwsBtnClick} value={AwsCategory} opacity={AwsCategory ? 1 : 0.4}>AWS</CategoryBtn>
            </div>
        </div>
    )
}

export default Category;

const CategoryBtn = styled.button`
    opacity: ${props => props.opacity};
    /* box-shadow:0 0 20px 0 rgba(0,0,0,.35); */
`;