import { createContext, useState } from 'react'

export const AppContext = createContext()

export default function AppProvider ({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSessionActive, setIsSessionActive] = useState(false)

  const URL = 'http://localhost:3000'

  return (
    <AppContext.Provider value={{
      isMenuOpen,
      setIsMenuOpen,
      isSessionActive,
      setIsSessionActive,
      URL
    }}
    >
      {children}
    </AppContext.Provider>
  )
}
