import { useContext, useState } from 'react'
import Header from '../components/Header/Header'
import { AppContext } from '../AppContext'
import HeroButton from '../components/HomeComponents/HeroButton'
// import product from '../assets/product.png'
import { useActiveSession } from '../hooks/useActiveSession'
export default function Home () {
  const { isSessionActive } = useContext(AppContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useActiveSession({ route: '/' })
  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  return (
    <>
      <Header closeMenu={closeMenu} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main onClick={closeMenu} className='mt-14'>
        <section
          className={`${isMenuOpen ? 'bg-black opacity-75' : 'bg-slate-100'} h-screen`}
        >
          <div className='flex flex-col items-center h-1/2 gap-5 bg-green-300 px-10 py-5'>
            <p className='mb-6 text-3xl font-extrabold'>
              Conecta con gente de tu localidad para vender y comprar artículos
              de tu interés, tu <strong className='text-gray-100'>marketplace</strong> en un solo lugar
            </p>
            <div className='flex gap-5'>
              <HeroButton link='/productos' text='Explorar productos' bg />
              {isSessionActive ? null : <HeroButton link='/signup' text='Empezar a vender' />}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
