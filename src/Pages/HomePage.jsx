import { Outlet } from "react-router-dom";
import MainHeader from "../component/MainHeader";
import SideBar from "../component/SideBar";

export default function HomePage() {
    return (
        <div className="bg-[#fcf8f8] h-screen w-full">
            <MainHeader />
            <div className="flex"> 
                <SideBar /> 
                <Outlet />
            </div>
        </div>
    )
}