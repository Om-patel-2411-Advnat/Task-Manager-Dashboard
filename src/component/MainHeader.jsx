import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faArrowRightFromBracket, faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

import logo from '../assets/logo-1.png';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MainHeader(){

    const [isLogin , setIsLogin] = useState(false);

    function HandleLogin(){
        setIsLogin(true);
    }

    return(
        <header className="h-16 w-screen flex justify-between items-center px-2 bg-[#fcf8f8] border-1 border-gray-300">
            <div className='h-full w-auto flex justify-left items-center'>
                <img src={logo} className='bg-transparent h-11 w-15'/>
                <h1 className='hidden text-xl md:flex'>TaskHub</h1>
            </div>
            <div className="h-12 flex justify-center items-center">
                <input type="text" className="h-full w-full lg:w-200 bg-gray-100 hover:bg-gray-200 rounded-l-lg outline-none px-3 text-lg" placeholder="Search your task" />
                <p className="text-xl h-full w-13 bg-gray-300 hover:bg-gray-200 flex justify-center items-center rounded-r-lg"><FontAwesomeIcon icon={faMagnifyingGlass} /></p>
            </div>
            <div className="h-full flex justify-center items-center">
                <Link 
                    onClick={HandleLogin}
                    to='/login'
                    className="text-xl hover:text-gray-700 h-12 w-12 flex justify-center items-center rounded-lg" 
                >
                    {!isLogin ? <FontAwesomeIcon icon={faArrowRightToBracket} /> : <FontAwesomeIcon icon={faArrowRightFromBracket} />}
                </Link>
            </div>
            
        </header>
    )
}