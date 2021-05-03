const { User } = require("../../model/User");

const registerUser = (req, res) => {
    //email, name, password 세개가 필수값
    const user = new User(req.body);

    user.save((err, result) => {
        if(err){
            return res.status(400).json({ success: false, err });
        } else {
            return res.status(200).json({ success: true, result });
        }
    });
};


module.exports = registerUser;