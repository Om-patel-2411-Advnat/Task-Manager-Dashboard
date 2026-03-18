import { useNavigate, useParams } from "react-router-dom";
import Modal from "../component/Modal";
import TaskForm from "../component/TaskFrom";
import { useDispatch } from "react-redux";
import { projectActions } from "../store/ProjectSlice";

export default function NewTask(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { project_id } = useParams();
    console.log(project_id);

    function HandleNewTask(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        const newTask = {
            task_id : Date.now(),
            title : data.title ,
            description : data.description ,
            priority: data.priority,
            status : data.status ,
            dueDate : data.dueDate,
        }

        console.log(data);
        dispatch(projectActions.addTask({
            project_id : Number(project_id),
            task: newTask ,
        }));

        navigate('..');
    }
    function HandleClose() {
        navigate('..');
    }

    return (
        <Modal path="task">
            <div className="h-120 w-100 bg-white rounded-lg shadow-xl p-4">
                <TaskForm onCreateNewTask={HandleNewTask} HandleClose={HandleClose} />
            </div>
        </Modal>
    )
}