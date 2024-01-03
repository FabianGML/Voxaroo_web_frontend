import searchIcon from '../../assets/search.png'
import bars from '../../assets/bars.png'
import { useContext, useEffect } from 'react'
import HeaderButton from './HeaderButton'
import HeaderLink from './HeaderLink'
import { AppContext } from '../../AppContext'
import ProfileImage from './ProfileImage'
import defaultImage from '../../assets/user-images/default.jpg'
import icon from '../../../public/voxaroo.png'

import HeaderProfileLink from './HeaderProfileLink'
import ToggleDarkButton from './ToggleDarkButton'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Header () {
  const { isSessionActive, isMenuOpen, isProfileMenuOpen, setIsMenuOpen, closeMenu, profileData, setProfileData, URL } = useContext(AppContext)

  useEffect(() => {
    /*
      if the session is not active, the profileData alreaedy has data
    */
    if (!isSessionActive) return
    if (Object.keys(profileData).length > 0) return
    // if (profileData.length) return
    const token = window.localStorage.getItem('token')
    axios.get(`${URL}/users`, { headers: { Authorization: `Bearer ${token}` } })
      .then(result => setProfileData(result.data))
      .catch(error => console.log(error))
  }, [isSessionActive])

  const openMenu = () => {
    setIsMenuOpen(true)
  }

  return (
    <header className='flex flex-row gap-3
     items-center  bg-green-300 dark:bg-green-800 h-14 w-full
     pr-4 md2:pl-4 md2:pr-9 py-2 fixed shadow-md top-0 z-10
     md2:h-20 md2:py-5 md2:gap-5 lg:pr-20 2xl:h-24
     '
    >
      <Link to='/'>
        <img src={icon} className='hidden w-10 md2:w-14 xl:inline-block' />
      </Link>
      <img src={bars} onClick={openMenu} className='h-6  md2:hidden' />
      <div
        className='flex flex-row gap-4 h-full
        w-full border border-gray-400 rounded
        bg-white shadow px-3
        md2:w-1/3'
        onClick={closeMenu}
      >
        <img className='object-contain w-4' src={searchIcon} />
        <input type='text' className=' w-full outline-none bg-transparent' placeholder='Buscar Producto' />
      </div>
      <nav className={`bg-green-200 dark:bg-green-800 shadow-lg
          fixed  h-full w-1/2 top-0 left-0 transition-transform 
          duration-300 ease-out z-10
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md2:relative md2:translate-x-0 md2:bg-transparent md2:shadow-none
          md2:flex md2:flex-2 md2:w-3/4 
          `}
      >
        <ul className='h-3/4 flex flex-col justify-center
        items-left gap-3
        md2:flex-row-reverse md2:h-full md2:items-center
        md2:w-full md2:justify-around'
        >
          {!isSessionActive && (
            <div className='flex flex-col gap-3 md2:flex-row ml-3'>
              <HeaderButton text='Iniciar Sesion' nav='login' />
              <HeaderButton gray text='Registrarse' nav='signup' />
            </div>
          )}
          {isSessionActive && (
            <ProfileImage image={defaultImage} username={profileData.username} />
          )}
          <div className={`w-full bg-green-100 dark:bg-green-600 text-start
            shadow-2xl transition-all duration-300 
            ${isProfileMenuOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}
            md2:flex md2:absolute md2:-right-9 md2:top-14 2xl:top-20 md2:w-1/2
            md2:bg-gray-200 md2:rounded-b-lg md2:justify-center
            md2:shadow-lg md2:py-3 xl:w-1/4`}
          >
            <ul className='flex flex-col md2:items-center md2:text-center md2:w-full'>
              <HeaderProfileLink link='/profile' text='Perfil' hoverbg='bg-gray-500' />
              <HeaderProfileLink link='/compras' text='Compras' />
              <HeaderProfileLink link='/sales' text='Ventas' />
              <HeaderProfileLink link='/sales' text='Gestionar Productos' />
              {(profileData.isAdmin || profileData.isSuperAdmin) && (
                <HeaderProfileLink link='/categories' text='Admin. Categorias' />
              )}
              {profileData.isSuperAdmin && (
                <HeaderProfileLink link='/admins' text='Gestionar admins' />
              )}
              <HeaderProfileLink text='Cerrar Sesion' logout />
            </ul>
          </div>
          <div className='flex flex-col gap-5 ml-3 md2:flex-row lg:ml-10 lg:gap-0 xl:gap-3 xl:justify-end'>
            <HeaderLink link='/' text='Inicio' />
            <HeaderLink link='/favoritos' text='Favoritos' />
            <HeaderLink link='/about' text='Sobre nosotros' />
          </div>
          <ToggleDarkButton />
        </ul>
      </nav>
    </header>
  )
}
