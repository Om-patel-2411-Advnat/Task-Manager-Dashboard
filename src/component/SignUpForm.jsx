import { Link } from "react-router-dom";

export default function SignUpForm({ HandleSignUp, error }) {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-slate-100">
            <form
                onSubmit={HandleSignUp}
                className="h-auto w-100 bg-white border-1 border-slate-200 rounded-2xl flex flex-col py-2 px-3 justify-center gap-2 shadow-lg"
            >
                <h1 className="flex justify-center items-center text-lg font-bold text-shadow-lg text-stone-700">Sign Up</h1>
                <label htmlFor="email" className="text-slate-700 mt-2 ml-2">Email</label>
                <input type="text" name="email" className="bg-slate-200 h-10 w-full rounded-lg outline-none text-lg px-2" required />
                <label htmlFor="password" className="text-slate-700 ml-2">Password</label>
                <input type="password" name="password" className="bg-slate-200 h-10 w-full rounded-lg outline-none text-lg px-2" required />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div className="flex ml-auto mt-3 gap-5">
                    <Link to="/login" className="text-blue-500 hover:text-blue-400">Login</Link>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white h-8 w-20 rounded-lg">Sign Up</button>
                </div>
            </form>
        </div>
    )
}