const { User } = require("../../model/User");

//유저 로그인 API (Blockmonkey);
const loginUser = (req, res) => {
    const requestedUserEmail = req.body.email;
    const requestedUserPlainPassword = req.body.password;

    //이메일대조
    User.findOne({ email: requestedUserEmail }, (err, emailExistUser)=> {
        if(!emailExistUser){
            return res.json({ loginSuccess: false, msg: "이메일이 존재하지 않습니다."});
        };

        //비밀번호대조
        emailExistUser.comparePassword(requestedUserPlainPassword, (err, passwordMatch)=> {
            if(!passwordMatch){
                return res.json({ loginSuccess : false, msg: "비밀번호가 일치하지 않습니다."});
            } else {
                //토큰을 생성한 뒤, 쿠키에 토큰을 저장.
                emailExistUser.generateToken((err, user)=> {
                    if(err){
                        return res.status(400).json({ success: false, msg: "쿠키생성실패" });
                    } else {
                        res.cookie("x_auth", user.token, { maxAge : 1000 * 60 * 60 * 2 })
                            .status(200)
                            .json({ loginSuccess: true, userId: user._id });
                    }
                })
            }
        })


    })
};

module.exports = loginUser;