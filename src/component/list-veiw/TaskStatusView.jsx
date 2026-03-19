import TaskBar from "./TaskBar";

export default function TaskStatusView({ StatusTasks, status , text }) {
    return (
        <>
            <div className="px-5 w-full h-12 bg-stone-200 flex items-center text-md font-semibold text-stone-600 border-b-1 border-gray-300">
                <p>{status}</p>
            </div>
            <ul className="flex flex-col text-lg">
                {StatusTasks.map(task => (
                    <TaskBar key={task.id} task={task} status={status} text={text} />
                ))}
            </ul>
        </>
    )
}