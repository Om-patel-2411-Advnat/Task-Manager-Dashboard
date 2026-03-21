import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import PriorityBlock from "../../utils/PriorityBlock";
import StatusBlock from "../../utils/StatusBlock";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { projectActions } from "../../store/ProjectSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function TaskBlock({task , status , text}){

    const { attributes , listeners , setNodeRef , transform , transition } = useSortable({
        id: task.task_id, 
    })

    const style = {
        transform : CSS.Transform.toString(transform),
        transition ,
    }

    const [ IsOpen , setIsOpen ] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { project_id } = useParams()
    
    function HandleEditTask(){
        setIsOpen(false);

        if(project_id){
            navigate('new-task',{
                state : { task: task }
            })
        }else{
            navigate(`${task.project_id}/new-task` , {
                state : { task : task }
            })
        }
    }
    function HandleDeleteTask(){
        setIsOpen(false);
        dispatch(projectActions.RemoveTask({task}));
    }

    const dueDate = new Date(task.dueDate).setHours(0,0,0,0);
    const todayDate = new Date().setHours(0,0,0,0);

    const isOverDue = dueDate < todayDate ;

    const formattedDate = new Date(task.dueDate).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <div 
            ref={setNodeRef}
            {...attributes}
            style={style}
            className="w-full rounded-lg shadow-md dark:shadow-black/30 border bg-white dark:bg-[#2b2b2b] border-gray-300 dark:border-[#3a3a3a] flex flex-col justify-between p-3"
        >
            <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <p 
                        {...listeners}
                        className="text-lg font-semibold text-stone-700 dark:text-[#e5e5e5]"
                    >
                        {task.title}
                    </p>
                    <div className="relative">
                        <p 
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsOpen(!IsOpen);
                            }}
                            className="text-stone-700 dark:text-[#bdbdbd] hover:text-black dark:hover:text-white"
                        >
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </p>
                        {IsOpen && <div className="absolute right-0 bg-white dark:bg-[#2f2f2f] text-stone-800 dark:text-[#e5e5e5] flex border border-gray-300 
                        dark:border-[#3a3a3a] rounded-md shadow-md dark:shadow-black/30">
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    HandleEditTask();
                                }}
                                className="py-1 px-2 border-r border-gray-300 dark:border-[#3a3a3a] hover:bg-gray-100 dark:hover:bg-[#3a3a3a]"
                            >
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    HandleDeleteTask();
                                }}
                                className="py-1 px-2 hover:bg-gray-100 dark:hover:bg-[#3a3a3a]"
                            >
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                        </div>}
                    </div>
                </div>
                <StatusBlock status={status} text={text}/>
            </div>
            <div className="flex justify-between items-center mt-2">
                <p className={` text-md ${isOverDue ? 'text-rose-400 dark:text-rose-300' : 'text-stone-500 dark:dark:text-[#a3a3a3]' }`}>
                    { formattedDate }      
                </p>
                <PriorityBlock priority={task.priority}/>
            </div>
        </div>
    )
}