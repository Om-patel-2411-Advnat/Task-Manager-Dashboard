export default function TaskForm({ onCreateNewTask, HandleClose }){
    return(
        <>
            <p className="h-10 w-full flex justify-center items-center text-xl font-semibold text-stone-700 rounded-lg mb-5 mt-5">Create New Task</p>
            <form 
                onSubmit={onCreateNewTask}
                className="h-full w-full flex flex-col gap-5"
            >
                <div className="flex flex-col">
                    <p htmlFor="title" className="text-stone-700 task-md" >Title</p>
                    <input
                        type='text'
                        name='title'
                        required
                        className="h-10 w-full rounded-md px-2 task-md outline-none border-1 border-gray-300"
                    />
                </div>
                <div className="flex flex-col">
                    <p htmlFor="description" className="text-stone-700 task-md">Description</p>
                    <textarea
                        name="description"
                        required
                        className="overflow-auto w-full outline-none text-md px-2 h-20 rounded-md border-1 border-gray-300"
                    />
                </div>
                <div className="h-auto flex gap-4">
                    <p htmlFor="dueDate" className="flex justify-center items-center text-stone-700 task-md">Due Date :</p>
                    <input
                        type="date"
                        name="dueDate"
                        required
                        className="h-8 w-50 rounded-sm px-3 border-1 border-gray-300 text-stone-700 task-md"
                    />
                </div>
                <div className="flex justify-around">
                    <div className="h-10 w-40 border-1 border-gray-300 flex justify-center items-center rounded-md pr-2">
                        <select name="priority" required className="h-full w-full outline-none text-center text-stone-700 task-md">
                            <option defaultValue='low'>Low</option>
                            <option value='high'>High</option>
                            <option value='medium'>Medium</option>
                        </select>
                    </div>
                    <div className="h-10 w-40 border-1 border-gray-300 flex justify-center items-center rounded-md pr-2">
                        <select name="status" required className="h-full w-full outline-none text-center text-stone-700 task-md">
                            <option defaultValue='toDo'>To do</option>
                            <option value='InProgress'>In Progress</option>
                            <option value='complete'>completed</option>
                        </select>
                    </div>
                </div>
                <div className="h-8 flex justify-center items-center ml-auto gap-5">
                    <button
                        onClick={HandleClose}
                        type="button"
                        className="text-stone-800 hover:text-shadow-md hover:text-stone-700"
                    >
                        Cancel
                    </button>
                    <button className="h-full w-35 bg-blue-500 text-slate-100 rounded-md hover:bg-blue-600">Create Task</button>
                </div>
            </form>
        </>
    )
}