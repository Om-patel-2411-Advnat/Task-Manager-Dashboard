import { useDroppable } from '@dnd-kit/core';
import { SortableContext , verticalListSortingStrategy } from '@dnd-kit/sortable';

import TaskBlock from "./TaskBlock";

export default function KanBanBlock({StatusTasks , status , text }){

    const { setNodeRef , isOver } = useDroppable({
        id: status ,
    })

    return(
        <div className='bg-white dark:bg-[#262626] rounded-lg shadow-md border border-gray-300 dark:border-[#3a3a3a] min-w-[300px] lg:w-full dark:shadow-black/10'>
            <p className="h-10 bg-slate-200 dark:bg-[#454545] flex justify-center items-center border-b border-gray-300 dark:border-[#3a3a3a] rounded-t-lg text-stone-800 dark:text-[#b4b4b4] font-semibold">
                {text}
            </p>
            <div 
                ref={setNodeRef}
                className={`h-full w-full p-3 overflow-auto flex flex-col gap-3 ${isOver ? "bg-gray-200 dark:bg-gray-900" : '' }`}
            >
                <SortableContext 
                    items={StatusTasks.map(task =>task.task_id)}
                    strategy={verticalListSortingStrategy}
                >
                    {StatusTasks.length === 0 ? 
                        <p className='flex justify-center items-center text-stone-800'>No Task is available </p>
                        :
                        (StatusTasks.map(task => (
                            <TaskBlock key={task.task_id} task={task} status={status} text={text}/>
                        )))
                    }
                </SortableContext>
            </div>
        </div>
    )
}