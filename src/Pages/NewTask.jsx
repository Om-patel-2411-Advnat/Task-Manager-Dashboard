import Modal from "../component/Modal";
import TaskForm from "../component/TaskFrom";

export default function NewTask(){

    function HandleNewTask(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        console.log(data);
    }

    return (
        <Modal>
            <div className="h-120 w-100 bg-white rounded-lg shadow-xl p-2">
                <TaskForm onCreateNewTask={HandleNewTask}/>
            </div>
        </Modal>
    )
}