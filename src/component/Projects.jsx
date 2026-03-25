import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { projectActions } from "../store/ProjectSlice";

export default function Projects(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const AllProjects = useSelector(state => state.projects.projects);
    const currentUser = useSelector(state => state.auth.currentUser);

    const projects = AllProjects.filter(project => project.user_id === currentUser.user_id);

    function HandleRemoveProject(id , e){

        e.preventDefault();
        e.stopPropagation();

        dispatch(projectActions.removeProject(id));
    }
    function HandleEditProject(e , id){
        e.preventDefault();

        navigate('/new-project' , {
            state : { project : projects.find(project => project.project_id === id )}
        })
    }

    return (
        <div className="flex flex-col mt-2 mx-2 text-md gap-1">
            {projects.map(project =>(
                <NavLink 
                    to={`${project.project_id}`} 
                    key={project.project_id} 
                    className={({isActive}) =>
                        `group h-10  rounded-md mx-3 text-stone-700 dark:text-[#e5e5e5] flex items-center pl-3
                        ${isActive ? 'bg-stone-200 dark:bg-[#3d3d3d]' : 'hover:bg-stone-200 dark:hover:bg-[#3d3d3d]' }`
                    }
                >
                    <span>
                        {project.project_name}
                    </span>
                    <div className="ml-auto pr-2 flex gap-2 text-stone-500 dark:text-[#b7b7b7] opacity-0 group-hover:opacity-100 transition ">
                        <button
                            onClick={(e) => HandleEditProject(e, project.project_id)}
                            className="hover:text-stone-700 dark:hover:text-[#e5e5e5]"
                        >
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button
                            onClick={(e) => HandleRemoveProject(project.project_id , e)}
                            className="hover:text-stone-700 dark:hover:text-[#e5e5e5]"
                        >   
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </div>
                </NavLink>
            ))}
        </div>
    )
}