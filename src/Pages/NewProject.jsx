import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Modal from "../component/Modal";
import ProjectForm from "../component/ProjectForm";
import { projectActions } from "../store/ProjectSlice";
import { useNavigate } from "react-router-dom";

export default function NewProject(){

    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const location = useLocation();
    const project = location.state?.project ;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!isAuth) {
        return <Navigate to='/login' />
    }

    function HandleNewProject(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        if(project){
            dispatch(projectActions.editProject({
                project_id : project.project_id ,
                project_name : data.title ,
                description : data.description,
                tasks : project.tasks 
            }))
        }else{
            const NewProject = {
                project_id: Date.now(),
                project_name: data.title,
                description : data.description ,
                tasks : [] , 
            }
    
            dispatch(projectActions.addProject(NewProject));
        }
        navigate('/');
    }
    function HandleClose(){
        navigate('/');
    }

    return (
        <Modal>
            <div className="h-90 w-100 bg-white rounded-lg shadow-xl p-4">
                <ProjectForm HandleSubmit={HandleNewProject} HandleClose={HandleClose} project={project}/>
            </div>
        </Modal>
    )
}