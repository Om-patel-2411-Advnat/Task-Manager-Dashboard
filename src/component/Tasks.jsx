import TaskBar from "./TaskBar";

export default function Tasks({tasks}){

    const ToDoTask = tasks.filter(task => task.status === 'To do');
    const ProgressTask = tasks.filter(task => task.status === 'InProgress');
    const CompletedTask = tasks.filter(task => task.status === 'complete');

    return (
        <div className="w-full h-auto shadow-lg flex flex-col bg-white rounded-xl">
            <div className="h-15 p-5 border-b-1 border-gray-300 flex justify-between items-center">
                <p className="text-xl font-semibold text-stone-700">Recent Tasks</p>
                <div className="flex flex-row gap-5 mr-2">
                    <select className="h-10 text-lg border-1 border-gray-300 outline-none px-4 rounded-sm text-stone-800">
                        <option defaultValue="filter">Filter</option>
                        <option value="priority">Priority</option>
                        <option value="status">status</option>
                    </select>
                    <select className="h-10 text-lg border-1 border-gray-300 outline-none px-4 rounded-sm text-stone-800">
                        <option defaultValue="sort">Sort</option>
                        <option value="status">priority</option>
                        <option value="due-Date">Due Date</option>
                    </select>
                </div>
            </div>
            <div className="px-5 w-full h-12 bg-stone-200 flex items-center text-md font-semibold text-stone-600 border-b-1 border-gray-300">
                <p>TO dO</p>
            </div>
            <ul className="flex flex-col text-lg">
                {ToDoTask.map(task => (
                    <TaskBar key={task.id} task={task} status="todo" text="To Do"/>
                ))}
            </ul>
            <div className="px-5 w-full h-12 bg-stone-200 flex items-center text-md font-semibold text-stone-600 border-b-1 border-gray-300">
                <p>IN PROGRESS</p>
            </div>
            <ul className="flex flex-col text-lg">
                {ProgressTask.map(task => (
                    <TaskBar key={task.id} task={task} status="progress" text="In Progress" className="bg-red-400"/>
                ))}
            </ul>
            <div className="px-5 w-full h-12 bg-stone-200 flex items-center text-md font-semibold text-stone-600 border-b-1 border-gray-300">
                <p>COMPLETED</p>
            </div>
            <ul className="flex flex-col text-lg">
                {CompletedTask.map(task => (
                    <TaskBar key={task.id} task={task} status="completed" text="Completed"/>
                ))}
            </ul>
        </div>
    )
}