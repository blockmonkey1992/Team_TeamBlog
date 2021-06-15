const { createProxyMiddleware } = require('http-proxy-middleware');

//프록시 설정. CORS문제 해결을 위해 Proxy를 설정했다.
//Nodejs에서 CORS 라이브러리를 사용해 해도 좋으나, Nodejs의 CORS를 이용하면 타겟(앞)주소체계를 모두 포함시켜야 해서 불편해서 이 방법을 선택함.
module.exports = function(app){
    app.use(createProxyMiddleware('/api', {
        target: "http://localhost:5000",
        changeOrigin: true,
    }));
}