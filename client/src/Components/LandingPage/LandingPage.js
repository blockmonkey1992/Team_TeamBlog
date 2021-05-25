import React, { useEffect, useState } from 'react';
import Axios from "axios";
import LandingCarousel from "./Sections/LandingCarousel";
import Home from '../Home/Home';
import Category from '../Home/Category';
import { Row , Col } from 'antd';

function LandingPage(props) {

    const [Data, setData] = useState([]);

    useEffect(() => {
        Axios.get('/api/post/postAll')
            .then(response => {
                if(response.data.success){
                    setData(response.data.result);
                }
            })
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
                    ))}
                </Row>}
        </div>
    )
}

export default LandingPage;