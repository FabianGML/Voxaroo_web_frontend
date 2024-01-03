import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../AppContext'

export default function HeaderButton ({ gray, text, nav }) {
  const { setIsMenuOpen } = useContext(AppContext)
  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  return (
    <NavLink to={`/${nav}`} className='w-28' onClick={closeMenu}>
      <li className={`rounded-full text-white py-2 w-28 text-center cursor-pointer ${gray ? 'bg-gray-400 hover:bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'}`}>
        {text}
      </li>
    </NavLink>
  )
}
