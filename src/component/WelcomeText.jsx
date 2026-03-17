import { Link } from "react-router-dom";

export default function WelcomeText(){
    return (
        <div className="h-25 w-full rounded-lg lg:rounded-xl  bg-white shadow-md flex justify-between px-8 py-2">
            <div className="">
                <p className="text-3xl font-medium h-13 w-auto flex items-center text-stone-800">Welcome back , Om! 👋</p>
                <p className="text-stone-500">Here what's happening with your projects today. </p>
            </div>
            <div className="flex justify-center items-center">
                <Link to='new-project' className="h-10 w-auto bg-blue-600 text-white px-2 rounded-lg shadow-md flex justify-center items-center"> + Add new Project</Link>
            </div>
        </div>
    )
}