import { useContext, useEffect } from 'react'
import { AppContext } from '../AppContext'
import { useNavigate } from 'react-router-dom'

/**
 * This hook is used to check if the user has an active session
 * @param {string} route - The route to navigate if the user has an active session
 * @returns {void}
 */
export function useActiveSession ({ route }) {
  const { isSessionActive, setIsSessionActive } = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isSessionActive) {
      const token = window.localStorage.getItem('token')
      const id = window.localStorage.getItem('id')
      if (token && id) setIsSessionActive(true)
    } else navigate(route)
  }, [])
}
