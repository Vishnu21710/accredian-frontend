import { useContext} from "react"
import { ReferalModalContext } from "../contexts/referal-modal-context"


export const useReferalModal = ()=>{
    const {isOpen, onClose, onOpen} = useContext(ReferalModalContext)

    return {
        isOpen,
        onClose,
        onOpen
    }
    
}