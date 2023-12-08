import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../AppContext'

export default function HeaderLink ({ link, text, small }) {
  const { closeMenu } = useContext(AppContext)
  return (
    <Link to={link} onClick={closeMenu}>
      <li className={`underline underline-offset-2 inline-block ${small ? 'text-sm' : 'text-lg'}`}>{text}</li>
    </Link>
  )
}
