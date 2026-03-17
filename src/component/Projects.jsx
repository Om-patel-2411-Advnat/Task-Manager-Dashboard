import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

// const DUMMY_PROJECTS = [
//     { id: 'p-1' , project_title : "first" , description : "this is my first project" , tasks : [
//         { id: 't-1', title : 'task-1' , description : 'this is task number 1'},
//         { id: 't-2', title : 'task-2' , description : 'this is task number 2'},
//     ]},
//     { id: 'p-2' , project_title: "second", description: "this is my second project", tasks : [
//         { id: 't-3', title: 'task-3', description: 'this is task number 3' },
//         { id: 't-4', title: 'task-4', description: 'this is task number 4' },
//     ] },
//     {id: 'p-3', project_title: "third", description: "this is my third project" , tasks:[
//         { id: 't-5', title: 'task-5', description: 'this is task number 5' },
//         { id: 't-6', title: 'task-6', description: 'this is task number 6' },
//     ]},
// ]

export default function Projects(){

    const projects = useSelector(state => state.projects.projects);

    return (
        <div className="flex flex-col mt-2 mx-2 text-md">
            {projects.map(project =>(
                <Link to={project.id} key={project.id} className="h-10 hover:bg-stone-200 rounded-md mx-3 text-stone-700 flex items-center pl-3">{project.project_name}</Link>
            ))}
        </div>
    )
}