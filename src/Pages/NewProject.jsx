import { useDispatch } from "react-redux";
import Modal from "../component/Modal";
import ProjectForm from "../component/ProjectForm";
import { projectActions } from "../store/ProjectSlice";
import { useNavigate } from "react-router-dom";

export default function NewProject(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function HandleNewProject(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const NewProject = {
            id: Date.now(),
            project_name: data.title,
            description : data.description ,
            tasks : [] , 
        }
        dispatch(projectActions.addProject(NewProject));
        navigate('/home');
    }

    return (
        <Modal>
            <div className="h-90 w-100 bg-white rounded-lg shadow-xl p-2">
                <ProjectForm HandleSubmit={HandleNewProject}/>
            </div>
        </Modal>
    )
}