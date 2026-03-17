export default function ProjectForm({ HandleSubmit }){
    return(
        <>
            <p className="h-10 w-full flex justify-center items-center text-lg font-semibold text-stone-700 rounded-lg mb-5 mt-5">Create New Project</p>
            <form 
                onSubmit={HandleSubmit}
                className="h-full w-full flex flex-col gap-5"
            >
                <div className="flex flex-col">
                    <p htmlFor="title" className="text-stone-700">Title</p>
                    <input
                        type='text'
                        name='title'
                        required
                        className="bg-slate-100 h-10 w-full rounded-md px-2 outline-none border-1 border-gray-300 "
                    />
                </div>
                <div className="flex flex-col">
                    <p htmlFor="description" className="text-stone-700">Description</p>
                    <textarea
                        name="description"
                        required
                        className="bg-slate-100 overflow-auto w-full outline-none text-md px-2 h-20 rounded-md border-1 border-gray-300"
                    />
                </div>
                <div className="h-8 w-40 flex justify-center items-center bg-blue-600 ml-auto rounded-md">
                    <button className="h-full w-full text-slate-200">Create Project</button>
                </div>
            </form>
        </>
    )
}