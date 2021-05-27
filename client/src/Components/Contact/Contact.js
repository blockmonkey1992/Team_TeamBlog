import React from 'react';
import '../../Scss/Contact.scss';

function Contact() {
    return (
        <div className='contactWrapper'>
            <div className='contactWrapper_contents'>
                <div className='contact-EmailWrapper'>
                    <div className='contact-Email'>Send E-mail</div>
                    <div className='contact-Email__contents'>
                        <input type='text' placeholder='이메일을 입력해주세요.' />
                        <textarea placeholder='내용을 입력해주세요.' />
                        <button>보내기</button>
                    </div>
                </div>
                
                <div className='contact-OpenTalkWrapper'>
                    <div className='contact-OpenTalk'>Kakao Talk</div>
                    <div className='contact-OpenTalk__contents'>
                        <div className='contact-OpenTalk__QR'><img /></div>
                        <div className='contact-OpenTalk__description'>
                            <div>
                                <p>팀 오픈카카오톡 링크입니다.</p>
                                <p>오류사항이나 문의 사항, 혹은 궁금한 점이 있다면 오픈 카카오톡을 통해 남겨주세요.</p>    
                            </div>
                            <div className='contact-OpenTalk__link'>
                                <a>간편하게 링크로 이동하기 →</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact
