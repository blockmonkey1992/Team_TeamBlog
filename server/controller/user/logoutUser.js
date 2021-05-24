const { User } = require("../../model/User");

const logoutUser = (req, res) => {
    const user = req.user;
    User.findOneAndUpdate({ _id: user._id }, { token: "" }, (err, result)=> {
        if(err){
            return res.status(401).json({ success: false });
        } else {
            return res.status(200).json({ success: true });
        }
    })
};

module.exports = logoutUser;