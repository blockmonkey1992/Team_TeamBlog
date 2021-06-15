const { User } = require("../../model/User");

//유저 로그아웃 API (Blockmonkey);
const logoutUser = (req, res) => {
    const user = req.user;
    res.clearCookie("x_auth"); //로그아웃시 쿠키 삭제하기;
    User.findOneAndUpdate({ _id: user._id }, { token: "" }, (err, result)=> {
        if(err){
            return res.status(401).json({ success: false });
        } else {
            return res.status(200).json({ success: true });
        }
    })
};

module.exports = logoutUser;