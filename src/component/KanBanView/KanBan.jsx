import { DndContext, DragOverlay, closestCenter } from "@dnd-kit/core";
import { useDispatch } from "react-redux";
import { projectActions } from "../../store/ProjectSlice";

import KanBanBlock from "./KanBanBlock";
import TaskBlock from "./TaskBlock";
import { useState } from "react";
import FilterSortButton from "../../utils/FilterSortButtons";
import useTasks from "../hooks/useTasks";

export default function KanBan({ tasks }) {

    const [activeTask, setActiveTask] = useState(null);

    const {ToDoTask , ProgressTask ,CompletedTask} = useTasks(tasks);

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
        const overID = over.id;

        const overTask = tasks.find(task => task.task_id === overID);

        if (overTask) {
            dispatch(projectActions.ReOrder({
                activeID: active.id,
                overID
            }))
        } else {
            dispatch(projectActions.MoveTask({
                task_id: active.id,
                status: over.id
            }));
        }

        setActiveTask(null);
    }

    return (
        <div className="w-full h-full shadow-lg flex flex-col bg-white dark:bg-[#1f1f1f] dark:border dark:border-[#3a3a3a] dark:shadow-black/30 rounded-xl p-3 overflow-y-hidden">
            <div className="h-15 p-5 flex justify-between items-center">
                <p className="text-xl font-semibold text-stone-700 dark:text-[#e5e5e5]">Recent Tasks</p>
                <FilterSortButton />
            </div>
            <DndContext
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                <div className="h-full w-full lg:grid lg:grid-cols-3 flex overflow-x-auto gap-3">
                    <KanBanBlock StatusTasks={ToDoTask} status="toDo" text="To do" />
                    <KanBanBlock StatusTasks={ProgressTask} status="InProgress" text="In Progress" />
                    <KanBanBlock StatusTasks={CompletedTask} status="Completed" text="Completed" />
                </div>
                <DragOverlay>
                    {activeTask ? <TaskBlock task={activeTask} status={activeTask.status} text={activeTask.status} /> : null}
                </DragOverlay>
            </DndContext>
        </div>
    )
}