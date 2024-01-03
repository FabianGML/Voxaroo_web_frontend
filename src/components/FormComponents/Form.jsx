import { Link, useNavigate } from 'react-router-dom'
import logo from '../../../public/voxaroo.png'

import handleSession from '../../utils/handleSession'
import LoadingSpinner from '../LoadingSpinner'
import SendInfoButton from './SendInfoButton'
import Message from './Message'
import { useState } from 'react'

export default function Form ({ children, linkText, linkRef, sendButtonText, submitUrl }) {
  const [response, setResponse] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  return (
    <section className='bg-green-200 dark:bg-green-800 w-screen h-screen flex justify-center items-center'>
      <div className='w-3/4 py-10 flex flex-col gap-10 items-center bg-white shadow-2xl rounded-2xl max-w-lg'>
        <Link to='/'>
          <img src={logo} className='w-24 mx-auto' />
        </Link>
        <form
          onSubmit={(e) => handleSession(setResponse, setIsLoading, navigate, e, submitUrl)}
          className='w-10/12 flex flex-col items-center gap-5'
        >
          {response.error ? (<Message text={response.error} error />) : null}
          {children}
          {isLoading && <LoadingSpinner />}
          {!isLoading && <SendInfoButton text={sendButtonText} />}
        </form>
        <Link
          to={`/${linkRef}`}
          className='underline underline-offset-2 text-slate-600 hover:text-black'
        >{linkText}
        </Link>
      </div>
    </section>
  )
}
