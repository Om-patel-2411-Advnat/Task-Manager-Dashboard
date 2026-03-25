import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import MainHeader from "../component/MainHeader";
import SideBar from "../component/SideBar";
import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function HomePage() {

    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const [isSideBarOpen ,setSideBarOpen] = useState(false);

    if(!isAuth){
        return <Navigate to='/login' />
    }

    return (
        <div className="bg-[#fcf8f8] dark:bg-[#1f1f1f] flex h-screen w-full overflow-x-auto">
            <SideBar isOpen={isSideBarOpen}/> 
            {isSideBarOpen && (
                <div
                    onClick={() => setSideBarOpen(false)}
                    className="fixed inset-0 bg-black dark:bg-white opacity-30 z-40 lg:hidden"
                />
            )}
            <div className="flex w-full flex-col flex-1"> 
                <MainHeader setSideBarOpen={setSideBarOpen}/>
                <div className="flex-1 p-4 overflow-y-auto bg-slate-100/80 dark:bg-transparent">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}