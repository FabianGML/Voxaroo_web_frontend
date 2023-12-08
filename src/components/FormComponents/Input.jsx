export default function Input ({ placeholder, name, type, required, handleChange, small }) {
  const classes = small ? 'h-10 w-3/4 border border-slate-300 rounded-lg px-3 outline-slate-400' : 'h-12 w-full border border-slate-300 rounded-lg px-3 outline-slate-400'
  return (
    <input
      className={classes}
      placeholder={placeholder}
      onChange={handleChange}
      required={required}
      name={name}
      type={type}
    />
  )
}
