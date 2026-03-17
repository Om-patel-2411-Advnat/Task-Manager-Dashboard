import { createPortal } from "react-dom"

export default function Modal({children}){
    return createPortal(
        <dialog open className="h-full w-full flex justify-center items-center bg-black/50">
            {children}
        </dialog>
    ,document.getElementById('modal-root')
    )
}