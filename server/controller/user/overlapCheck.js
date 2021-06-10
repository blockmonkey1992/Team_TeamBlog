const { User } = require("../../model/User");

const overlapEmailCheck = (req, res) => {
    const requestedEmail = req.body.email;

    User.find({ "email" : requestedEmail }).exec((err, result)=> {
        if(err) res.status(400).json({ success: false });
        return res.status(200).json({ success: true, result });
    })
};

const overlapNameCheck = (req, res) => {
    const requestedName = req.body.name;

    User.find({ "name": requestedName }).exec((err, result)=> {
        if(err) res.status(400).json({ success: false });
        return res.status(200).json({ success: true, result });
    })
}

module.exports = { overlapEmailCheck, overlapNameCheck };