// import { useState } from 'react'
import { useCheckActiveSession } from '../../hooks/useCheckActiveSession'
import { formatTitle } from '../../utils/formatName'

export default function ProductCard ({ title, price, stock, image, id }) {
  // const [sideMenu, setSideMenu] = useState(false)

  useCheckActiveSession({ route: '/my-products' })
  const formatedTitle = formatTitle(title, 25)

  return (
    <article className='h-32 flex relative'>
      <div className='flex gap-4 border-2 border-gray-600'>
        <div className='w-1/2'>
          <img src={image} alt={title} className='h-full object-contain' />
        </div>
        <div className='w-1/2 dark:text-white flex flex-col gap-3 relative'>
          <h4 className='text-lg'>{formatedTitle}</h4>
          <span className='text-sm'>$<strong className='text-2xl'>{price}</strong></span>
          <span className='absolute right-2 bottom-1'>stock:<strong className='text-xl ml-1'>{stock}</strong></span>
        </div>
      </div>s
      {/* <div className='flex gap-4  absolute -bottom-8'>
        <button className='bg-green-400 dark:bg-green-800 text-white px-3 py-1 rounded-md'>Editar</button>
        <button className='bg-red-400 dark:bg-red-800 text-white px-3 py-1 rounded-md'>Eliminar</button>
      </div> */}
    </article>
  )
}
