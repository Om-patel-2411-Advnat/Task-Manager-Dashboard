import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { authActions } from "../store/AuthSlice";

import SignUpForm from "../component/SignUpForm";

export default function SignUpPage(){

    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userData = useSelector(state => state.auth.users);

    const isAuth = useSelector(state => state.auth.isAuthenticated);

    if (isAuth) {
        return <Navigate to='/' />
    }

    function HandleSignUp(event) {
        event.preventDefault();

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData);

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(data.email)) {
            setError("Invalid email format");
            return;
        }

        const user = userData.find(user => user.email === data.email && user.password === data.password);

        if (user) {
            setError("User already exists");
        }else if(!user){
            dispatch(authActions.addNewUser({
                email : data.email ,
                password : data.password ,
            }));
            navigate('/login');
        }
    }

    return (
        <SignUpForm HandleSignUp={HandleSignUp} error={error}/>
    )
}