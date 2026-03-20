import { useSelector } from "react-redux";
import { priorityFilter, Sorting, StatusFilter } from "../../utils/Filter";

export default function useTasks(tasks){

    const filterValue = useSelector(state => state.filter_sorting.filterValue);
    const sortingValue = useSelector(state => state.filter_sorting.sortingValue);
    const searchValue = useSelector(state => state.filter_sorting.searchValue);

    let updatedTasks = tasks;

    if(filterValue !== ''){
        if (filterValue === "Low" || filterValue === "high" || filterValue === "medium" || filterValue === "All"){
            updatedTasks = priorityFilter(updatedTasks , filterValue);
        }
        if (filterValue === "Completed" || filterValue === "toDo" || filterValue === "InProgress" || filterValue === "All"){
            updatedTasks = StatusFilter(updatedTasks , filterValue);
        }
    };
    if (sortingValue !== ''){
        if (sortingValue === "dueDate" || sortingValue === "priority" || sortingValue === 'None'){
            updatedTasks = Sorting(tasks, sortingValue);
        }
    }
    if(searchValue !== ''){
        updatedTasks = updatedTasks.filter(task => 
            task.title.toLowerCase().includes(searchValue.toLowerCase())
        )
    }

    const ToDoTask = updatedTasks.filter(task => task.status === 'toDo');
    const ProgressTask = updatedTasks.filter(task => task.status === 'InProgress');
    const CompletedTask = updatedTasks.filter(task => task.status === 'Completed');

    return { ToDoTask , ProgressTask , CompletedTask};
}