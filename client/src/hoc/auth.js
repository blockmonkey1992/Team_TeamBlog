import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../actions/user_action";


// null(아무나), true(로그인유저), false(로그인하지않은 유저)
// admin유저의 경우 admin을 true로 전달해주면 된다. 평시에는 null;
// (Blockmonkey);
export default function(SpecificComponent, option, admin=null){
    function AuthCheck(props){
        const dispatch = useDispatch();
        let user = useSelector(state => state.user);
        //Node의 Auth API로 리퀘스트를 보내 현재상태 수신.
        useEffect(() => {
            dispatch(authUser()).then(response => {
                if(!response.payload.is_login){
                    //비로그인 유저
                    if(option){
                        props.history.push("/");
                    }
                } else {
                    //로그인한 상태
                    if(admin && !response.payload.isAdmin){
                        props.history.push("/");
                    } else {
                        if(option === false){
                            props.history.push("/");
                        }
                    }
                }
            })
        }, []);

        return (
            //위 권한문제에서 걸리지 않았다면, 원래 랜더링할 컴포넌트를 랜더링하는데 props값으로 user정보를 전달 & 기존의 props값을 모두 전달.
            <SpecificComponent {...props} user={user}/>
        )
    }
    return AuthCheck;
}