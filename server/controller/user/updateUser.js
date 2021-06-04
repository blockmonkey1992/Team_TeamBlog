const { User } = require("../../model/User");


const updateUser = async (req, res) => {
    const id = req.params.id
    const userName = req.user.name
    console.log(userName);
    console.log(id);
    await User.findOneAndUpdate({ _id : id }, {"name" : userName}).exec((err, result) => {
        console.log(result);
        if(err){
            res.status(400).json({ success : false , err })
        } else {
            res.status(200).json({ success : true , result})
        }
    });
}

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