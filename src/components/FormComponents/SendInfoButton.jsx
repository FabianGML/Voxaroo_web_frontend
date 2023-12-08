export default function SendInfoButton ({ text }) {
  return (
    <button
      type='submit'
      className='bg-green-200 h-14 w-full
      rounded-xl text-xl text-slate-500
      hover:bg-green-300 hover:text-black'
    >
      {text}
    </button>
  )
}
