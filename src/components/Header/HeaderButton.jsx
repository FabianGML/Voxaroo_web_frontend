import { Link } from 'react-router-dom'

export default function HeaderButton ({ gray, text, nav }) {
  const classes = gray ? 'rounded-full bg-gray-400 text-white py-2 w-28 text-center hover:bg-gray-500 cursor-pointer' : 'rounded-full bg-blue-600 text-white py-2 w-28 text-center hover:bg-blue-700 cursor-pointer'
  return (
    <Link to={nav} className='w-28'>
      <li className={classes}>
        {text}
      </li>
    </Link>
  )
}
