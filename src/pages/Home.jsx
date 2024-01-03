import { useContext } from 'react'
import Header from '../components/Header/Header'
import { AppContext } from '../AppContext'
// import HeroButton from '../components/HomeComponents/HeroButton'
import defaultImg from '../assets/user-images/default.jpg'
import { useCheckActiveSession } from '../hooks/useCheckActiveSession'
import Product from '../components/Product'
import Main from '../components/Main'
import Category from '../components/Category'

export default function Home () {
  const { isMenuOpen, closeMenuAndProfile } = useContext(AppContext)
  useCheckActiveSession({ route: '/' })
  return (
    <>
      {isMenuOpen && <div
        className={`
        fixed w-full h-full top-0 left-0
      bg-black bg-opacity-50
        transition-transform duration-300 ease-out transform z-10
        ${isMenuOpen ? '' : 'hidden'}
      `}
        onClick={closeMenuAndProfile}
                     />}
      <Header />
      <Main classes='flex-col items-center'>
        {/* <section className='flex flex-col
        gap-3 items-center h-1/2
        bg-green-300 px-10 py-5  md2:h-1/3 md2:flex-row
        xl:gap-32
        '
        >
          <p className='mb-6 text-2xl font-extrabold flex-1 md2:px-16 md2:text-4xl'>
            🌐 Conecta con gente de tu localidad para vender y
            comprar artículos de tu interés. Tu <strong className='text-white'>marketplace </strong>
            en un solo lugar. 🛍️✨
          </p>
          <div className='flex flex-col gap-5 xl:mr-32'>
            <HeroButton link='/productos' text='Explorar productos' bg />
            {isSessionActive ? null : <HeroButton link='/signup' text='Empezar a vender' />}
          </div>
        </section> */}
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
        <section className=' md2:pl-0'>
          <div className='categories_container flex gap-7 overflow-x-scroll max-w-[20rem] pt-2
          md2:max-w-2xl md2:gap-10 xl:'
          >
            <Category img={defaultImg} name='Casa' />
            <Category img={defaultImg} name='Flores' />
            <Category img={defaultImg} name='Cocina' />
            <Category img={defaultImg} name='Comida' />
            <Category img={defaultImg} name='Muebles' />
            <Category img={defaultImg} name='Cocina' />
            <Category img={defaultImg} name='Cocina' />
            <Category img={defaultImg} name='Cocina' />
            <Category img={defaultImg} name='Cocina' />
            <Category img={defaultImg} name='Cocina' />
            <Category img={defaultImg} name='Cocina' />
            <Category img={defaultImg} name='Cocina' />
            <Category img={defaultImg} name='Cocina' />
            <Category img={defaultImg} name='Cocina' />
            <Category img={defaultImg} name='Cocina' />
            <Category img={defaultImg} name='Cocina' />
            <Category img={defaultImg} name='Cocina' />
            <Category img={defaultImg} name='Cocina' />
          </div>
        </section>
        <section>
          <div className='products_container'>
            <Product image={defaultImg} name='Learning new things  exploring the unknown  and' location='Durango, Dgo' price='220' />
            <Product image={defaultImg} name='Learning new things  exploring the unknown  and' location='Durango, Dgo' price='220' />
            <Product image={defaultImg} name='Learning new things  exploring the unknown  and' location='Durango, Dgo' price='220' />
            <Product image={defaultImg} name='Learning new things  exploring the unknown  and' location='Durango, Dgo' price='220' />
            <Product image={defaultImg} name='Learning new things  exploring the unknown  and' location='Durango, Dgo' price='220' />
            <Product image={defaultImg} name='Learning new things  exploring the unknown  and' location='Durango, Dgo' price='220' />
            <Product image={defaultImg} name='Learning new things  exploring the unknown  and' location='Durango, Dgo' price='220' />
            <Product image={defaultImg} name='Learning new things  exploring the unknown  and' location='Durango, Dgo' price='220' />
            <Product image={defaultImg} name='Learning new things  exploring the unknown  and' location='Durango, Dgo' price='220' />
            <Product image={defaultImg} name='Learning new things  exploring the unknown  and' location='Durango, Dgo' price='220' />
          </div>
        </section>
      </Main>
    </>
  )
}
