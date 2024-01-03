export default function Info ({ label, info }) {
  return (
    <div className='bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg p-2 w-[20rem] md2:w-[30rem] 2xl:py-5'>
      <span className='text-lg dark:text-white 2xl:text-2xl'>{label}</span>
      <span className='text-lg dark:text-gray-400 pl-3 2xl:text-xl'>{info}</span>
    </div>
  )
}
