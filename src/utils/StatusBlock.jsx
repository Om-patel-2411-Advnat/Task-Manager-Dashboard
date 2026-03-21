export default function StatusBlock({status , text}){
    return (
        <div
            className={`flex h-7  px-3 rounded-full gap-2 justify-start items-center shadow-md dark:shadow-sm
                ${status === 'toDo' ? "w-20 shadow-stone-200 bg-stone-200" : ''}
                ${status === 'InProgress' ? "w-30 shadow-yellow-200 bg-yellow-200" : ''}
                ${status === 'Completed' ? "w-30 shadow-green-200 bg-green-200" : ''}`
            }
        >
            <span className={`h-2 w-2 rounded-full 
                ${status === 'toDo' ?"bg-stone-600" : ''}
                ${status === 'InProgress' ?"bg-yellow-600" : ''}
                ${status === 'Completed' ?"bg-green-600" : ''}`
                }></span>
            <p className="text-sm whitespace-nowrap">{text}</p>
        </div>
    )
}