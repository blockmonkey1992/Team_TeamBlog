const { Post } = require("../../model/Post");
const _ = require("loadsh");


//글 검색 API
const searchPost = async(req, res) => {
    //title을 기준으로 DB를 탐색, description을 기준으로 DB를 탐색 후, 두 개 결과를 concat으로 합친 뒤, loadash를 이용해 중복자료 제거함.
    const searchingBy = req.query.term;
    const titleSearched = await Post.find({ title : { $regex: searchingBy, $options: "i" }}); //옵션 i = 대소문자 구분없애기.
    const descriptionSearched = await Post.find({ description : { $regex : searchingBy, $options: "x" }}); //옵션 x = 띄어쓰기 무시.
    const searched = titleSearched.concat(descriptionSearched);
    const searchedResult = _.uniqBy(searched, "id");
    //결과값이 1미만, 즉 없을 경우 검색 결과가 없음을 전달, 결과가 존재할 경우 result 반환.
    if(searchedResult.length < 1){
        res.send(`"${searchingBy}"의 검색결과가 존재하지 않습니다.`);
    } else {
        res.status(200).json({ success: true, searchedResult });
    }
}

module.exports = { searchPost };