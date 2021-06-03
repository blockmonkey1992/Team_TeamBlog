import React, { useState, useEffect } from 'react';
// import { withRouter } from 'react-router-dom';
// import { useSelector } from "react-redux";
// import Axios from "axios";

function Reply(props) {

    return (
        <div>
            <div className="detailWrapper_comment__column">
                <textarea 
                    // value={Content} 
                    // placeholder="답글을 달아주세요." 
                    // onChange={handleContent}
                />
                <button >작성</button>
            </div>
        </div>
    )
}

export default Reply
