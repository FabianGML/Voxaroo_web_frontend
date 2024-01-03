import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../AppContext'
import logOutImg from '../../assets/logout.png'

export default function HeaderProfileLink ({ link, text, logout }) {
  const { setIsSessionActive, closeMenuAndProfile } = useContext(AppContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
    window.localStorage.removeItem('id')
    window.localStorage.removeItem('token')
    window.location.reload()
    setIsSessionActive(false)
  }
  return (
    <Link to={link} className='flex gap-3 hover:bg-green-300 dark:hover:bg-green-800 pl-3 py-2 w-full md2:hover:bg-gray-300 md2:rounded-full' onClick={logout ? handleLogout : closeMenuAndProfile}>
      {logout && <img src={logOutImg} className='w-7 dark:filter dark:invert' />}
      <li className='inline-block text-sm dark:text-white md2:text-lg'>{text}</li>
    </Link>
  )
}
