const { User } = require("../../model/User");

//유저 닉네임 수정 (minseo)
const updateUser = async (req, res) => {
    const id = req.user.id
    const name = req.body.name
    console.log(name);
    console.log(id);
    await User.findByIdAndUpdate( id , { name: name }).exec((err, result) => {
        if(err){
            res.status(400).json({ success : false , err })
        } else {
            res.status(200).json({ success : true , result})
        }
    });
}
//수정된 닉네임 가져오기 (minseo)
const updatedUser = async(req , res) => {
    const name = req.user.name;
    const email = req.user.email;
    await User.find(({ name , email})).exec((err, result) => {
        if(err){
            res.json({ success : false , err})
        }else { 
            res.json({ success : true , result})
        }
    });
}

module.exports = { updateUser, updatedUser };