import PriorityBlock from "../utils/PriorityBlock";
import StatusBlock from "../utils/StatusBlock";

export default function TaskBar({task , status , text }){

    return(
        <div className="w-full px-3 h-12 bg-white border-b border-gray-300 grid grid-cols-[2fr_1fr_1fr_1fr] items-center">
            <div className="">
                <p className="">{task.title}</p>
            </div>
            <div className="">
                <StatusBlock status={status} text={text}/>
            </div>
            <div className="">
                <PriorityBlock priority={task.priority}/>
            </div>
            <div className="flex">
                <p className="text-stone-500 font-serif">
                    {new Date(task.dueDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    })} 
                </p>
                <div className="ml-auto mr-10">
                    <p>...</p>
                </div>
            </div>
        </div>
    )
}