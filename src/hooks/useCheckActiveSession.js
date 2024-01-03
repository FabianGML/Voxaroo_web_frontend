import { useContext, useEffect } from 'react'
import { AppContext } from '../AppContext'
import { useLocation, useNavigate } from 'react-router-dom'

/**
 * This hook is used to check if the user has an active session
 * if it does not have an active session it will redirect to the login page
 * @param {string} route - The route to navigate if the user has an active session
 * @returns {void}
 */
export function useCheckActiveSession ({ route }) {
  const { isSessionActive, setIsSessionActive } = useContext(AppContext)
  const navigate = useNavigate()
  const location = useLocation()

  // Routes that require an active session to be accessed
  const protectedRoutes = ['/profile']

  useEffect(() => {
    if (!isSessionActive) {
      const token = window.localStorage.getItem('token')
      const id = window.localStorage.getItem('id')
      if (token && id) setIsSessionActive(true)
      else {
        if (protectedRoutes.includes(location.pathname)) navigate('/login')
      }
    } else navigate(route)
  }, [])
}
