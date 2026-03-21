
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import PriorityBlock from "../../utils/PriorityBlock";
import StatusBlock from "../../utils/StatusBlock";

import { projectActions } from "../../store/ProjectSlice";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function TaskBar({ task, status, text }) {

    const [IsOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { project_id } = useParams()

    function HandleEditTask() {
        setIsOpen(false);

        if (project_id) {
            navigate('new-task', {
                state: { task: task }
            })
        } else {
            navigate(`${task.project_id}/new-task`, {
                state: { task: task }
            })
        }
    }
    function HandleDeleteTask() {
        setIsOpen(false);
        dispatch(projectActions.RemoveTask({ task }));
    }

    return (
        <div className="w-full px-3 h-12 bg-white dark:bg-[#2b2b2b] border-b border-gray-300 dark:border-[#3a3a3a] grid grid-cols-[2fr_1fr_1fr_1fr] items-center">
            <div className="dark:text-[#e5e5e5]">
                <p className="">{task.title}</p>
            </div>
            <div className="">
                <StatusBlock status={status} text={text} />
            </div>
            <div className="">
                <PriorityBlock priority={task.priority} />
            </div>
            <div className="flex justify-between">
                <p className="text-stone-500 font-serif dark:text-[#a3a3a3]">
                    {new Date(task.dueDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    })}
                </p>
                <div className="relative mr-5">
                    <p
                        className="text-stone-700 dark:text-[#bdbdbd] hover:text-black dark:hover:text-white cursor-pointer"
                        onClick={() => setIsOpen(!IsOpen)}
                    >
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </p>
                    {IsOpen && <div className="absolute right-0 bg-white dark:bg-[#2f2f2f] text-stone-800 dark:text-[#e5e5e5] flex border-1 border-gray-300 
                        dark:border-[#3a3a3a] rounded-md z-10 shadow-md dark:shadow-black/30">
                        <button
                            onClick={HandleEditTask}
                            className="py-1 px-2 border-r-1 border-gray-300 dark:border-[#3a3a3a] hover:bg-gray-100 dark:hover:bg-[#3a3a3a]"
                        >
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button
                            onClick={HandleDeleteTask}  
                            className="py-1 px-2 hover:bg-gray-100 dark:hover:bg-[#3a3a3a]"
                        >
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </div>}
                </div>
            </div>
        </div>
    )
}