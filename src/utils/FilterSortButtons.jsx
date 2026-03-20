import { useDispatch } from "react-redux"
import { FilterSortingAction } from "../store/FilterSlice";
import { useState } from "react";

export default function FilterSortButton(){

    const [isOpen , setIsOpen] = useState(false);
    const [sortOpen , setSortOpen] = useState(false)
    const [subMenu , setSubMenu] = useState(null)
    const dispatch = useDispatch();

    function HandleFilter(filterValue){
        dispatch(FilterSortingAction.setFilterValue(filterValue));
    }
    function HandleSorting(sortingValue){
        dispatch(FilterSortingAction.setSortingValue(sortingValue));
    }

    return(
        <div className="flex flex-row gap-5 mr-2">
            <div className="relative">
                <button 
                    onClick={()=>{
                        setSortOpen(false);
                        setIsOpen(prev => !prev);
                        setSubMenu(null);
                    }}
                    className="h-10 text-lg border-1 border-gray-300 outline-none px-4 rounded-md text-stone-800 cursor-pointer"
                >
                    Filter
                </button>
                {isOpen && (
                    <div className="absolute flex flex-col bg-white z-10">
                        <div 
                            onClick={()=> setSubMenu("priority")}
                            className="h-10 text-lg flex justify-center items-center border-1 border-gray-300 outline-none px-4 text-stone-800 cursor-pointer"
                        >
                            Priority
                        </div>
                        <div 
                            onClick={() => setSubMenu("status")}
                            className="h-10 text-lg flex justify-center items-center border-x-1 border-b-1 border-gray-300 outline-none px-4 text-stone-800 cursor-pointer"
                        >
                            Status
                        </div>
                    </div>
                )}
                {isOpen && subMenu === 'priority' && (
                    <div className="absolute left-24 border-1 border-gray-300 flex flex-col bg-white text-stone-800 z-10">
                        <div 
                            onClick={() => {
                                HandleFilter("All");
                                setIsOpen(false)
                            }}
                            className="h-10 p-2 flex items-center justify-center border-b-1 border-gray-300 cursor-pointer"
                        >
                            All
                        </div>
                        {['high', 'Low','medium'].map(priority => (
                            <div
                                onClick={()=>{
                                    HandleFilter(priority);
                                    setIsOpen(false)
                                }}
                                key={priority}
                                className="h-10 p-2 flex items-center justify-center border-b-1 border-gray-300 cursor-pointer"
                            >
                                {priority}
                            </div>
                        ))}
                    </div>
                )}
                {isOpen && subMenu === 'status' && (
                    <div className="absolute left-24 border-1 border-gray-300 flex flex-col bg-white text-stone-800 z-10">
                        <div
                            onClick={() => {
                                HandleFilter("All");
                                setIsOpen(false)
                            }}
                            className="h-10 p-2 flex items-center justify-center border-b-1 border-gray-300 cursor-pointer"
                        >
                            All
                        </div>
                        {['Completed', 'toDo','InProgress'].map(status => (
                            <div
                                onClick={() => {
                                    HandleFilter(status);
                                    setIsOpen(false)
                                }}
                                key={status}
                                className="h-10 p-2 flex items-center justify-center border-b-1 border-gray-300 cursor-pointer"
                            >
                                {status}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="relative">
                <button
                    onClick={() => {
                        setIsOpen(false);
                        setSortOpen(prev => !prev);
                    }}
                    className="h-10 text-lg border-1 border-gray-300 outline-none px-4 rounded-md text-stone-800 cursor-pointer"
                >
                    Sort
                </button>
                {sortOpen && (
                    <div className="absolute flex flex-col bg-white z-10">
                        <div
                            onClick={() => HandleSorting("None")}
                            className="h-10 text-lg flex justify-center items-center border-1 border-gray-300 outline-none px-4 text-stone-800 cursor-pointer"
                        >
                            None
                        </div>
                        <div
                            onClick={() => HandleSorting("priority")}
                            className="h-10 text-lg flex justify-center items-center border-x-1 border-b-1 border-gray-300 outline-none px-4 text-stone-800 cursor-pointer"
                        >
                            Priority
                        </div>
                        <div
                            onClick={() => HandleSorting("dueDate")}
                            className="h-10 text-lg flex justify-center items-center border-x-1 border-b-1 border-gray-300 outline-none px-4 text-stone-800 cursor-pointer"
                        >
                            dueDate
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}