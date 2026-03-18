import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faGear } from "@fortawesome/free-solid-svg-icons";

import Projects from "./Projects";
import logo from '../assets/logo-1.png';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/AuthSlice";


export default function SideBar(){

    const dispatch = useDispatch();

    function HandleLogOut(){
        dispatch(authActions.logOut());
    }

    return (
        <div className="hidden lg:flex h-screen min-w-70 bg-[#fcf8f8] border-r-1 border-gray-300 flex-col">
            <div className='h-16 w-full flex justify-center items-center border-b-1 border-gray-300 pr-8'>
                <img src={logo} className='bg-transparent h-11 w-15' />
                <h1 className='text-xl'>TaskHub</h1>
            </div>
            <div className="w-full">
                <p className="w-full mt-5 ml-3 text-sm text-stone-600">Menu</p>
                <ul className=" w-full text-md">
                    <Link to='/' className="h-10 hover:bg-stone-200 rounded-md mx-3 text-stone-700 flex items-center pl-3">Dashboard</Link>
                    <li className="h-10 hover:bg-stone-200 rounded-md mx-3 text-stone-700 flex items-center pl-3">All Tasks</li>
                </ul>
            </div>
            <div className="w-full">
                <p className="w-full mt-5 ml-3 text-sm text-stone-600">Projects</p>
                <Projects />
            </div>
            <div className="mt-auto h-25 border-t-1 border-gray-300 flex flex-col justify-center p-2">
                <p className="h-10 w-full flex gap-4 ml-5 text-stone-700 hover:text-stone-800">
                    <span><FontAwesomeIcon icon={faGear} /></span>
                    <span>Settings</span> 
                </p>
                <p 
                    onClick={HandleLogOut}
                    className="h-10 w-full flex gap-4 ml-5 text-red-500 hover:text-red-600 cursor-pointer"
                >
                    <span><FontAwesomeIcon icon={faArrowRightFromBracket} /></span> 
                    <span>Log Out</span>
                </p>
            </div>
        </div>
    )
}