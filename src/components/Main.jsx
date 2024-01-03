import { useContext } from 'react'
import { AppContext } from '../AppContext'

export default function Main ({ children, classes }) {
  const { closeMenuAndProfile } = useContext(AppContext)

  return (
    <main
      onClick={closeMenuAndProfile}
      className={`mt-14 md2:mt-20 2xl:mt-24 h-screen flex ${classes}`}
    >
      {children}
    </main>
  )
}
