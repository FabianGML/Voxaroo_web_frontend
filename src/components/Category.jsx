export default function Category ({ img, name }) {
  return (
    <div className='border border-gray-400 rounded-2xl overflow-hidden hover:border-green-300 hover:border-2'>
      <img src={img} alt={name} className='object-cover' />
      <p className='text-center font-semibold pt-2 text-xl'>{name}</p>
    </div>
  )
}
