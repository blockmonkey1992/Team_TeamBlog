import React, { useState } from 'react';
import { Modal } from 'antd';

import '../../Scss/Introduce.scss';


function Introduce() {

    const [ModalVisible, setModalVisible] = useState(false);
    const [ModalVisible2, setModalVisible2] = useState(false);
    const [ModalVisible3, setModalVisible3] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    }

    const showModal2 = () => {
        setModalVisible2(true);
    }

    const showModal3 = () => {
        setModalVisible3(true);
    }

    const handleCancel = () => {
        setModalVisible(false);
        setModalVisible2(false);
        setModalVisible3(false);
    }
    
    return (
        <div className='introduceWrapper'>
            <div className='introduce__Person'>
                <div className='introduce_Profile' onClick={showModal3}>
                    <img alt='' />
                </div>
                <div className='introduce_Name'>BlockMonkey</div>
                <div className='introduce_Intro'>MERNstack Developer</div>
                <Modal className='introduce__Modal' visible={ModalVisible3}  onCancel={handleCancel} >
                    <div className='introduce__Modal__Profile'><img alt='' /></div>
                    <div className='introduce__Modal__Contents'>
                        <div className='introduce__Modal__Name'>BlockMonkey</div>
                        <div className='introduce__Modal__Date'>1992.08.31</div>
                        <div className='introduce__Modal__Graduate'>
                            <p>홍익대학교 경영학과 학사</p>
                            <p>국민대학교 소프트웨어융합대학원 블록체인학과 석사</p>
                        </div>
                        <div className='introduce__Modal-footer'>
                            <div className='introduce__Modal__Intro'>현실의 문제를 해결하기 위해 노력하는 개발자</div>
                            <a className='introduce__Modal__Link' href='/' target='blank'>개인 페이지로 이동 →</a>
                        </div>
                    </div>
                    </Modal>
            </div>
            <div className='introduce__Person'>
                <div className='introduce_Profile' onClick={showModal2}>
                    <img alt='' />
                </div>
                <div className='introduce_Name'>Kkevi Do</div>
                <div className='introduce_Intro'>Front-End Developer & Designer</div>
                <Modal className='introduce__Modal' visible={ModalVisible2} onCancel={handleCancel} >
                    <div className='introduce__Modal__Profile'><img alt='' /></div>
                    <div className='introduce__Modal__Contents'>
                        <div className='introduce__Modal__Name'>Kkevi Do</div>
                        <div className='introduce__Modal__Date'>1998.06.27</div>
                        <div className='introduce__Modal__Graduate'>한양대학교 서피스 인테리어학과 학사</div>
                        <div className='introduce__Modal-footer'>
                            <div className='introduce__Modal__Intro'>생각을 멈추지 않고 끊임 없이 앞으로 나아가는 깨비</div>
                            <a className='introduce__Modal__Link' href='/' target='blank'>개인 페이지로 이동 →</a>
                        </div>
                    </div>
               </Modal>
            </div>
            <div className='introduce__Person'>
                <div className='introduce_Profile' onClick={showModal}>
                    <img alt='' />
                </div>
                <div className='introduce_Name'>MinSeo</div>
                <div className='introduce_Intro'>Node JS Back-End Developer</div>
                <Modal className='introduce__Modal' visible={ModalVisible} onCancel={handleCancel} >
                    <div className='introduce__Modal__Profile'><img alt='' /></div>
                    <div className='introduce__Modal__Contents'>
                        <div className='introduce__Modal__Name'>MinSeo</div>
                        <div className='introduce__Modal__Date'>1998.06.24</div>
                        <div className='introduce__Modal__Graduate'>원광대학교 반도체 디스플레이 학부 학사</div>
                        <div className='introduce__Modal-footer'>
                            <div className='introduce__Modal__Intro'>편의성을 추구하는 개발자</div>
                            <a className='introduce__Modal__Link' href='/' target='blank'>개인 페이지로 이동 →</a>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Introduce
