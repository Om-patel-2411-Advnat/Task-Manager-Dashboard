import TaskStatusView from "./TaskStatusView";

export default function Tasks({ tasks }) {

    const ToDoTask = tasks.filter(task => task.status === 'toDo');
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
            <div>
                <TaskStatusView StatusTasks={ToDoTask} status="toDo" text="To do"/>
            </div>
            <div>
                <TaskStatusView StatusTasks={ProgressTask} status="InProgress" text="In Progress"/>
            </div>
            <div>
                <TaskStatusView StatusTasks={CompletedTask} status="Completed" text="Completed"/>
            </div>
        </div>
    )
}