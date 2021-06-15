import React, { useEffect, useState } from 'react';
import Axios from "axios";

import LandingCards from './Sections/LandingCards';
import Category from './Sections/Category';
import LandingCarousel from "./Sections/LandingCarousel";

import { Row , Col } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import styled from 'styled-components';

function LandingPage(props) {

    const [Data, setData] = useState([]);
    const [Skip, setSkip] = useState(0);
    const [Limit, setLimit] = useState(8);
    const [CategoryValue, setCategoryValue] = useState(100);


    //Category Componet에서 받아온 카테고리 값 설정해주기 (Kkevi Do)
    const handleCategory = (num) => {
        setCategoryValue(num)
    }

    useEffect(() => {

        //더보기 버튼을 누르지 않았을 때 기본적으로 보여지는 Cards들의 개수를 구하고 이후 개수만큼 Cards를 렌더링 (Kkevi Do)
        let body = {
            skip : Skip,
            limit : Limit,
        }
        getCards(body);

        //카테고리 버튼을 누를 때마다 해당 카테고리에 속하는 Cards를 다시 렌더링하도록 함. (Kkevi Do)
        Axios.get(`/api/post/category/${CategoryValue}`)
            .then( response => {
                //해당 카테고에 속하는 Cards 값이 0개 이상이면 Cards를 보여주기 (Kkevi Do)
                if(response.data.result.length > 0){
                    setData(response.data.result)
                }else{
                    getCards(body)
                }
            } )

    }, [CategoryValue, Limit, Skip])

    const getCards = (body) => {
        Axios.post('/api/post/postAll', body)
        .then(response => {
            if(response.data.success){
                //기본적으로 8개의 Cards를 보여주고, 이후 더보기 버튼을 눌렀을 때 8개의 Cards를 더 보여줌. (Kkevi Do)
                if(body.loadMore){
                    setData([...Data, ...response.data.result]);
                } else {
                    setData(response.data.result);
                }
                //보여줄 수 있는 Cards들이 존재하지 않으면 마지막 페이지임을 알려줌. (Kkevi Do)
                if(response.data.postCount < 1){
                    alert('마지막 페이지입니다.');
                }
            }
        })
    }

    //더보기 버튼을 눌렀을 때, (Kkevi Do)
    const loadMoreHandler = () => {
        let skip = Skip + Limit;

        //더보기 버튼을 눌렀을 때 이미 보여준 Cards들을 skip, 보여줘야할 Cards를 limit으로 지정
        let body = {
            skip : skip,
            limit : Limit,
            loadMore: true,
        }

        getCards(body);
        setSkip(skip);
    }

    //Cards를 렌더링하는 map 내장함수 (Kkevi Do)
    const renderCards = Data.map((item, idx) => {
        return <Col key={idx} xl = {6} lg={8} md={12} xs={24}>
                    <LandingCards
                        id={item._id}
                        title={item.title}
                        views={item.views}
                        creator={item.creator}
                        createdAt={item.createdAt}
                        description={item.description}
                        category={item.category}
                        imgSrc={item.postImg}
                    />
                </Col>
    })

    return (
        <div>
            <LandingCarousel />
            <Category categoryValue = {CategoryValue} click={handleCategory} />
            {Data && 
                <Row gutter={[24, 24]} style={{margin: "0px 30px"}}>
                    {renderCards}
                </Row>}
            <Btn>
                <button onClick={loadMoreHandler}><CaretDownOutlined /></button>
            </Btn>
        </div>
    )
}

export default LandingPage;

const Btn = styled.div`
    display: flex;
    justify-content: center;
    font-size: 14px;
    button{
        border: none;
        background-color: #CA526B;
        color: white;
        opacity: 0.8;
        width: 30px; height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
            cursor: pointer;
            opacity: 1;
        }
    }
`;