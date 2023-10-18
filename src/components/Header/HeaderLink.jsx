import { Link } from 'react-router-dom'

export default function HeaderLink ({ link, text, small }) {
  return (
    <Link to={link}>
      <li className={`underline underline-offset-2 inline-block ${small ? 'text-sm' : 'text-lg'}`}>{text}</li>
    </Link>
  )
}
