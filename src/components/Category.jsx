export default function Category ({ img, name }) {
  return (
    <div className='flex flex-col justify-center items-center h-20 min-w-[3rem] lg:min-w-[5rem] lg:h-28'>
      <img src={img} alt={name} className='object-cover rounded-full w-full h-full' />
      <p className='text-center font-semibold pt-2 text-md dark:text-white font'>{name}</p>
    </div>
  )
}
