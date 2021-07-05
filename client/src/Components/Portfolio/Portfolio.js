import React from 'react';
import styled from "styled-components";
import '../../Scss/Portfolio.scss';

function Portfolio() {

    return (
        <div className='portfolioWrapper'>
            <div className='portfolio_content'>
                <div className='portfolio__Img'>
                    <CardImage src="https://minseo-test-1.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20210705_230941481.png" alt='team_blog' />
                </div>
                <div className='portfolio_content__Wrapper'>
                    <div className='portfolio_content__Title'>
                        <div>Team Blog</div>
                        <div>(2021-06)</div>
                    </div>
                    <div className='portfolio_content__Description'>
                        <p>팀 블로그의 소개 페이지입니다!</p>
                        <p>React & Node & Mongo & Express</p>
                    </div>
                    <div className='portfolio_content_Links'>
                        <a href='http://13.125.230.121/' target='_blank'>Go to Page</a>
                        <a href='https://github.com/BlockMonkeys/Team_TeamBlog' target='_blank'>GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio


const CardImage = styled.img`
    width: 100%;
    height: 100%;
`;