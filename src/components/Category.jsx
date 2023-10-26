export default function Category ({ img, name }) {
  return (
    <div className='border border-red-600 rounded-2xl overflow-hidden'>
      <img src={img} alt={name} className='object-cover' />
      <p className='text-center font-semibold pt-2 text-xl'>{name}</p>
    </div>
  )
}
