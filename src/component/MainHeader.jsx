import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { FilterSortingAction } from "../store/FilterSlice";

export default function MainHeader(){

    const [input , setInput] = useState('');
    const dispatch = useDispatch();

    useEffect(()=>{
        const timer = setTimeout(()=>{
            dispatch(FilterSortingAction.setSearchValue(input))
        },500);

        return () => clearTimeout(timer);
    },[input , dispatch]);

    return(
        <header className="h-16 w-full flex justify-between items-center px-2 bg-[#fcf8f8] border-b-1 border-gray-300">
            <div className="h-full w-10 flex justify-center items-center lg:hidden">
                <p className="text-xl"><FontAwesomeIcon icon={faBars} /></p>
            </div>
            <div className="h-12 flex justify-center items-center">
                <input 
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    type="text" 
                    className="h-full w-full lg:w-200 bg-gray-200 hover:bg-gray-300 rounded-lg outline-none px-3 text-lg" 
                    placeholder="Search your task" 
                />
            </div>
        </header>
    )
}