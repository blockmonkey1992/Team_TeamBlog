import React, { useState } from 'react';
import axios from "axios";
import '../../Scss/Contact.scss';
import kakaoQR from "../../kakaoQR.PNG";

//Nodemailer를 활용해 이메일 전송서비스 페이지
//(Blockmonkey)

function Contact() {
    //Nodemailer의 최소정보로, 누가 보냈는지(발신자), 글 내용 두가지 요건이 필요하다. 따라서 두개의 스테이트 값을 설정.
    const [From, setFrom] = useState("");
    const [Description, setDescription] = useState("");


    const fromStateHandler = (e) => {
        setFrom(e.currentTarget.value);
    };

    const descriptionStateHandler = (e) => {
        setDescription(e.currentTarget.value);
    };

    //nodemailer로 Axios를 통해 신호를 보낸다.
    //from 상태값을 From에 넣고, description에 Description 상태값을 넣어
    //정보 두가지를 포함해 보내면 나머지는 nodejs에서 처리하면 된다.
    const nodeMailerSubmitHandler = (e) => {
        let variables = {
            from : From,
            description : Description
        };
        axios.post("/api/contact/emailsend", variables)
            .then(response => {
                if(response.data.success){
                    alert(`메일이 정상적으로 전송되었습니다 ✅`);
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
                
                {/* 카카오톡방 참여 서비스 */}
                {/* QR코드 이미지는 현재 리액트 src 폴더에 함께 포함시켰으나, 추후 S3로 이동시켜야함 (Blockmonkey) */}
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
                                <a href="https://open.kakao.com/o/gUFV5sgd" target="_blank" rel="noopener noreferrer">간편하게 링크로 이동하기 →</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact
