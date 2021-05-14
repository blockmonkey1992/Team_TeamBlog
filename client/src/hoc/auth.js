import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from '../actions/user_action';

export default function(SpecificComponent, option, forAdmin){

    function AuthenticationCheck(props){
        const dispatch = useDispatch();
        const is_login = useSelector(state => state.user.is_login);
        const [UserRole, setUserRole] = useState(0);

        useEffect(() => {
            dispatch(auth()).then(response => {
                    if(response.payload.user.role){
                        setUserRole = response.payload.user.role;
                    }
            })

        }, []);

        // 로그인 안한경우
        if(is_login === false && option === true && forAdmin){
            props.history.push("/");
        }

        // 로그인 한 경우,
        if(is_login === true && forAdmin){
            props.history.push("/");
        }

        //어드민유저의 경우,
        return(
            <SpecificComponent />
        )


    }
    return AuthenticationCheck
}