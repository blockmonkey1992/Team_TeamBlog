import React, { useState } from 'react';

import '../../../Scss/Category.scss';
import { CloseOutlined } from '@ant-design/icons';
import { Row , Col } from 'antd';
import styled from "styled-components";

function Category(props) {

    //초기에는 카테고리를 분류하지 않고 모두 보여주기 위해 true 값을 디폴트로 지정
    const [HtmlCssCategory, setHtmlCssCategory] = useState(true);
    const [JsCategory, setJsCategory] = useState(true);
    const [ReactCategory, setReactCategory] = useState(true);
    const [NodeExpressCategory, setNodeExpressCategory] = useState(true);
    const [MongodbCategory, setMongodbCategory] = useState(true);
    const [GitCategory, setGitCategory] = useState(true);
    const [HttpCategory, setHttp] = useState(true);
    const [AlgorithmCategory, setAlgorithm] = useState(true);
    const [AwsCategory, setAws] = useState(true);
    const [NetWorkCategory, setNetWork] = useState(true);
    const [CloseBtn, setCloseBtn] = useState(true);

    
    //카테고리 버튼을 클릭했을 때 해당하는 카테고리는 제외하고 모두 false값으로 변경한 뒤,
    //props로 해당 카테고리 번호값을 넘겨주기
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
        setNetWork(false);
        setCloseBtn(false);
        props.click(0);
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
        setNetWork(false);
        setCloseBtn(false);
        props.click(1);
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
        setNetWork(false);
        setCloseBtn(false);
        props.click(2);
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
        setNetWork(false);
        setCloseBtn(false);
        props.click(3);
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
        setNetWork(false);
        setCloseBtn(false);
        props.click(4);
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
        setNetWork(false);
        setCloseBtn(false);
        props.click(5);
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
        setNetWork(false);
        setCloseBtn(false);
        props.click(6);
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
        setNetWork(false);
        setCloseBtn(false);
        props.click(7);
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
        setNetWork(false);
        setCloseBtn(false);
        props.click(8);
    }
    const handleNetworkBtnClick = () => {
        setHtmlCssCategory(false);
        setJsCategory(false);
        setReactCategory(false);
        setNodeExpressCategory(false);
        setMongodbCategory(false);
        setGitCategory(false);
        setHttp(false);
        setAlgorithm(false);
        setAws(false);
        setNetWork(true);
        setCloseBtn(false);
        props.click(9);
    }

    // 닫기 버튼을 누르면 모든 값이 다시 true로 돌아오고,
    // 카테고리 번호값도 initialState값으로 되돌려줌.
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
        setNetWork(true);
        setCloseBtn(true);
        props.click(100);
    }

    return (
        <div className="categoryWrapper">
            <button className="closeBtn" onClick={handleCloseBtnClick} value={CloseBtn} style={{display: CloseBtn ? 'none' : 'block'}}>
                <CloseOutlined style={{marginLeft: '-3.7px'}} />
            </button>
            
            <div className="buttonWrapper">
                <Row gutter={[24, 24]}>
                    {/* 삼항연산자를 이용하여 해당하지 않는 카테고리 버튼의 투명도를 props를 이용하여 조절함 */}
                    <Col lg={4} md={6} sm={8}>
                        <CategoryBtn onClick={handleHtmlBtnClick} value={HtmlCssCategory} opacity={HtmlCssCategory ? 1 : 0.3}>HTML/CSS</CategoryBtn>
                    </Col>
                    <Col lg={4} md={6} sm={8}>
                        <CategoryBtn onClick={handleJsBtnClick} value={JsCategory} opacity={JsCategory ? 1 : 0.3}>JS</CategoryBtn>
                    </Col>
                    <Col lg={4} md={6} sm={8}>
                        <CategoryBtn onClick={handleReactBtnClick} value={ReactCategory} opacity={ReactCategory ? 1 : 0.3}>React</CategoryBtn>
                    </Col>
                    <Col lg={4} md={6} sm={8}>
                        <CategoryBtn onClick={handleNodeBtnClick} value={NodeExpressCategory} opacity={NodeExpressCategory ? 1 : 0.3}>Node/Express</CategoryBtn>
                    </Col>
                    <Col lg={4} md={8}>
                        <CategoryBtn onClick={handleMongoBtnClick} value={MongodbCategory} opacity={MongodbCategory ? 1 : 0.3}>MongoDB</CategoryBtn>
                    </Col>
                    <Col lg={4} md={8}>
                        <CategoryBtn onClick={handleGitBtnClick} value={GitCategory} opacity={GitCategory ? 1 : 0.3}>Git/GitHub</CategoryBtn>
                    </Col>
                    <Col lg={4} md={8}>
                        <CategoryBtn onClick={handleHttpBtnClick} value={HttpCategory} opacity={HttpCategory ? 1 : 0.3}>HTTP</CategoryBtn>
                    </Col>
                    <Col lg={4} md={8}>
                        <CategoryBtn onClick={handleAlgorithmBtnClick} value={AlgorithmCategory} opacity={AlgorithmCategory ? 1 : 0.3}>Algorithm</CategoryBtn>
                    </Col>
                    <Col lg={4} md={8}>
                        <CategoryBtn onClick={handleAwsBtnClick} value={AwsCategory} opacity={AwsCategory ? 1 : 0.4}>AWS</CategoryBtn>
                    </Col>
                    <Col lg={4} md={8}>
                        <CategoryBtn onClick={handleNetworkBtnClick} value={NetWorkCategory} opacity={NetWorkCategory ? 1 : 0.3}>NetWork</CategoryBtn>
                    </Col>
                </Row>
            </div>

        </div>
    )
}

export default Category;

const CategoryBtn = styled.button`
    opacity: ${props => props.opacity};
`;