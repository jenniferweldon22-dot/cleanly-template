import { Link } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'
import Container from './Container'
import { site } from '../data/site'

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand to-brand-dark">
      {/* Decorative circles */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
      <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-white/10" />

      <Container className="relative py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready for a cleaner space?
        </h2>

        <p className="mx-auto mt-4 max-w-md text-lg text-blue-100">
          Get a free, no-obligation quote in under two minutes. No pressure,
          just a spotless home.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/contact" className="btn-primary gap-2">
            Get a Free Quote
            <ArrowRight size={18} />
          </Link>

          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            <Phone size={18} />
            {site.phone}
          </a>
        </div>
      </Container>
    </section>
  )
}

export default FinalCTA
