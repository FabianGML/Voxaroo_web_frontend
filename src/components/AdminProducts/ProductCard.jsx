// import { useState } from 'react'
import { useCheckActiveSession } from '../../hooks/useCheckActiveSession'
import { formatTitle } from '../../utils/formatHandler'

import trash from '../../assets/trash.png'

export default function ProductCard ({ title, price, stock, image, id }) {
  useCheckActiveSession({ route: '/my-products' })
  const formatedTitle = formatTitle(title, 25)

  return (
    <article className='h-32 flex relative'>
      <div className='flex gap-3 border-2 border-gray-600'>
        <div className='w-1/2'>
          <img src={image} alt={title} className='h-full object-contain' />
        </div>
        <div className='w-1/2 dark:text-white flex flex-col gap-3 relative'>
          <h4 className='text-lg'>{formatedTitle}</h4>
          <span className='text-sm'>$<strong className='text-2xl'>{price}</strong></span>
          <span className='absolute right-2 top-10'>stock:<strong className='text-xl ml-1'>{stock}</strong></span>
        </div>
        <div className='absolute w-5 bottom-2 right-3'>
          <img src={trash} />
        </div>
      </div>
    </article>
  )
}
