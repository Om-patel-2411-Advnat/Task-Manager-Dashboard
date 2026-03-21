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
                    className="h-10 text-lg border border-gray-300 dark:border-[#3a3a3a] dark:bg-[#2b2b2b] outline-none px-4 rounded-md text-stone-800 dark:text-[#e5e5e5] cursor-pointer hover:bg-gray-100 dark:hover:bg-[#333] cursor-pointer"
                >
                    Filter
                </button>
                {isOpen && (
                    <div className="absolute flex flex-col bg-white z-10 rounded-sm">
                        <div 
                            onClick={()=> setSubMenu("priority")}
                            className="h-10 text-lg flex justify-center items-center dark:bg-[#2f2f2f] dark:hover:bg-[#525252] border border-gray-300 dark:border-[#3a3a3a] outline-none px-4 text-stone-800 dark:text-[#e5e5e5] cursor-pointer rounded-t-sm"
                        >
                            Priority
                        </div>
                        <div 
                            onClick={() => setSubMenu("status")}
                            className="h-10 text-lg flex justify-center items-center dark:bg-[#2f2f2f] dark:hover:bg-[#525252] border-x border-b-1 border-gray-300 dark:border-[#3a3a3a] outline-none px-4 text-stone-800 dark:text-[#e5e5e5] cursor-pointer rounded-b-sm"
                        >
                            Status
                        </div>
                    </div>
                )}
                {isOpen && subMenu === 'priority' && (
                    <div className="absolute left-24 border-1 border-gray-300 dark:border-[#3a3a3a] flex flex-col bg-white text-stone-800 z-10">
                        <div 
                            onClick={() => {
                                HandleFilter("All");
                                setIsOpen(false)
                            }}
                            className="h-10 p-2 flex items-center justify-center border-b bg-white dark:bg-[#2f2f2f] border-gray-300 dark:border-[#3a3a3a] text-stone-800 dark:text-[#e5e5e5]  cursor-pointer"
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
                                className="h-10 p-2 flex items-center justify-center border-b bg-white dark:bg-[#2f2f2f] border-gray-300 dark:border-[#3a3a3a] text-stone-800 dark:text-[#e5e5e5]  cursor-pointer"
                            >
                                {priority}
                            </div>
                        ))}
                    </div>
                )}
                {isOpen && subMenu === 'status' && (
                    <div className="absolute left-24 border-1 border-gray-300 dark:border-[#3a3a3a] flex flex-col bg-white text-stone-800 z-10">
                        <div
                            onClick={() => {
                                HandleFilter("All");
                                setIsOpen(false)
                            }}
                            className="h-10 p-2 flex items-center justify-center border-b bg-white dark:bg-[#2f2f2f] border-gray-300 dark:border-[#3a3a3a] text-stone-800 dark:text-[#e5e5e5]  cursor-pointer"
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
                                className="h-10 p-2 flex items-center justify-center border-b bg-white dark:bg-[#2f2f2f] border-gray-300 dark:border-[#3a3a3a] text-stone-800 dark:text-[#e5e5e5]  cursor-pointer"
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
                    className="h-10 text-lg border border-gray-300 dark:border-[#3a3a3a] dark:bg-[#2b2b2b] outline-none px-4 rounded-md text-stone-800 dark:text-[#e5e5e5] cursor-pointer hover:bg-gray-100 dark:hover:bg-[#333] cursor-pointer"
                >
                    Sort    
                </button>
                {sortOpen && (
                    <div className="absolute flex flex-col bg-white z-10 rounded-sm">
                        <div
                            onClick={() => HandleSorting("None")}
                            className="h-10 text-lg flex justify-center items-center dark:bg-[#2f2f2f] dark:hover:bg-[#525252] border border-gray-300 dark:border-[#3a3a3a] outline-none px-4 text-stone-800 dark:text-[#e5e5e5] cursor-pointer rounded-t-sm"
                        >
                            None
                        </div>
                        <div
                            onClick={() => HandleSorting("priority")}
                            className="h-10 text-lg flex justify-center items-center dark:bg-[#2f2f2f] dark:hover:bg-[#525252] border-x border-gray-300 dark:border-[#3a3a3a] outline-none px-4 text-stone-800 dark:text-[#e5e5e5] cursor-pointer"
                        >
                            Priority
                        </div>
                        <div
                            onClick={() => HandleSorting("dueDate")}
                            className="h-10 text-lg flex justify-center items-center dark:bg-[#2f2f2f] dark:hover:bg-[#525252] border border-gray-300 dark:border-[#3a3a3a] outline-none px-4 text-stone-800 dark:text-[#e5e5e5] cursor-pointer rounded-b-sm"
                        >
                            dueDate
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}