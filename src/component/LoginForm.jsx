export default function LoginForm({HandleSubmit}){
    return(
        <div className="flex justify-center items-center h-screen bg-slate-100">
            <form
                onSubmit={HandleSubmit}
                className="h-60 w-100 bg-white border-1 border-slate-200 rounded-2xl flex flex-col py-2 px-3 justify-center gap-2 shadow-lg"
            >
                <label htmlFor="email" className="text-slate-700 mt-2">Email</label>
                <input type="text" name="email" className="bg-slate-200 h-10 w-full rounded-lg outline-none text-lg px-2" required/>
                <label htmlFor="password" className="text-slate-700">Password</label>
                <input type="password" name="password" className="bg-slate-200 h-10 w-full rounded-lg outline-none text-lg px-2" required/>
                <div className="flex m-auto">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white h-8 w-20 rounded-lg">Login</button>
                </div>
            </form>
        </div>
    )
}