export default function ProjectForm({ HandleSubmit, HandleClose, project }){



    return(
        <>
            <p className="h-10 w-full flex justify-center items-center text-xl font-semibold text-stone-700 rounded-lg mb-5 mt-5 text-shadow-md">Create New Project</p>
            <form 
                onSubmit={HandleSubmit}
                className="h-full w-full flex flex-col gap-5"
            >
                <div className="flex flex-col">
                    <p htmlFor="title" className="text-stone-700 text-md">Title</p>
                    <input
                        type='text'
                        name='title'
                        required
                        defaultValue={project?.project_name || ''}
                        className="h-10 w-full rounded-md px-2 outline-none border-1 border-gray-300 "
                    />
                </div>
                <div className="flex flex-col">
                    <p htmlFor="description" className="text-stone-700 text-md">Description</p>
                    <textarea
                        name="description"
                        required
                        defaultValue={project?.description || ''}
                        className="overflow-auto w-full outline-none text-md px-2 h-20 rounded-md border-1 border-gray-300"
                    />
                </div>
                <div className="h-8 flex justify-center items-center ml-auto gap-5">
                    <button 
                        onClick={HandleClose}
                        type="button" 
                        className="text-stone-800 hover:text-shadow-md hover:text-stone-700" 
                    >
                        Cancel
                    </button>
                    <button className="h-full w-35 bg-blue-500 text-slate-100 rounded-md hover:bg-blue-600">Create Project</button>
                </div>
            </form>
        </>
    )
}