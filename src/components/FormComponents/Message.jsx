export default function Message ({ text, error }) {
  const classes = error ? 'bg-red-600 ' : 'bg-green-600'
  return (
    <>
      {!Array.isArray(text) && (
        <p className={`w-full h-auto rounded-md text-white flex flex-col gap-3 justify-center items-center p-3 ${classes}`}>
          {text}
        </p>
      )}
      {Array.isArray(text) && (
        <ul className={`w-full h-auto rounded-md text-white flex flex-col gap-3 justify-center items-center p-3 ${classes}`}>
          {text.map((item, index) => (
            <li key={index}>•  {item}</li>
          ))}
        </ul>
      )}
    </>
  )
}
