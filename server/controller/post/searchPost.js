const { Post } = require("../../model/Post");
const _ = require("loadsh");

const searchPost = async(req, res) => {
    const searchingBy = req.query.term;
    const titleSearched = await Post.find({ title : { $regex: searchingBy, $options: "i" }});
    const descriptionSearched = await Post.find({ description : { $regex : searchingBy, $options: "x" }});
    const searched = titleSearched.concat(descriptionSearched);
    const searchedResult = _.uniqBy(searched, "id");

    if(searchedResult.length < 1){
        res.send(`"${searchingBy}"의 검색결과가 존재하지 않습니다.`);
    } else {
        res.status(200).json({ success: true, searchedResult });
    }
}





module.exports = { searchPost };