import Form from '../components/FormComponents/Form'
import Input from '../components/FormComponents/Input'
import { useCheckActiveSession } from '../hooks/useCheckActiveSession'

export default function Register () {
  useCheckActiveSession({ route: '/' })

  return (
    <Form linkText='O Inicia Sesión' linkRef='login' sendButtonText='Registarse' submitUrl='http://localhost:3000/users'>
      <Input name='email' placeholder='Correo Electronico' type='email' required autoFocus />
      <Input name='username' placeholder='Nombre de Usuario' type='text' required />
      <Input name='name' placeholder='Nombre' type='text' required />
      <Input name='lastname' placeholder='Apllido' type='text' required />
      <Input name='password' placeholder='Contraseña' type='password' required />
      <Input name='repeatPassword' placeholder='Repite la Contraseña' type='password' required />
    </Form>
  )
}
