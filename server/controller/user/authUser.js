const authUser = (req, res) => {
    const user = req.user;
    return res.status(200).json({ 
        _id: user._id,
        email : user.email,
        name: user.name,
        role: user.role,
        is_login: true,
        isAdmin: user.role === 1 ? true : false,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
     });
};

module.exports = authUser;