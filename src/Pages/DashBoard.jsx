import { useSelector } from "react-redux";
import WelcomeText from "../component/WelcomeText";
import Tasks from "../component/list-veiw/Tasks";
import KanBan from "../component/KanBanView/KanBan";

export default function Dashboard() {

    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const currentUser = useSelector(state => state.auth.currentUser);
    const AllProjects = useSelector(state => state.projects.projects );
    const view = useSelector(state => state.view.view);

    const projects = AllProjects.filter(project => project.user_id === currentUser.user_id);

    const allTasks = projects.flatMap(project => project.tasks);

    if (!isAuth) {
        return <Navigate to='/login' />
    }

    let content;

    if (view === 'list') {
        content = <Tasks tasks={allTasks} />;
    } else if (view === 'board') {
        content = <KanBan tasks={allTasks}/> ;
    }

    return (
        <>
            <div className="h-full w-full flex flex-col gap-2">
                <WelcomeText text="Create New Project" />
                {content}
            </div>
        </>
    )
}