export default function SendInfoButton ({ text }) {
  return (
    <button
      type='submit'
      className='bg-green-200 h-14 w-11/12
      rounded-xl text-xl text-slate-500
      hover:bg-green-300 hover:text-black'
    >
      {text}
    </button>
  )
}
