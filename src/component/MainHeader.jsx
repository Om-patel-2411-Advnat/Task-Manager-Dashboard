import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { FilterSortingAction } from "../store/FilterSlice";

export default function MainHeader({ setSideBarOpen }){

    const [input , setInput] = useState('');
    const dispatch = useDispatch();

    useEffect(()=>{
        const timer = setTimeout(()=>{
            dispatch(FilterSortingAction.setSearchValue(input))
        },500);

        return () => clearTimeout(timer);
    },[input , dispatch]);

    return(
        <header className="h-16 w-full flex  items-center px-2 bg-[#fcf8f8] dark:bg-[#1f1f1f] border-b-1 border-gray-300 dark:border-gray-500 gap-5">
            <div 
                onClick={()=> setSideBarOpen(prev => !prev )}
                className="h-full w-10 flex justify-center items-center lg:hidden relative"
            >
                <p className="text-xl"><FontAwesomeIcon icon={faBars} /></p>
            </div>
            <div className="h-12 flex justify-center items-center mr-3">
                <input 
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    type="text" 
                    className="h-full w-200 bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 hover:bg-gray-300 rounded-lg outline-none px-3 text-lg" 
                    placeholder="Search your task" 
                />
            </div>
        </header>
    )
}