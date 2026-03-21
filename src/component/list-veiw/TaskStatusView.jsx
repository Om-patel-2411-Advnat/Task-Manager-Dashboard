import TaskBar from "./TaskBar";

export default function TaskStatusView({ StatusTasks, status , text }) {
    return (
        <>
            <div 
                className="px-5 w-full h-12 bg-stone-200 dark:bg-[#262626] flex items-center text-md font-semibold text-stone-600 dark:text-[#a3a3a3] border-b-1
                border-gray-300 dark:border-[#3a3a3a]"
            >
                <p>{status}</p>
            </div>
            {StatusTasks.length === 0 ? 
                <p className="p-3 text-stone-800 text-lg dark:text-[#bdbdbd]">No task is Available</p> 
                : 
                <ul className="flex flex-col text-lg">
                    {StatusTasks.map(task => (
                        <TaskBar key={task.id} task={task} status={status} text={text} />
                    ))}
                </ul>
            }
        </>
    )
}