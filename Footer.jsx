import { Link } from 'react-router-dom'
import { Sparkles, Phone, Mail, Clock, MapPin } from 'lucide-react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import Container from './Container'
import { site } from '../data/site'

const companyLinks = [
  { to: '/about', label: 'About' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

const serviceLinks = [
  { to: '/services', label: 'All Services' },
  { to: '/services/deep-cleaning', label: 'Deep Cleaning' },
  { to: '/services/office-cleaning', label: 'Office Cleaning' },
  { to: '/pricing', label: 'Pricing' },
]

function Footer() {
  return (
    <footer className="bg-navy text-gray-400">
      <Container className="grid gap-12 py-16 md:grid-cols-4">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand">
              <Sparkles className="h-4 w-4 fill-accent text-accent" />
            </div>
            <span className="text-xl font-black tracking-tight text-white">
              Clean<span className="text-brand">ly</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{site.tagline}</p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.social.facebook}
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 transition hover:bg-brand hover:text-white"
            >
              <FaFacebook size={16} />
            </a>
            <a
              href={site.social.instagram}
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 transition hover:bg-brand hover:text-white"
            >
              <FaInstagram size={16} />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <p className="mb-4 text-sm font-semibold text-white">Company</p>
          <ul className="space-y-2 text-sm">
            {companyLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="mb-4 text-sm font-semibold text-white">Services</p>
          <ul className="space-y-2 text-sm">
            {serviceLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-4 text-sm font-semibold text-white">Contact</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-2 transition hover:text-white">
                <Phone size={14} className="text-accent" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition hover:text-white">
                <Mail size={14} className="text-accent" /> {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={14} className="text-accent" /> {site.hours}
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-accent" /> {site.address}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col justify-between gap-2 py-6 text-xs md:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-white">Privacy Policy</Link>
            <Link to="/" className="hover:text-white">Terms of Service</Link>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer