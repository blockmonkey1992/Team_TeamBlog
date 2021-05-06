const nodemailer = require("nodemailer");

const mail = (req, res) => {
    const from = req.body.from;
    const date = new Date;
    const description = req.body.description;

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
        to : "blockmonkey1992@gmail.com, zzoo32165@gmail.com, ykim3532@gmail.com, borakim874@gmail.com",
        subject: `NinjaCoders Page에서 ${date.getMonth()+1}월${date.getDate()}일에 " ${from} " 님으로 부터 온 메일입니다.`,
        text: description,
    }

    transporter.sendMail(mailOptions, (err, info)=>{
        if(err) return res.status(400).send(err);
        return res.status(200).json({ msg : `${from}님, 메일이 정상적으로 전송되었습니다.`, success: true});
    });
};

module.exports = mail;