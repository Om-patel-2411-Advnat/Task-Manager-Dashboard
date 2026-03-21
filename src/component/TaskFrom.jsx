export default function TaskForm({ onCreateNewTask, HandleClose , task }){
    return(
        <>
            <p className="h-10 w-full flex justify-center items-center text-xl font-semibold text-stone-700 dark:text-[#e5e5e5] rounded-lg mb-5 mt-5 text-shadow-md">
                Create New Task
            </p>
            <form 
                onSubmit={onCreateNewTask}
                className="h-full w-full flex flex-col gap-5"
            >
                <div className="flex flex-col">
                    <p htmlFor="title" className="text-stone-700 dark:text-[#e5e5e5] task-md" >Title</p>
                    <input
                        type='text'
                        name='title'
                        required
                        defaultValue={task?.title || '' }
                        className="h-10 w-full rounded-md px-2 task-md outline-none bg-white dark:bg-[#2b2b2b] dark:text-[#e5e5e5] border border-gray-300 
                        dark:border-[#3a3a3a]"
                    />
                </div>
                <div className="flex flex-col">
                    <p htmlFor="description" className="text-stone-700 dark:text-[#e5e5e5] task-md">Description</p>
                    <textarea
                        name="description"
                        required
                        defaultValue={task?.description || ''}
                        className="overflow-auto w-full outline-none text-md px-2 h-20 rounded-md bg-white dark:bg-[#2b2b2b] dark:text-[#e5e5e5] border border-gray-300 dark:border-[#3a3a3a]"
                    />
                </div>
                <div className="h-auto flex gap-4">
                    <p htmlFor="dueDate" className="flex justify-center items-center text-stone-700 dark:text-[#e5e5e5] task-md">Due Date :</p>
                    <input
                        type="date"
                        name="dueDate"
                        required
                        defaultValue={task?.dueDate || ''}
                        className="h-8 w-50 rounded-sm px-3 border border-gray-300 dark:border-[#3a3a3a] dark:text-[#e5e5e5] text-stone-700 task-md"
                    />
                </div>
                <div className="flex justify-around">
                    <div className="h-10 w-40 border border-gray-300 dark:border-[#3a3a3a] flex justify-center items-center rounded-md pr-2 dark:bg-[#2b2b2b] ">
                        <select 
                            name="priority" 
                            required 
                            defaultValue={task?.priority || "low" }
                            className="h-full w-full outline-none text-center text-stone-700 dark:text-[#e5e5e5] dark:bg-[#2b2b2b] task-md"
                        >
                            <option value='Low'>Low</option>
                            <option value='high'>High</option>
                            <option value='medium'>Medium</option>
                        </select>
                    </div>
                    <div className="h-10 w-40 border border-gray-300 dark:border-[#3a3a3a] flex justify-center items-center rounded-md dark:bg-[#2b2b2b] pr-2">
                        <select 
                            name="status" 
                            required 
                            defaultValue={task?.status || 'toDo'}
                            className="h-full w-full outline-none text-center text-stone-700 dark:text-[#e5e5e5] task-md dark:bg-[#2b2b2b]"
                        >
                            <option value='toDo'>To do</option>
                            <option value='InProgress'>In Progress</option>
                            <option value='Completed'>completed</option>
                        </select>
                    </div>
                </div>
                <div className="h-8 flex justify-center items-center ml-auto gap-5">
                    <button
                        onClick={HandleClose}
                        type="button"
                        className="text-stone-800 hover:text-shadow-md hover:text-stone-700 dark:text-[#a3a3a3] dark:hover:text-white"
                    >
                        Cancel
                    </button>
                    <button className="h-full w-35 bg-blue-500 dark:bg-blue-500 text-slate-100 rounded-md hover:bg-blue-600 dark:hover:bg-blue-400">Create Task</button>
                </div>
            </form>
        </>
    )
}