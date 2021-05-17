const authUser = (req, res) => {
    return res.status(200).json({ success: true, userInfo: req.user });
};

module.exports = authUser;