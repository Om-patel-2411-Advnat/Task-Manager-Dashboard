import { useLocation, useNavigate, useParams } from "react-router-dom";
import Modal from "../component/Modal";
import TaskForm from "../component/TaskFrom";
import { useDispatch } from "react-redux";
import { projectActions } from "../store/ProjectSlice";

export default function NewTask(){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { project_id } = useParams();
    const location = useLocation();
    const task = location.state?.task;

    function HandleNewTask(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        
        if(task){

            const updatedTask = {
                project_id : task.project_id ,
                task_id : task.task_id ,
                title: data.title,
                description: data.description,
                priority: data.priority,
                status: data.status,
                dueDate: data.dueDate,
            }

            dispatch(projectActions.EditTask({ updatedTask }));

            navigate('/');

        }else{
            const newTask = {
                project_id ,
                task_id : Date.now(),
                title : data.title ,
                description : data.description ,
                priority: data.priority,
                status : data.status ,
                dueDate : data.dueDate,
            }
            dispatch(projectActions.addTask({
                project_id : Number(project_id),
                task: newTask ,
            }));

            navigate('..');
        }


    }
    function HandleClose() {
        navigate('..');
    }

    return (
        <Modal path="task">
            <div className="h-120 w-100 bg-white rounded-lg shadow-xl p-4">
                <TaskForm onCreateNewTask={HandleNewTask} HandleClose={HandleClose} task={task}/>
            </div>
        </Modal>
    )
}