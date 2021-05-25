import React from 'react';
import { Carousel } from 'antd';

function Portfolio() {

    const carouselStyle = {
        display: 'flex',
        justifyContent: 'center',
    };

    const contentStyle = {
        height: '500px',
        width: '90%',
        fontWeight: '900',
        fontSize: '20px',
        lineHeight: '250px',
        textAlign: 'center',
        background: '#CA526B',
    };

    return (
        <div>
            <Carousel effect="fade" style={carouselStyle}>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </div>
    )
}

export default Portfolio
