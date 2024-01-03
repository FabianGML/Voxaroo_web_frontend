import arrow from '../../assets/arrow.png'
import { useContext } from 'react'
import { AppContext } from '../../AppContext'

export default function ProfileImage ({ image, username }) {
  const { toggleProfileMenu } = useContext(AppContext)
  return (
    <div className='flex items-center gap-2 ml-3 md2:cursor-pointer md2:gap-5' onClick={toggleProfileMenu}>
      <img src={image} alt={username} className='rounded-full w-12 h-12 object-cover' />
      <span className='italic lg:text-lg dark:text-white'>{username}</span>
      <img src={arrow} className='h-3 alig dark:filter dark:invert' />
    </div>
  )
}
