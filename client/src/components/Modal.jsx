import React, { useEffect } from 'react'
import { useAlertContext } from '../context/alertContext'

const Modal = () => {

    const { isOpen, type, message, onClose } = useAlertContext()


    useEffect(()=>{
        const modal = document.getElementById('modal')
        modal.removeAttribute('open')
        const handleModal = () => {
            if(isOpen){
                modal.showModal()
            }
        }
        const closeModal = () => {
            modal.close()
            onClose()
        }

        handleModal()
        document.addEventListener('mousedown', closeModal)

        return () => {
            document.removeEventListener('mousedown', closeModal)
        }

    }, [isOpen]) 

  return (
    <dialog
        className='modal' 
        id='modal'
    >
        <h3 className='ff-secondary fw-regular text-dark fs-xl'>{type}</h3>
        <p className='ff-primary fw-regular fs-l text-dark'>{message}</p>
    </dialog>
  )
}

export default Modal