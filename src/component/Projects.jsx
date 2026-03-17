import { Link } from "react-router-dom"

const DUMMY_PROJECTS = [
    { id: 'p-1' , project_title : "first" , description : "this is my first project" , tasks : [
        { id: 't-1' , title : 'task-1' , description : 'this is task number 1'},
        { id: 't-2', title : 'task-2' , description : 'this is task number 2'},
    ]},
    { id: 'p-2' , project_title: "second", description: "this is my second project", tasks : [
        { id: 't-3', title: 'task-3', description: 'this is task number 3' },
        { id: 't-4', title: 'task-4', description: 'this is task number 4' },
    ] },
    {id: 'p-3', project_title: "third", description: "this is my third project" , tasks:[
        { id: 't-5', title: 'task-5', description: 'this is task number 5' },
        { id: 't-6', title: 'task-6', description: 'this is task number 6' },
    ]},
]

export default function Projects(){
    return (
        <ul className="flex flex-col gap-2 mt-2 mx-2">
            <Link to="/new-project"></Link>
            {DUMMY_PROJECTS.map(project =>(
                <li key={project.id} className="w-full h-10 bg-amber-500 text-black flex items-center pl-3">{project.project_title}</li>
            ))}
        </ul>
    )
}