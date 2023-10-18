import Input from '../components/FormComponents/Input'
import SendInfoButton from '../components/FormComponents/SendInfoButton'
import logo from '../../public/voxaroo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Message from '../components/FormComponents/Message'
import { useActiveSession } from '../hooks/useActiveSession'
import LoadingSpinner from '../components/LoadingSpinner'
import handleSubmit from '../utils/handleSession'

export default function Register () {
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState({})
  const navigate = useNavigate()
  useActiveSession({ route: '/' })

  return (
    <section className='bg-green-200 w-screen h-screen flex justify-center items-center'>
      <div className='w-3/4 h-auto py-4 bg-white shadow-2xl rounded-2xl max-w-lg'>
        <Link to='/'>
          <img src={logo} className='w-20 mx-auto' />
        </Link>
        <form
          onSubmit={(e) =>
            handleSubmit(setResponse, setIsLoading, navigate, e, 'http://localhost:3000/users')}
          className='flex flex-col items-center gap-3'
        >
          {response.error ? (<Message text={response.error} error />) : null}
          <Input name='email' placeholder='Correo Electronico' type='email' small />
          <Input name='username' placeholder='Username' type='text' small />
          <Input name='name' placeholder='Nombre' type='text' small />
          <Input name='lastname' placeholder='Apllido' type='text' small />
          <Input name='password' placeholder='Contraseña' type='password' small />
          <div className='flex gap-3'>
            <label>Vendedor</label>
            <input value type='checkbox' name='isSeller' />
          </div>

          {isLoading && <LoadingSpinner />}
          {!isLoading && <SendInfoButton text='Registrarse' />}
          <Link
            to='/login'
            className='underline underline-offset-2 text-slate-600 hover:text-black'
          >O Inicia Sesión
          </Link>
        </form>
      </div>
    </section>
  )
}
