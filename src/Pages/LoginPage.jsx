import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { authActions } from "../store/AuthSlice";
import { Navigate , useNavigate  } from "react-router-dom";

import LoginForm from "../component/LoginForm";

export default function LoginPage(){

    const [error ,setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userData = useSelector(state => state.auth.users);

    const isAuth = useSelector(state => state.auth.isAuthenticated);

    if (isAuth) {
        return <Navigate to='/' />
    }

    function HandleSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.target) 
        const data = Object.fromEntries(formData);

        const user = userData.find(user => user.email === data.email && user.password === data.password);

        console.log(user);

        if (user){
            dispatch(authActions.logIn(user));
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