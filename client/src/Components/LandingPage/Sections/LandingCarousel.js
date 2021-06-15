import React from 'react'
import { Carousel } from 'antd';
import '../../../Scss/Carousel.scss';

function LandingCarousel() {

    const contentStyle = {
        height: '250px',
        fontWeight: '900',
        fontSize: '20px',
        color: '#2D3133',
        lineHeight: '250px',
        textAlign: 'center',
        background: '#CA526B',
      };
      
    return (
        <div>
             <Carousel autoplay>
                <div>
                  <h3 style={contentStyle}>Hello, We are Ninja Coders!</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>BlockMonkey</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>Kkevi</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>Minseo</h3>
                </div>
              </Carousel>
        </div>
    )
}

export default LandingCarousel
