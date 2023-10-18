export default function Message ({ text, error }) {
  const classes = error ? 'bg-red-600 w-3/4 h-auto rounded-md text-white flex justify-center items-center p-3' : 'bg-green-600 w-3/4 h-10 rounded-md text-white flex justify-center items-center p-3'
  return (
    <p className={classes}>{text} </p>
  )
}
