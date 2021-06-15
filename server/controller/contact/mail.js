const nodemailer = require("nodemailer");


//Blockmonkey
//NodeMailer를 활용한 메일전송; (프론트에서 from(발신자 메일주소), 메일내용 두가지를 요구함. [from , description]);
const mail = (req, res) => {
    const from = req.body.from;
    const description = req.body.description;
    const date = new Date;
    
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        secure: true,
        auth: {
            user: process.env.GMAIL_MASTER_ID,
            pass: process.env.GMAIL_MASTER_PASSWORD,
        }
    });
    
    const mailOptions = {
        from : from,
        to : "blockmonkey1992@gmail.com, zzoo32165@gmail.com, borakim874@gmail.com",
        subject: `NinjaCoders Page에서 ${date.getMonth()+1}월${date.getDate()}일에 " ${from} " 님으로 부터 온 메일입니다.`,
        text: description,
    }

    transporter.sendMail(mailOptions, (err, info)=>{
        if(err) return res.status(400).send(err);
        return res.status(200).json({ msg : `${from}님, 메일이 정상적으로 전송되었습니다.`, success: true});
    });
};

module.exports = mail;