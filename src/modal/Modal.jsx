import { createPortal } from 'react-dom'
import { useContext, useState } from 'react'
import { AppContext } from '../AppContext'
import close from '../assets/x.png'
import axios from 'axios'
import Input from '../components/FormComponents/Input'
import LoadingSpinner from '../components/LoadingSpinner'
import Message from '../components/FormComponents/Message'
import { errorHandler } from '../utils/errorHandler'

export default function Modal ({ text, type, setModal, setInfoState, handleScroll }) {
  const { URL } = useContext(AppContext)
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState({})

  const closeModal = () => {
    setModal(false)
  }

  const handleSubmit = (e) => {
    if (type === 'confirmDelete') handleDelete()
    e.preventDefault()
    setIsLoading(true)
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    const token = window.localStorage.getItem('token')
    axios.post(`${URL}/users/check-password`, data, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        /*
          If the API returns a message, it means that the password is correct
          and the user can change their information
        */
        if (res.data.message) {
          setModal(false)
          setInfoState(true)
          handleScroll()
        }
        setResponse(res.data)
        setIsLoading(false)
      })
      .catch((error) => {
        errorHandler(error, setResponse, setIsLoading)
      })
  }

  const handleDelete = () => {
    axios.delete(`${URL}/users`, { headers: { Authorization: `Bearer ${window.localStorage.getItem('token')}` } })
    // Probably should redirect to a goodbye page
  }

  return createPortal(
    <div className='modal-container'>
      <div className='form-container relative flex flex-col gap-3 max-w-[25rem]'>
        <h3 className='text-md md2:text-2xl'>{text}</h3>
        {type !== 'delete' && (
          <>
            <img src={close} className='h-3 right-3 top-3 absolute' onClick={closeModal} />
            {response.error ? (<Message text={response.error} error />) : null}
            <form className='flex flex-col items-center gap-3' onSubmit={handleSubmit}>
              <Input name='password' placeholder='Contraseña:' type='password' required small={window.screenX >= 900} autoFocus />
              {!isLoading && <input type='submit' value='Enviar' className='bg-green-300 dark:bg-green-800 dark:text-white rounded-md py-2 px-4 max-w-[6rem]' />}
              {isLoading && <LoadingSpinner />}
            </form>
          </>
        )}
        {type === 'delete' && (
          <div className='flex w-full justify-center gap-10'>
            <button className='bg-red-600 dark:bg-red-800 text-white rounded-md py-3 px-4' onClick={() => setModal({ state: true, type: 'confirmDelete', text: 'Coloca tu contraseña para eliminar tu cuenta' })}>Eliminar</button>
            <button className='bg-green-300 dark:bg-green-800 dark:text-white rounded-md py-3 px-4' onClick={() => setModal({ state: false })}>Cancelar</button>
          </div>
        )}
      </div>
    </div>,
    document.getElementById('modal')
  )
}
