import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SwitchActions } from "../store/SwitchViewSlice";

export default function WelcomeText({ text , path }){

    const dispatch = useDispatch();
    const view = useSelector(state => state.view.view);

    return (
        <div className="h-25 w-full rounded-lg lg:rounded-xl  bg-white shadow-md flex justify-between px-8 py-2">
            <div className="hidden lg:flex lg:flex-col">
                <p className="text-3xl font-medium h-13 w-auto flex items-center text-stone-800">Welcome back , Om! 👋</p>
                <p className="text-stone-500">Here what's happening with your projects today. </p>
            </div>
            <div className="flex justify-center items-center gap-5">
                <div className="h-10  text-stone-800 flex  border-1 border-gray-300 rounded-md">
                    <button 
                        onClick={() => dispatch(SwitchActions.SetView("list"))}
                        className={`border-r-1 border-gray-300 px-5 w-20 ${view === 'list' ? 'bg-stone-200 text-shadow-md' : '' }`}
                    >
                        List
                    </button>
                    <button 
                        onClick={() => dispatch(SwitchActions.SetView("board"))}
                        className={`px-5 w-20 ${view === 'board' ? 'bg-stone-200 text-shadow-md' : '' }`}
                    >
                        Board
                    </button>
                </div>
                <Link 
                    to={path === 'task' ? "new-task" :'/new-project'} 
                    className="h-10 w-auto bg-blue-600 text-white px-2 rounded-lg shadow-md flex justify-center items-center"
                >
                     + {text}
                </Link>
            </div>
        </div>
    )
}   