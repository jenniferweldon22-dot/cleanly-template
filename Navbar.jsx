import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Sparkles, Phone, Menu, X } from 'lucide-react'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      {/* Top bar */}
      <div className="bg-navy px-4 py-2 text-xs text-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p>✨ Fast same-week bookings available across the metro area</p>
          <a href="tel:+11234567890" className="flex items-center gap-1.5 hover:text-white">
            <Phone className="h-3.5 w-3.5 text-accent" />
            <span className="hidden sm:inline">Mon–Sat: 8am – 6pm ·</span> (123) 456-7890
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand shadow-md shadow-blue-500/30">
            <Sparkles className="h-5 w-5 fill-accent text-accent" />
          </div>
          <span className="text-2xl font-black tracking-tight text-navy">
            Clean<span className="text-brand">ly</span>
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition hover:text-brand ${isActive ? 'text-brand' : 'text-gray-600'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-primary hidden !py-2.5 text-sm sm:inline-flex">
            Book Online
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-navy hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 font-semibold ${
                    isActive ? 'bg-blue-50 text-brand' : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              Book Online
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
