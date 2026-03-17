export default function TaskForm({ onCreateNewTask }){
    return(
        <>
            <p className="h-10 w-full flex justify-center items-center text-lg font-semibold text-stone-700 rounded-lg mb-5 mt-5">Create New Task</p>
            <form 
                onSubmit={onCreateNewTask}
                className="h-full w-full flex flex-col gap-5"
            >
                <div className="flex flex-col">
                    <p htmlFor="title" >Title</p>
                    <input
                        type='text'
                        name='title'
                        required
                        className="bg-black/10 h-10 w-full rounded-md px-2 outline-none "
                    />
                </div>
                <div className="flex flex-col">
                    <p htmlFor="description">Description</p>
                    <textarea
                        name="description"
                        required
                        className="bg-black/10 overflow-auto w-full outline-none text-md px-2 h-20 rounded-md"
                    />
                </div>
                <div className="h-auto flex flex-col">
                    <p htmlFor="dueDate" className="">Due Date</p>
                    <input
                        type="date"
                        name="dueDate"
                        required
                        className="bg-black/10 h-8 w-50 rounded-sm px-3"
                    />
                </div>
                <div className="flex justify-around">
                    <div className="h-10 w-40 border-1 border-gray-300 flex justify-center items-center rounded-md pr-2">
                        <select name="priority" required className="h-full w-full outline-none text-center ">
                            <option defaultValue=''>no priority</option>
                            <option value='high'>High</option>
                            <option value='medium'>Medium</option>
                            <option value='low'>Low</option>
                        </select>
                    </div>
                    <div className="h-10 w-40 border-1 border-gray-300 flex justify-center items-center rounded-md pr-2">
                        <select name="status" required className="h-full w-full outline-none text-center">
                            <option defaultValue='toDo'>To do</option>
                            <option value='InProgress'>In Progress</option>
                            <option value='complete'>completed</option>
                        </select>
                    </div>
                </div>
                <div className="h-8 w-40 flex justify-center items-center bg-blue-600 ml-auto rounded-md">
                    <button className="h-full w-full text-slate-200">Create Task</button>
                </div>
            </form>
        </>
    )
}