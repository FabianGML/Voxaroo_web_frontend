import { useContext } from 'react'
import Header from '../components/Header/Header'
import { AppContext } from '../AppContext'
import HeroButton from '../components/HomeComponents/HeroButton'
import defaultImg from '../assets/user-images/default.jpg'
import { useActiveSession } from '../hooks/useActiveSession'
import Product from '../components/Product'
import Category from '../components/Category'
import Main from '../components/Main'
export default function Home () {
  const { isMenuOpen, isSessionActive, closeMenu } = useContext(AppContext)
  useActiveSession({ route: '/' })
  return (
    <>
      {isMenuOpen && <div
        className={`
        fixed w-full h-full top-0 left-0
      bg-black bg-opacity-50
        transition-transform duration-300 ease-out transform z-10
        ${isMenuOpen ? '' : 'hidden'}
      `}
        onClick={closeMenu}
                     />}
      <Header />
      <Main>
        <section>
          <div className='flex flex-col gap-12 items-center h-1/2 bg-green-300 px-10 py-5'>
            <p className='mb-6 text-2xl font-extrabold'>
              Conecta con gente de tu localidad para vender y comprar artículos
              de tu interés, tu <strong className='text-gray-100'>marketplace</strong> en un solo lugar
            </p>
            <div className='flex flex-col gap-5'>
              <HeroButton link='/productos' text='Explorar productos' bg />
              {isSessionActive ? null : <HeroButton link='/signup' text='Empezar a vender' />}
            </div>
          </div>
        </section>
        {/* <section className='px-5'>
          <h3 className='text-center text-7xl mb-4'>
            ¿Por que Voxaroo?
          </h3>
          <p className='text-2xl text-justify'>
            Voxaroo es un lugar donde puedes encontrar productos de tu interés
            con personas de tu localidad, todo un marketplace en un solo lugar,
            con diferentes categorías para que puedas encontrar lo que buscas
          </p>
        </section> */}
        <section>
          <Product image={defaultImg} name='Learning new things, exploring the unknown, and' price='220' seller='Fabian Gutierrez' />
          <div className='flex gap-4 mx-2'>
            <Category img={defaultImg} name='Cocina' />
            <Category img={defaultImg} name='Cocina' />
            <Category img={defaultImg} name='Cocina' />
          </div>
        </section>
      </Main>
    </>
  )
}
