import { Link } from 'react-router-dom'
import ProductCard from '../components/AdminProducts/ProductCard'
import Header from '../components/Header/Header'
import Main from '../components/Main'
import defaultImage from '../assets/user-images/default.jpg'
export default function UserProducts () {
  return (
    <>
      <Header />
      <Main classes='flex flex-col px-3'>
        <section>
          <h3 className='dark:text-white py-4 text-lg'>Buscar por Categorias</h3>
        </section>
        <section>
          <ProductCard title='laptop' price='120' image={defaultImage} id='1234123' />
        </section>
        <Link
          className='bg-green-300 dark:bg-green-800 absolute
            w-16 h-16 right-3 bottom-3 rounded-xl flex justify-center
            items-center'
          to='/create'
        >
          <span className='text-7xl h-full mb-4 dark:text-white'>+</span>
        </Link>
      </Main>
    </>
  )
}
