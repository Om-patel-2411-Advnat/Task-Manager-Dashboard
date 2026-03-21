import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import Projects from "./Projects";
import logo from '../assets/logo-1.png';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/AuthSlice";
import { SwitchActions } from "../store/SwitchViewSlice";


export default function SideBar({isOpen}){

    const dispatch = useDispatch();
    const Theme = useSelector(state => state.view.Theme);

    function HandleLogOut(){
        dispatch(authActions.logOut());
    }
    function HandleTheme(){
        const newTheme = Theme === 'light' ? 'dark' : 'light';
        dispatch(SwitchActions.setTheme(newTheme));
    }

    return (
        <div 
            className={`fixed top-0 left-0 z-50 h-screen min-w-70 bg-[#fcf8f8] dark:bg-[#1f1f1f] border-r-1 border-gray-300 dark:border-gray-500 flex flex-col
                    transform transition-transform duration-300
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0 lg:static lg:flex
                `}
        >
            <div className='h-16 w-full flex justify-center items-center border-b-1 dark:text-[#e5e5e5] border-gray-300 dark:border-gray-500 pr-8'>
                <img src={logo} className='bg-transparent h-11 w-15 dark:invert' />
                <h1 className='text-xl'>TaskHub</h1>
            </div>
            <div className="w-full">
                <p className="w-full mt-5 ml-3 text-sm text-stone-600 dark:text-[#9d9d9d]">Menu</p>
                <ul className=" w-full text-md text-stone-700 dark:text-[#e5e5e5]">
                    <Link to='/' className="h-10 hover:bg-stone-200 dark:hover:bg-[#3d3d3d] rounded-md mx-3 flex items-center pl-3">Dashboard</Link>
                    <li className="h-10 hover:bg-stone-200 dark:hover:bg-[#3d3d3d] rounded-md mx-3 flex items-center pl-3">All Tasks</li>
                </ul>
            </div>
            <div className="w-full">
                <p className="w-full mt-5 ml-3 text-sm text-stone-600 dark:text-[#9d9d9d]">Projects</p>
                <Projects />
            </div>
            <div className="mt-auto h-25 border-t-1 border-gray-300 dark:border-gray-500 flex flex-col justify-center p-2">
                <p 
                    onClick={HandleTheme}
                    className="h-10 w-full flex gap-4 ml-5 text-stone-700 dark:text-[#adabab] dark:hover:text-[#e5e5e5] hover:text-stone-800 cursor-pointer"
                >
                    {Theme === 'light' ? <span><FontAwesomeIcon icon={faSun} /></span> : <span><FontAwesomeIcon icon={faMoon} /></span>}
                    <span>Theme</span> 
                </p>
                <p 
                    onClick={HandleLogOut}
                    className="h-10 w-full flex gap-4 ml-5 text-red-500 dark:text-rose-500 dark:hover:text-rose-600 hover:text-red-600 cursor-pointer cursor-pointer" 
                >
                    <span><FontAwesomeIcon icon={faArrowRightFromBracket} /></span> 
                    <span>Log Out</span>
                </p>
            </div>
        </div>
    )
}