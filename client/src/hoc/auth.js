import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../actions/user_action";

{/* option = null(아무나), true(로그인유저만), false(손님만); */}
export default function(SpecificComponent, option, admin=null){
    function AuthCheck(props){
        const dispatch = useDispatch();
        let user = useSelector(state => state.user);
        // console.log(user);
        //Node의 Auth API로 리퀘스트를 보내 현재상태 수신.
        useEffect(() => {
            console.log(user);
            dispatch(authUser()).then(response => {
                console.log(response);
                if(!response.payload.is_login){
                    //비로그인 유저
                    if(option){
                        props.history.push("/");
                        // alert('로그인 유저만 입장이 가능한 페이지입니다.');
                    }
                } else {
                    //로그인한 상태
                    if(admin && !response.payload.isAdmin){
                        props.history.push("/");
                        // alert("어드민 유저만 접속이 가능한 페이지입니다.");
                    } else {
                        if(option === false){
                            props.history.push("/");
                            // alert('손님만 입장이 가능한 페이지입니다.');
                        }
                    }
                }
            })
        }, []);

        return (
            <SpecificComponent {...props} user={user}/>
        )
    }
    return AuthCheck;
}