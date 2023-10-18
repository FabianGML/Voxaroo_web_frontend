import Input from '../components/FormComponents/Input'
import SendInfoButton from '../components/FormComponents/SendInfoButton'
import logo from '../../public/voxaroo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Message from '../components/FormComponents/Message'
import { useActiveSession } from '../hooks/useActiveSession'
import LoadingSpinner from '../components/LoadingSpinner'
import handleSubmit from '../utils/handleSession'

export default function Login () {
  const [response, setResponse] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  // Checking if the user is already log into the system, we redirect it to the home page
  useActiveSession({ route: '/' })
  return (
    <section className='bg-green-200 w-screen h-screen flex justify-center items-center'>
      <div className='w-3/4 h-3/4 bg-white shadow-2xl rounded-2xl max-w-lg'>
        <Link to='/'>
          <img src={logo} className='w-24 mx-auto' />
        </Link>
        <form onSubmit={(e) => handleSubmit(setResponse, setIsLoading, navigate, e, 'http://localhost:3000/auth/login')} className='flex flex-col items-center gap-10'>
          {response.error ? (<Message text={response.error} error />) : null}
          <Input name='email' placeholder='Correo Electronico' type='email' />
          <Input name='password' placeholder='Contraseña' type='password' />
          {isLoading && <LoadingSpinner />}
          {!isLoading && <SendInfoButton text='Iniciar sesión' />}
          <Link
            to='/registro'
            className='underline underline-offset-2 text-slate-600 hover:text-black'
          >Registrarse
          </Link>
        </form>
      </div>
    </section>
  )
}
