import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../AppContext'

export default function HeaderLink ({ link, text }) {
  const { closeMenuAndProfile } = useContext(AppContext)
  return (
    <Link
      to={link} onClick={closeMenuAndProfile} className='
        md2:flex md2:items-center md2:justify-center md2:text-center
      lg:hover:bg-gray-500 lg:w-32 lg:rounded-lg lg:hover:text-white'
    >
      <li className='dark:text-white underline underline-offset-2 inline-block text-lg font-extrabold'>{text}</li>
    </Link>
  )
}
