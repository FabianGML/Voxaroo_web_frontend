export default function Input ({ placeholder, name, type, required, small, defaultValue, autoFocus }) {
  const classes = small ? 'h-8 w-full border border-slate-300 rounded-lg px-3 outline-slate-400' : 'h-12 w-full border border-slate-300 rounded-lg px-3 outline-slate-400'
  return (
    <input
      className={classes}
      placeholder={placeholder}
      required={required}
      name={name}
      type={type}
      defaultValue={defaultValue}
      autoFocus={autoFocus}
    />
  )
}
