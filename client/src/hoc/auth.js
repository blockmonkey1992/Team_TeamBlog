import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from '../actions/user_action';
import axios from 'axios'

export default function(SpecificComponent, option, adminRoute =null){


    {/* null 누구나 접근가능 */}
    {/* false 로그인을 했을때 접근이 불가능*/}
    {/* true 로그인을 했을때 접근가능 */}
    function AuthenticationCheck(props){
        const dispatch = useDispatch();
        const user = useSelector(state => state.user);
  

        useEffect(() => {
            dispatch(auth())
            .then(response => {
                console.log(`auth`, response);
                //     if(response.payload.user.role){
                //        setUserRole = response.payload.user.role;
                //    }
                //  로그인 하지않은 상태
                    if(!response.payload.is_login){
                        if(option){
                        props.history.push('/')
                        alert('로그인해주세요')
                        }
                        //로그인 한 상태
                    }else{
                        if(adminRoute &&!response.payload.is_login){
                            props.history.push('/')
                            alert('접근권한이없음')
                        }else{
                            if(option===false){
                                props.history.push('/')
                            }
                        }
                    }
            })
        }, []);


        return(
            <SpecificComponent {...props} user={user} />
        )


    }
    return AuthenticationCheck
}