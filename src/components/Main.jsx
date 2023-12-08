import { useContext } from 'react'
import { AppContext } from '../AppContext'

export default function Main ({ children }) {
  const { closeMenu } = useContext(AppContext)

  return (
    <main
      onClick={closeMenu}
      className='mt-14 h-screen'
    >
      {children}
    </main>
  )
}
