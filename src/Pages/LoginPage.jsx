import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";

import LoginForm from "../component/LoginForm";
import userData from '../user.json';
import { authActions } from "../store/AuthSlice";
import { Navigate , useNavigate  } from "react-router-dom";

export default function LoginPage(){

    const [error ,setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuth = useSelector(state => state.auth.isAuthenticated);

    if (isAuth) {
        return <Navigate to='/' />
    }

    function HandleSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.target) 
        const data = Object.fromEntries(formData);

        if (data.email === userData.email && data.password === userData.password ){
            dispatch(authActions.logIn());
            navigate('/');
        }else{
            setError("invalid credentials");
        }        
    }

    return(
        <>
            <LoginForm HandleSubmit={HandleSubmit} error={error}/>
        </>
    )
}