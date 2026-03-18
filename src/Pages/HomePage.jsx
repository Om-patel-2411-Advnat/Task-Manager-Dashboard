import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import MainHeader from "../component/MainHeader";
import SideBar from "../component/SideBar";
import { Navigate } from "react-router-dom";

export default function HomePage() {

    const isAuth = useSelector(state => state.auth.isAuthenticated);

    if(!isAuth){
        return <Navigate to='/login' />
    }

    return (
        <div className="bg-[#fcf8f8] flex h-screen w-full">
            <SideBar /> 
            <div className="flex flex-col flex-1"> 
                <MainHeader />
                <div className="flex-1 p-4 overflow-y-auto bg-slate-100/80">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}