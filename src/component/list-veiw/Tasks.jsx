import FilterSortButton from "../../utils/FilterSortButtons";
import TaskStatusView from "./TaskStatusView";
import useTasks from "../hooks/useTasks";

export default function Tasks({ tasks }) {

    const { ToDoTask, ProgressTask, CompletedTask } = useTasks(tasks);

    return (
        <div className="w-full h-auto shadow-lg flex flex-col bg-white rounded-xl">
            <div className="h-15 p-5 border-b-1 border-gray-300 flex justify-between items-center">
                <p className="text-xl font-semibold text-stone-700">Recent Tasks</p>
                <FilterSortButton />
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