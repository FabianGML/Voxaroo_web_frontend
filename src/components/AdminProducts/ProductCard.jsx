export default function ProductCard ({ title, price, description, image, id }) {
  return (
    <article className='flex gap-4 border-2 border-gray-600 h-32'>
      <div className='w-1/2'>
        <img src={image} alt={title} className='h-full object-contain' />
      </div>
      <div className='w-1/2 dark:text-white'>
        <h4 className='text-xl'>{title}</h4>
        <span className='text-sm'>$<strong className='text-2xl'>{price}</strong></span>
      </div>

    </article>
  )
}
