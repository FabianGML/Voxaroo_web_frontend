export default function Product ({ image, name, price, seller }) {
  return (
    <div className='w-full h-56 flex border-2 border-gray-400 my-5'>
      <img src={image} alt={name} className='w-1/2 object-cover border-r-2 border-gray-300' />
      <div className='w-1/2 flex flex-col gap-1 p-2'>
        <span className='font-bold text-lg'>{name}</span>
        <span className='text-sm'>$<span className='font-extrabold text-3xl font-mono'>{price}</span></span>
        <span>{seller}</span>
        <button className='py-3 mx-3 rounded-lg border border-gray-400'>Agregar al Carrito</button>
      </div>
    </div>
  )
}
