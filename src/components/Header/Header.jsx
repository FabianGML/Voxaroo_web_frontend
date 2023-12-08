import searchIcon from '../../assets/search.png'
import bars from '../../assets/bars.png'
import cart from '../../assets/shopping-store.png'
import arrow from '../../assets/arrow.png'
import { useContext, useEffect, useState } from 'react'
import HeaderButton from './HeaderButton'
import HeaderLink from './HeaderLink'
import { AppContext } from '../../AppContext'
import ProfileImage from '../ProfileImage'
import defaultImage from '../../assets/user-images/default.jpg'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Header () {
  const { isSessionActive, URL, isMenuOpen, setIsMenuOpen, closeMenu } = useContext(AppContext)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [profileData, setProfileData] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    if (isSessionActive) {
      const token = window.localStorage.getItem('token')
      axios.get(`${URL}/users`, { headers: { Authorization: `Bearer ${token}` } })
        .then(result => setProfileData(result.data))
        .catch(error => console.log(error))
    }
  }, [isSessionActive])

  const openMenu = () => {
    setIsMenuOpen(true)
  }

  const handleLogout = () => {
    navigate('/')
    window.localStorage.clear()
    window.location.reload()
  }

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(value => !value)
  }

  return (
    <header className='flex flex-row gap-3
     items-center  bg-green-300 h-14 w-full
     px-4 py-2 fixed shadow-md top-0 z-10
     '
    >
      <img src={bars} onClick={openMenu} className='h-6' />
      <div
        className='flex flex-row gap-4 h-full w-full border border-gray-400 rounded bg-white shadow px-3'
        onClick={closeMenu}
      >
        <img className='object-contain w-4' src={searchIcon} />
        <input type='text' className=' w-full outline-none bg-transparent' placeholder='Buscar Producto' />
      </div>
      <nav className={`fixed 
          h-full w-1/2 top-0 left-0 bg-green-200 shadow-lg 
          transition-transform duration-300 ease-out transform z-10
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <ul className='h-3/4 flex flex-col justify-center items-left gap-3 ml-3'>
          {!isSessionActive && (
            <>
              <HeaderButton text='Iniciar Sesion' nav='login' />
              <HeaderButton gray text='Registrarse' nav='signup' />
            </>
          )}
          {isSessionActive && (
            <div className='flex items-center gap-5' onClick={toggleProfileMenu}>
              <ProfileImage image={defaultImage} username={profileData.username} />
              <img src={arrow} className='h-3 alig' />
            </div>
          )}
          {isProfileMenuOpen && (
            <div className='w-full bg-green-100 text-start shadow-2xl ml-auto'>
              <ul className='flex flex-col gap-2 ml-3'>
                <HeaderLink link='/profile' text='Perfil' small />
                <HeaderLink link='/compras' text='Compras' small />
                {profileData.isSeller && (
                  <>
                    <HeaderLink link='/sales' text='Ventas' small />
                    <HeaderLink link='/sales' text='Gestionar Productos' small />
                  </>
                )}
                {(profileData.isAdmin || profileData.isSuperAdmin) && (
                  <HeaderLink link='/categories' text='Admin. Categorias' small />
                )}
                {profileData.isSuperAdmin && (
                  <HeaderLink link='/admins' text='Gestionar admins' small />
                )}
                <li onClick={handleLogout} className='underline underline-offset-2 inline-block text-sm cursor-pointer'>Cerrar Sesión</li>
              </ul>
            </div>
          )}
          <HeaderLink link='/' text='Inicio' />
          <HeaderLink link='/productos' text='Productos' />
          <HeaderLink link='/about' text='Sobre nosotros' />
          <img src={cart} className='w-8 cursor-pointer' />
        </ul>
      </nav>
    </header>
  )
}
