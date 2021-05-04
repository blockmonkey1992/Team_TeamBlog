const { User } = require("../../model/User");

const loginUser = (req, res) => {
    const requestedUserEmail = req.body.email;
    const requestedUserPlainPassword = req.body.password;

    //이메일대조
    User.findOne({ email: requestedUserEmail }, (err, emailExistUser)=> {
        if(!emailExistUser){
            return res.json({ success: false, msg: "이메일이 존재하지 않습니다."});
        };

        //비밀번호대조
        emailExistUser.comparePassword(requestedUserPlainPassword, (err, passwordMatch)=> {
            if(!passwordMatch){
                return res.json({ success : false, msg: "비밀번호가 일치하지 않습니다.", err});
            } else {
                //토큰을 생성한 뒤, 쿠키에 토큰을 저장.
                emailExistUser.generateToken((err, user)=> {
                    if(err){
                        return res.status(400).json({ success: false, err });
                    } else {
                        res.cookie("x_auth", user.token).status(200).json({ success: true, userInfo: user });
                    }
                })
            }
        })


    })
};

module.exports = loginUser;