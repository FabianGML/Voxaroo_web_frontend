import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../AppContext'
import blackHeart from '../assets/black-heart.png'
import fullHeart from '../assets/full-heart.png'
import axios from 'axios'
import { formatTitle } from '../utils/formatName'

export default function Product ({ id, image, name, location, price }) {
  const { isActiveSession, URL } = useContext(AppContext)
  const [isFavorite, setIsFavorite] = useState(false)

  /**
   * This useEffect will be executed every time the user clicks on the heart icon
   * and will add or remove the product from the user's favorites.
   */
  useEffect(() => {
    if (!isActiveSession) return
    const userId = window.localStorage.getItem('id')
    axios.post(`${URL}/products/add-favorite`,
      { userId, productId: id }
    )
  })
  const title = formatTitle(name)

  return (
    <div className='h-72 relative flex flex-col border-2 border-gray-400 rounded-sm overflow-hidden'>
      {!isFavorite && <img src={blackHeart} onClick={() => setIsFavorite(value => !value)} className='absolute w-6 right-2 top-2 cursor-pointer' />}
      {isFavorite && <img src={fullHeart} onClick={() => setIsFavorite(value => !value)} className='absolute w-6 right-2 top-2 cursor-pointer' />}
      <div className='overflow-hidden'>
        <img
          src={image}
          alt={name}
          className='object-cover border-r-2 border-gray-300 transition-transform transform hover:scale-125'
        />
      </div>
      <div className='w-full flex flex-col gap-1 px-3 py-1 dark:text-white'>
        <span className=''>{location}</span>
        <span className='font-bold text-md'>{title}</span>
        <span className='text-sm'>$<span className='font-extrabold text-2xl font-mono'>{price}</span></span>
      </div>
    </div>
  )
}
