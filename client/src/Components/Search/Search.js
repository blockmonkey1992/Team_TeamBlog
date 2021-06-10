import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

import Home from '../Home/Home';

import { Row , Col } from 'antd';
import styled from 'styled-components';

function Search() {
    const searched = useSelector(state => state.post);

    useEffect(() => {
        console.log(searched.searchedPost);
    }, [searched])
    return (
        <SearchedResult>
            {searched.searchedPost && 
                searched.searchedPost ?
                <Row gutter={[24, 24]} style={{margin: "0px 30px"}}>
                {searched.searchedPost.map((item, idx)=> (
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
            </Row> : <NoSearched>검색결과가 없습니다.</NoSearched>
        }
        </SearchedResult>
    )
}

export default Search

const SearchedResult = styled.div`
    margin-top: 40px;
`;

const NoSearched = styled.p`
    text-align: center;
    margin: 200px 0 250px 0;
`;
