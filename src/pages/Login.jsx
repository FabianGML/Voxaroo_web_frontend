import Input from '../components/FormComponents/Input'
import { useActiveSession } from '../hooks/useActiveSession'
import Form from '../components/FormComponents/Form'

export default function Login () {
  // Checking if the user is already log into the system, we redirect it to the home page
  useActiveSession({ route: '/' })
  return (
    <Form linkText='O Registrarse' linkRef='signup' sendButtonText='Iniciar Sesión' submitUrl='http://localhost:3000/auth/login'>
      <Input name='email' placeholder='Correo Electronico' type='email' />
      <Input name='password' placeholder='Contraseña' type='password' />
    </Form>
  )
}
