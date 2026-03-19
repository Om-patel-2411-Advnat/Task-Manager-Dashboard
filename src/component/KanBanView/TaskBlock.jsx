import { useDraggable } from "@dnd-kit/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import PriorityBlock from "../../utils/PriorityBlock";
import StatusBlock from "../../utils/StatusBlock";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { projectActions } from "../../store/ProjectSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function TaskBlock({task , status , text}){

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: task.task_id, 
        activationConstraint: {
            delay : 150 ,
            distance: 8,
        },
    });

    const style = {
        transform: transform
            ? `translate(${transform.x}px, ${transform.y}px)`
            : undefined,
    };

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

    return (
        <div 
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={style}
            className="w-full rounded-lg shadow-md border-1 bg-white border-gray-300 flex flex-col justify-between p-3 z-50"
        >
            <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                    <p className="text-lg font-semibold text-stone-700">
                        {task.title}
                    </p>
                    <div className="relative">
                        <p 
                            onClick={(e) => {
                                e.stopPropagation(); 
                                setIsOpen(!IsOpen);
                            }}
                            className="text-stone-700"
                        >
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </p>
                        {IsOpen && <div className="absolute right-0 bg-white text-stone-800 flex border-1 border-gray-300 rounded-md z-10">
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    HandleEditTask();
                                }}
                                className="py-1 px-2 border-r-1 border-gray-300"
                            >
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    HandleDeleteTask();
                                }}
                                className="py-1 px-2"
                            >
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                        </div>}
                    </div>
                </div>
                <StatusBlock status={status} text={text}/>
            </div>
            <div className="flex justify-between items-center mt-2">
                <p className="text-stone-500 text-md">
                    {new Date(task.dueDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    })}
                </p>
                <PriorityBlock priority={task.priority}/>
            </div>
        </div>
    )
}