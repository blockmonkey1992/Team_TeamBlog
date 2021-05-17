const { User } = require("../model/User");

const auth = (req, res, next) => {
    const token = req.cookies.x_auth;
    //쿠키에서 토큰을 가져와 복호화해서 
    //-> 유저의 아이디값과 토큰을 비교해 유저확인
    //-> 유저가 존재하면 인증시켜주고, 없으면 인증시키면 인증안됨.
    User.compareToken(token, (err, user)=>{
        if(err) return res.send(err);
        if(!user) return res.json({ is_login: false, err });
        req.token = token;
        req.user = user;
        next();
    })
}


module.exports = { auth };