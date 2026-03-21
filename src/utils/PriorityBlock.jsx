export default function PriorityBlock({priority }){    
    return(
        <div
            className={`flex h-7 px-3 w-20 rounded-sm gap-2 justify-center items-center shadow-md dark:shadow-sm
                ${priority === 'Low' ? "shadow-gray-300 bg-gray-300 text-gray-600" : ''}
                ${priority === 'medium' ? "shadow-blue-300 bg-blue-200 text-blue-600" : ''}
                ${priority === 'high' ? "shadow-red-300 bg-red-200 text-red-600" : ''}`
            }
        >
            <p className="text-sm whitespace-nowrap">{priority}</p>
        </div>
    )
}