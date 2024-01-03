export default function ProfileButton ({ red, img, text, handleClick }) {
  const classes = red ? 'border-2 border-red-600 hover:bg-red-600 hover:text-white filter_img' : 'border-2 border-green-300 hover:bg-green-300 dark:hover:text-black'
  return (
    <div
      className={`w-1/2 max-w-[16rem] flex justify-center dark:text-white rounded-xl cursor-pointer ${classes}`}
      onClick={handleClick}
    >
      {img && (
        <img src={img} className='w-6 object-contain dark:filter dark:invert 2xl:w-7' />
      )}
      <span className='px-2 py-4 2xl:text-xl'>
        {text}
      </span>
    </div>
  )
}
