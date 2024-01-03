import Header from '../components/Header/Header'
import Main from '../components/Main'
import { useCheckActiveSession } from '../hooks/useCheckActiveSession'
import ProfileButton from '../components/Profile/ProfileButton'

import trash from '../assets/trash.png'
import Info from '../components/Profile/Info'
import Modal from '../modal/Modal'
import { useContext, useEffect, useState } from 'react'
import { useHandleRequest } from '../hooks/useHandleRequest'
import { AppContext } from '../AppContext'
import { formatEmail, formatName } from '../utils/formatName'
import Input from '../components/FormComponents/Input'
import axios from 'axios'
import SendInfoButton from '../components/FormComponents/SendInfoButton'
import { errorHandler } from '../utils/errorHandler'
import Message from '../components/FormComponents/Message'
import Label from '../components/FormComponents/Label'

export default function Profile () {
  const { URL } = useContext(AppContext)
  const [modal, setModal] = useState({
    state: false
  })
  const [infoState, setInfoState] = useState(false)
  const [response, setResponse] = useState({})
  useCheckActiveSession({ route: '/profile' })
  let { username, name, lastname, email, city, state /*, image */ } = useHandleRequest(`${URL}/users/profile`, response)

  // Formating data to make the first letter uppercase
  name = name !== undefined ? formatName(name) : ''
  lastname = lastname !== undefined ? formatName(lastname) : ''
  city = city !== undefined ? formatName(city) : ''
  state = state !== undefined ? formatName(state) : ''

  const formatedEmail = email !== undefined ? formatEmail(email) : ''

  const handleScrollToChangeSection = () => {
    window.location.hash = 'change'
    const element = document.getElementById('form')
    window.addEventListener('hashchange', handleScrollToChangeSection)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    const token = window.localStorage.getItem('token')
    axios.patch(`${URL}/users`, data, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        window.location.hash = ''
        setResponse(res.data.message)
        window.localStorage.setItem('response', res.data.message)
        window.localStorage.setItem('token', res.data.token)
        window.location.reload()
      })
      .catch(err => errorHandler(err, setResponse, null))
  }

  useEffect(() => {
    const storedResponse = window.localStorage.getItem('response')

    if (storedResponse) {
      // Show the message stored in localStorage and then remove it
      setResponse({ message: storedResponse })
      window.localStorage.removeItem('response')
    }
  }, [])

  return (
    <>
      <Header />
      <Main classes='p-4 flex-col gap-10 md2:pt-12'>
        <section className='flex flex-col items-center justify-center gap-16 md2:gap-24 xl:flex-row xl:gap-24'>
          {response.message && (
            <Message text={response.message} />
          )}
          <div className='flex items-center gap-10 xl:flex-col'>
            <div className='flex flex-col items-center gap-3'>
              <img src='https://picsum.photos/200' className='rounded-full max-w-[4.5rem] md2:max-w-[6rem] border' />
              <span className='text-gray-400 md2:text-xl'>{username}</span>
            </div>
            <div className='flex flex-col items-center'>
              <div>
                <span className='text-2xl mr-2 dark:text-white md2:text-3xl'>{name}</span>
                <span className='text-2xl dark:text-white md2:text-3xl'>{lastname}</span>
              </div>
              <p className='text-2xl dark:text-white'>estrellas </p>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <h3 className='text-xl dark:text-gray-200'>Información general de la cuenta</h3>
            <Info label='Correo:' info={formatedEmail} />
            <Info label='Ciudad:' info={city} />
            <Info label='Estado:' info={state} />
          </div>
        </section>
        <section className='md2:mt-20'>
          <div className='flex flex-col md2:flex-row md2:justify-center gap-7 items-center'>
            <ProfileButton text='Editar Información' required handleClick={() => setModal({ state: true, type: 'change', text: 'Coloca tu password para cambiar tu información' })} />
            <ProfileButton red text='Eliminar Cuenta' img={trash} handleClick={() => setModal({ state: true, type: 'delete', text: '¿Quieres eliminar tu cuenta? Esta acción no se puede deshacer.' })} />
          </div>
        </section>
        {infoState && (
          <section className='mx-auto'>
            <div className='p-7 mx-3 mb-10 bg-gray-700 rounded-lg max-w-[32rem]' id='form'>
              <h3 className='text-center text-xl dark:text-white mb-7'>Cambia Tu Información</h3>
              {response.error ? <Message text={response.error} error /> : null}
              <form className='space-y-5 mt-5' onSubmit={handleUpdate}>
                <div>
                  <Label htmlFor='name' text='Nombre' />
                  <Input placeholder='Nombre' name='name' type='text' defaultValue={name} autoFocus />
                </div>
                <div>
                  <Label htmlFor='lastname' text='Apellido' />
                  <Input placeholder='Apellido' name='lastname' type='text' defaultValue={lastname} />
                </div>
                <div>
                  <Label htmlFor='username' text='Nombre de Usuario' />
                  <Input placeholder='Nombre de usuario' name='username' type='text' defaultValue={username} />
                </div>
                <div>
                  <Label htmlFor='email' text='Correo' />
                  <Input placeholder='Correo' name='email' type='email' defaultValue={email} />
                </div>
                <SendInfoButton text='Actualizar Información' />
              </form>
            </div>
          </section>
        )}
        {modal.state && (
          <Modal
            text={modal.text}
            type={modal.type}
            setModal={setModal}
            setInfoState={setInfoState}
            handleScroll={handleScrollToChangeSection}
          />
        )}
      </Main>
    </>
  )
}
