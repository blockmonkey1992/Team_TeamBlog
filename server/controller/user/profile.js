const { User } = require("../../model/User");


const userProfile = async(req, res) => {
    user = await User.find().exec((err, result) => {
        console.log(result);
        if(err){
            res.status(400).json({ success : false , err})
        } else {
            res.status(200).json({ success : true , result})
        }
    });
}


module.exports = { userProfile }