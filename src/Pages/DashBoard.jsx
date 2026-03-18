import { useSelector } from "react-redux";
import WelcomeText from "../component/WelcomeText";
import Tasks from "../component/Tasks";

export default function Dashboard(){

    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const allTasks = useSelector(state => state.projects.projects.flatMap(project => project.tasks))

    if (!isAuth) {
        return <Navigate to='/login' />
    }

    return (
        <>
            <div className="h-full w-full flex flex-col gap-2">
                <WelcomeText text="Create New Project"/> 
                <Tasks tasks={allTasks}/>
            </div>
        </>
    )
}