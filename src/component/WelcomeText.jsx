import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SwitchActions } from "../store/SwitchViewSlice";

export default function WelcomeText({ text , path }){

    const dispatch = useDispatch();
    const view = useSelector(state => state.view.view);

    return (
        <div className="h-25 w-full rounded-lg lg:rounded-xl  bg-white dark:bg-[#1f1f1f] shadow-md dark:border dark:border-[#3a3a3a] dark:shadow-black/30 flex justify-between px-8 py-2">
            <div className="flex flex-col justify-center items-center">
                <p className="text-2xl md:text-3xl font-medium h-13 w-auto flex items-center dark:text-stone-100 text-stone-800">Welcome back, Om! 👋</p>
                <p className="text-stone-500 hidden lg:flex">Here what's happening with your projects today. </p>
            </div>
            <div className="flex justify-center items-center gap-5">
                <div className="h-10  text-stone-800 flex  border-1 border-gray-300 dark:border-[#3a3a3a] rounded-md">
                    <button 
                        onClick={() => dispatch(SwitchActions.SetView("list"))}
                        className={`border-r-1 border-gray-300 dark:border-[#3a3a3a] px-5 w-20 rounded-l-md ${view === 'list' ? 'bg-stone-200 text-shadow-md' : 'dark:text-stone-200' }`}
                    >
                        List
                    </button>
                    <button 
                        onClick={() => dispatch(SwitchActions.SetView("board"))}
                        className={`px-5 w-20 rounded-r-md ${view === 'board' ? 'bg-stone-200 text-shadow-md' : 'dark:text-stone-200' }`}
                    >
                        Board
                    </button>
                </div>
                <Link 
                    to={path === 'task' ? "new-task" :'/new-project'} 
                    className="h-10 w-45 bg-blue-600 dark:bg-blue-500 text-white px-2 rounded-lg shadow-md dark:shadow-black/30  
                    hover:bg-blue-700 dark:hover:bg-blue-400  flex justify-center items-center"
                >
                     + {text}
                </Link>
            </div>
        </div>
    )
}   