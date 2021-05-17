import React, { useEffect, useState } from 'react';
import Axios from "axios";
import LandingCarousel from "./Sections/LandingCarousel";
import Home from '../Home/Home';
import Category from '../Home/Category';
import { Row , Col } from 'antd';
import { LOGIN_USER } from '../../actions/types';
import { loginUser, auth } from '../../actions/user_action';

function LandingPage(props) {

    const [Data, setData] = useState([]);

    useEffect(() => {

        Axios.get('/api/post/postAll')
            .then(response => {
                if(!response.data.success){
                    alert('홈화면 데이터를 가져오지 못했습니다.');
                } else {
                    setData(response.data.result);
                    // console.log(response);
                }
            });
    }, []);

    

    return (
        <div>
            <LandingCarousel />
            <Category />
                {Data && 
                <Row gutter={[24, 24]} style={{margin: "0px 30px"}}>
                    {Data.map((item, idx)=> (
                        <Col key={idx} xl = {6} lg={8} md={12} xs={24}>
                            <Home
                                title={item.title}
                                views={item.views}
                                creator={item.creator}
                                createdAt={item.createdAt}
                            />
                        </Col>
                    ))}
                </Row>}
        </div>
    )
}

export default LandingPage;