//middleware의 auth를 통과하면 req.user에 유저정보를 담아줬다.
//즉, 회원이 정상적으로 존재한다는 의미이므로, 유저의 id, email등 비밀번호를 제외한 필요정보를 담아 반환함. 
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