import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { AppContext } from '../AppContext'

export function useHandleRequest (path, updater) {
  const { isSessionActive } = useContext(AppContext)
  const [pageInformation, setPageInformation] = useState({})
  useEffect(() => {
    if (!isSessionActive) return
    const token = window.localStorage.getItem('token')
    axios.get(path, { headers: { Authorization: `Bearer ${token}` } })
      .then(response => setPageInformation(response.data))
      .catch()
  }, [isSessionActive, updater])

  return pageInformation
}
