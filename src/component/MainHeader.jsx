// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function MainHeader(){

    // const isLogin = useSelector(state => state.auth.isAuthenticated);

    return(
        <header className="h-16 w-full flex justify-between items-center px-2 bg-[#fcf8f8] border-b-1 border-gray-300">
            <div className="h-full w-10 flex justify-center items-center lg:hidden">
                <p className="text-xl"><FontAwesomeIcon icon={faBars} /></p>
            </div>
            <div className="h-12 flex justify-center items-center">
                <input type="text" className="h-full w-full lg:w-200 bg-gray-200 hover:bg-gray-300 rounded-lg outline-none px-3 text-lg" placeholder="Search your task" />
            </div>
            {/* <div className="h-full flex justify-center items-center">
                <p className="text-xl hover:text-gray-700 h-12 w-12 flex justify-center items-center rounded-lg" >
                    {!isLogin ? <FontAwesomeIcon icon={faArrowRightToBracket} /> : <FontAwesomeIcon icon={faArrowRightFromBracket} />}
                </p>
            </div> */}
        </header>
    )
}