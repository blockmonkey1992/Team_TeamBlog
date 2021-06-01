import React, { useState } from 'react';
import axios from "axios";
import '../../Scss/Contact.scss';
import kakaoQR from "../../kakaoQR.PNG";

function Contact() {
    const [From, setFrom] = useState("");
    const [Description, setDescription] = useState("");


    const fromStateHandler = (e) => {
        setFrom(e.currentTarget.value);
    };

    const descriptionStateHandler = (e) => {
        setDescription(e.currentTarget.value);
    };

    const nodeMailerSubmitHandler = (e) => {
        let variables = {
            from : From,
            description : Description
        };
        axios.post("/api/contact/emailsend", variables)
            .then(response => {
                if(response.data.success){
                    alert(`From님의 메일이 정상적으로 전송되었습니다 ✅`);
                } else {
                    alert(`메일전송실패 카카오톡 채팅방을 이용해주세요 😭`);
                }
            });
    };

    return (
        <div className='contactWrapper'>
            <div className='contactWrapper_contents'>
                <div className='contact-EmailWrapper'>
                    <div className='contact-Email'>Send E-mail</div>
                    <div className='contact-Email__contents'>
                        <input 
                            type='text' 
                            placeholder='이메일을 입력해주세요.' 
                            value={From}
                            onChange={fromStateHandler}
                        />
                        <textarea
                            placeholder='내용을 입력해주세요.'
                            value={Description}
                            onChange={descriptionStateHandler}
                        />
                        <button onClick={nodeMailerSubmitHandler}>보내기</button>
                    </div>
                </div>
                
                <div className='contact-OpenTalkWrapper'>
                    <div className='contact-OpenTalk'>Kakao Talk</div>
                    <div className='contact-OpenTalk__contents'>
                        <div className='contact-OpenTalk__QR'>
                            <img style={{width: "100%", height: "100%"}}src={kakaoQR} alt="KAKAO QR CODE" />
                        </div>
                        <div className='contact-OpenTalk__description'>
                            <div>
                                <p>팀 오픈카카오톡 링크입니다.</p>
                                <p>오류사항이나 문의 사항, 혹은 궁금한 점이 있다면 오픈 카카오톡을 통해 남겨주세요.</p>    
                            </div>
                            <div className='contact-OpenTalk__link'>
                                <a href="https://open.kakao.com/o/gUFV5sgd" target="_blank">간편하게 링크로 이동하기 →</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact
