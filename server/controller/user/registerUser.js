const { User } = require("../../model/User");

//회원등록(가입) API (Blockmonkey);
const registerUser = (req, res) => {
    //email, name, password 세개가 필수값
    const user = new User(req.body);

    user.save((err, userInfo) => {
        if(err){
            return res.status(400).json({ success: false });
        } else {
            return res.status(200).json({ success: true });
        }
    });
};


module.exports = registerUser;