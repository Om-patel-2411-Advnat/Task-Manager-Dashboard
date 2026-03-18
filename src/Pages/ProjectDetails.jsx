import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom"

import WelcomeText from "../component/WelcomeText";
import Tasks from "../component/Tasks";

export default function ProjectDetails() {

    const { project_id } = useParams();

    const projects = useSelector(state => state.projects.projects);
    const selected_project = projects.find(project => project.project_id === Number(project_id));
    const tasks = selected_project.tasks;

    return (
        <>
            <Outlet />
            <div className="h-full w-full flex flex-col gap-2">
                <WelcomeText text="Create New Task" path="task"/>
                <Tasks tasks={tasks}/>
            </div>
        </>
    )
}