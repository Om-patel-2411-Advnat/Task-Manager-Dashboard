import FilterSortButton from "../../utils/FilterSortButtons";
import TaskStatusView from "./TaskStatusView";
import useTasks from "../hooks/useTasks";

export default function Tasks({ tasks }) {

    const { ToDoTask, ProgressTask, CompletedTask } = useTasks(tasks);

    return (
        <div className="w-full h-auto shadow-lg flex flex-col bg-white dark:bg-[#1f1f1f] dark:border dark:border-[#3a3a3a] rounded-xl pb-10 dark:shadow-black/30 overflow-y-hidden flex-1 scroll-auto">
            <div className="h-15 p-5 border-b border-gray-300 dark:border-[#3a3a3a]  flex justify-between items-center">
                <p className="text-xl font-semibold text-stone-700 dark:text-[#e5e5e5]">Recent Tasks</p>
                <FilterSortButton />
            </div>
            <div>
                <TaskStatusView StatusTasks={ToDoTask} status="toDo" text="To do"/>
            </div>
            <div >
                <TaskStatusView StatusTasks={ProgressTask} status="InProgress" text="In Progress"/>
            </div>
            <div>
                <TaskStatusView StatusTasks={CompletedTask} status="Completed" text="Completed"/>
            </div>
        </div>
    )
}