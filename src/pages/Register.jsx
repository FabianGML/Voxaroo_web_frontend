import Form from '../components/FormComponents/Form'
import Input from '../components/FormComponents/Input'
import { useActiveSession } from '../hooks/useActiveSession'

export default function Register () {
  useActiveSession({ route: '/' })

  return (
    <Form linkText='O Inicia Sesión' linkRef='login' sendButtonText='Registarse' submitUrl='http://localhost:3000/users'>
      <Input name='email' placeholder='Correo Electronico' type='email' required />
      <Input name='username' placeholder='Nombre de Usuario' type='text' required />
      <Input name='name' placeholder='Nombre' type='text' required />
      <Input name='lastname' placeholder='Apllido' type='text' required />
      <Input name='password' placeholder='Contraseña' type='password' required />
      <Input name='repeatPassword' placeholder='Repite la Contraseña' type='password' required />
      <div className='flex gap-3'>
        <label>Vendedor</label>
        <input value type='checkbox' name='isSeller' />
      </div>
    </Form>
  )
}
