import { useEffect, useState } from 'react'
import moon from '../../assets/moon.png'
import sun from '../../assets/sun.png'

export default function ToggleDarkButton () {
  const [isDarkMode, setIsDarkMode] = useState(false)

  /*
    Every time the isDarkMode state changes, this useEffect will be executed
    and will add or remove the 'dark' class to the html tag.
  */
  useEffect(() => {
    const isDarkModeLocalStorage = window.localStorage.getItem('isDarkMode')
    const isDarkModeSet = isDarkModeLocalStorage === 'true'
    if (isDarkModeSet) {
      setIsDarkMode(JSON.parse(isDarkModeSet))
      document.getElementsByTagName('html')[0].classList.add('dark')
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark')
    }
  }, [isDarkMode])

  /*
    This function will be executed every time the user clicks on the toggle button
    and will change the isDarkMode state.
  */
  const toggleDarkMode = () => {
    setIsDarkMode(value => !value)
    window.localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode))
  }

  return (
    <label htmlFor='darkModeToggle' className='cursor-pointer ml-3 flex'>
      <span
        className={`relative inline-block min-w-[4rem] 
        h-8 rounded-full bg-gray-200 transition-all 
        duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
        onClick={toggleDarkMode}
      >
        <span className={`absolute top-1 right-7 inline-block w-6 h-6 transform -translate-x-1/2 rounded-full transition-transform duration-300 ${isDarkMode ? 'translate-x-full bg-white' : '-translate-x-2 bg-gray-700'}`} />
      </span>
      <input
        type='checkbox'
        id='darkModeToggle'
        className='sr-only'
      />
      {isDarkMode && <img src={moon} className='w-6 h-6 ml-2' />}
      {!isDarkMode && <img src={sun} className='w-6 h-6 ml-2' />}
    </label>
  )
}
