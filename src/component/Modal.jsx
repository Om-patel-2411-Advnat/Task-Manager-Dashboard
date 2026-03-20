import { createPortal } from "react-dom"
import { useNavigate } from "react-router-dom"

export default function Modal({children , path}){

    const navigate = useNavigate();

    function HandleOutsideClick(event){
        if(event.target.tagName === "DIALOG"){
            if(path === 'task'){
                navigate('..');
            }else{
                navigate('/');
            }
        }
    }

    return createPortal(
        <dialog 
            open 
            onClick={HandleOutsideClick}
            className="h-full w-full flex justify-center items-center bg-black/50 z-500"
        >
            {children}
        </dialog>
    ,document.getElementById('modal-root')
    )
}