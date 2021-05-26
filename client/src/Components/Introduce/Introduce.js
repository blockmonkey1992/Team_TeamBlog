import React, { useState } from 'react';
import { Modal, Button } from 'antd';

import '../../Scss/Introduce.scss';


function Introduce() {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    
    return (
        <div className='introduceWrapper'>
            <div className='introduce__Person'>
                <div className='introduce_Profile' type="primary" onClick={showModal}>
                    <img />
                </div>
                <div className='introduce_Name'>Block Monkey</div>
                <div className='introduce_Intro'>Developer</div>
                <Modal className='introduce__Modal' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
                    <div className='introduce__Modal__Profile'>Profile</div>
                    <div className='introduce__Modal__Date'>1992.</div>
                    <div className='introduce__Modal__Graduate'>홍익</div>
                    <div className='introduce__Modal__Intro'>한줄소개 같은거</div>
                    <a className='introduce__Modal__Link' href='/' target='blank'>개인 페이지로 이동</a>
                </Modal>
            </div>
            <div className='introduce__Person'>
                <div className='introduce_Profile' type="primary" onClick={showModal}>
                    <img />
                </div>
                <div className='introduce_Name'>Kkevi Do</div>
                <div className='introduce_Intro'>Front End Developer & Designer</div>
                <Modal className='introduce__Modal' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
                    <div className='introduce__Modal__Profile'>Profile</div>
                    <div className='introduce__Modal__Date'>1998.06.27</div>
                    <div className='introduce__Modal__Graduate'>한양대학교 서피스 인테리어학과 졸업</div>
                    <div className='introduce__Modal__Intro'>끊임 없이 생각하자!</div>
                    <a className='introduce__Modal__Link' href='/' target='blank'>개인 페이지로 이동</a>
                </Modal>
            </div>
            <div className='introduce__Person'>
                <div className='introduce_Profile' type="primary" onClick={showModal}>
                    <img />
                </div>
                <div className='introduce_Name'>MinSeo</div>
                <div className='introduce_Intro'>Developer</div>
                <Modal className='introduce__Modal' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
                    <div className='introduce__Modal__Profile'>Profile</div>
                    <div className='introduce__Modal__Date'>1998.</div>
                    <div className='introduce__Modal__Graduate'>학력</div>
                    <div className='introduce__Modal__Intro'>한줄소개 같은거</div>
                    <a className='introduce__Modal__Link' href='/' target='blank'>개인 페이지로 이동</a>
                </Modal>
            </div>
        </div>
    )
}

export default Introduce
