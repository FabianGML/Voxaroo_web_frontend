import { createContext, useState } from 'react'

export const AppContext = createContext()

export default function AppProvider ({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [isSessionActive, setIsSessionActive] = useState(false)
  const [profileData, setProfileData] = useState({})

  const closeMenuAndProfile = () => {
    setIsMenuOpen(false)
    setIsProfileMenuOpen(false)
  }

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(value => !value)
  }

  const URL = 'http://localhost:3000'

  return (
    <AppContext.Provider value={{
      isMenuOpen,
      setIsMenuOpen,
      isProfileMenuOpen,
      setIsProfileMenuOpen,
      isSessionActive,
      setIsSessionActive,
      profileData,
      setProfileData,
      closeMenuAndProfile,
      toggleProfileMenu,
      URL
    }}
    >
      {children}
    </AppContext.Provider>
  )
}
