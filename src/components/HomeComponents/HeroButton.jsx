import { Link } from 'react-router-dom'

export default function HeroButton ({ bg, text, link }) {
  return (
    <Link
      to={link}
      className={`border rounded-3xl py-3 px-4 text-sm font-bold text-slate-600 
      border-slate-400 transition duration-300 ease-in-out transform
      hover:bg-gray-500 hover:text-white 
      ${bg
      ? 'bg-white '
      : ''}`}
    >
      {text}
    </Link>
  )
}
