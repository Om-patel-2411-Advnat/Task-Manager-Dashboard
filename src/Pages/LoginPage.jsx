import LoginForm from "../component/LoginForm";

export default function LoginPage(){

    function HandleSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.target) 
        const data = Object.fromEntries(formData);

        console.log(data);
    }

    return(
        <LoginForm HandleSubmit={HandleSubmit}/>
    )
}