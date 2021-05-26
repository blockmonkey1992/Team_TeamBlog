import React from 'react';
import '../../Scss/Portfolio.scss';

function Portfolio() {

    return (
        <div className='portfolioWrapper'>
            <div className='portfolio_content'>
                <div className='portfolio__Img'><img /></div>
                <div className='portfolio_content__Wrapper'>
                    <div className='portfolio_content__Title'>
                        <div>Title</div>
                        <div>(2021-06)</div>
                    </div>
                    <div className='portfolio_content__Description'>Description</div>
                    <div className='portfolio_content_Links'>
                        <a href='/' target='_blank'>Go to Page</a>
                        <a href='/' target='_blank'>GitHub</a>
                        <a href='/' target='_blank'>Read Me</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
