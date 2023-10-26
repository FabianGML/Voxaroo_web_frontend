export default function ProfileImage ({ image, username }) {
  return (
    <div className='flex gap-3 items-center italic w-3/4'>
      <img src={image} alt={username} className='rounded-full w-12 h-12 object-cover' />
      <span>{username}</span>
    </div>
  )
}
