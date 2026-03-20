export function priorityFilter(tasks , filterValue){
    if(filterValue === 'All') return tasks;

    return tasks.filter(task => task.priority === filterValue);
}
export function StatusFilter( tasks , filterValue){
    if(filterValue === 'All') return tasks;

    return tasks.filter(task => task.status === filterValue );
}
export function Sorting(tasks , sortingValue){

    if(!sortingValue || sortingValue === 'None') return tasks;

    const sortedTasks = [...tasks];

    if (sortingValue === 'priority'){
        const priorityOrder = {
            high : 1,
            medium : 2,
            Low : 3 ,
        };
        return sortedTasks.sort((a,b)=>{
            return priorityOrder[a.priority] - priorityOrder[b.priority] ;
        })
    } else if (sortingValue === 'dueDate'){
        return sortedTasks.sort((a,b) => {
            return new Date(a.dueDate) - new Date(b.dueDate);
        })
    }
}