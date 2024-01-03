export default function Label ({ htmlFor, text }) {
  return (
    <label htmlFor={htmlFor} className='text-white'>{text}:</label>
  )
}
