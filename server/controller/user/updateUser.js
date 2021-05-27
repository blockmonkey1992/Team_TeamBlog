const { User } = require("../../model/User");


const updateUser = async (req, res) => {
    const id = req.params.id
    const userName = req.user.name
    await User.findByIdAndUpdate({ _id : id }, userName).exec((err, result) => {
        if(err){
            res.status(400).json({ success : false , err })
        } else {
            res.status(200).json({ success : true , result})
        }
    });
}

module.exports = { updateUser };