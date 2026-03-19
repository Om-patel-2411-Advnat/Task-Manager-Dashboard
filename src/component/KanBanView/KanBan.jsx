import { DndContext, DragOverlay , closestCenter } from "@dnd-kit/core";
import { useDispatch } from "react-redux";
import { projectActions } from "../../store/ProjectSlice";

import KanBanBlock from "./KanBanBlock";
import TaskBlock from "./TaskBlock";
import { useState } from "react";

export default function KanBan({tasks}){

    console.log(tasks);

    const [activeTask, setActiveTask] = useState(null);

    const ToDoTask = tasks.filter(task => task.status === 'toDo');
    const ProgressTask = tasks.filter(task => task.status === 'InProgress');
    const CompletedTask = tasks.filter(task => task.status === 'complete');
    const dispatch = useDispatch();


    function handleDragStart(event) {
        const taskId = event.active.id;

        const task = tasks.find(task => task.task_id === taskId);
        setActiveTask(task);
    }

    function handleDragEnd(event) {
        const { active, over } = event;

        if (!over) {
            setActiveTask(null);
            return;
        }

        dispatch(projectActions.EditTask({
            updatedTask: {
                task_id: active.id,
                status: over.id
            }
        }));

        setActiveTask(null);
    }

    return(
        <div className="w-full h-auto shadow-lg flex flex-col bg-white rounded-xl p-3">
            <div className="h-15 p-5 flex justify-between items-center">
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
            <DndContext 
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                <div className="h-full w-full grid grid-cols-3 gap-3">
                    <KanBanBlock StatusTasks={ToDoTask} status="toDo" text="To do" />
                    <KanBanBlock StatusTasks={ProgressTask} status="InProgress" text="In Progress" />
                    <KanBanBlock StatusTasks={CompletedTask} status="Completed" text="Completed" />
                </div>
                <DragOverlay>
                    {activeTask ? <TaskBlock task={activeTask}/> : null}
                </DragOverlay>
            </DndContext>
        </div>
    )
}