import { Link } from 'react-router-dom'

function Button({ children, variant = "primary", className = "", to, ...props }) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"

  const variants = {
    primary: "bg-accent text-base hover:bg-accent-dark",
    secondary: "bg-transparent text-ink border border-ink/20 hover:border-ink/40",
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
