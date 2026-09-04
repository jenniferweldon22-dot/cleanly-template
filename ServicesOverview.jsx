import { Link } from 'react-router-dom'
import {
  Home,
  Sparkles,
  Truck,
  KeyRound,
  Building2,
  Sofa,
  Droplets,
  ArrowRight,
} from 'lucide-react'
import { services } from '../data/services'

const serviceIcons = {
  'house-cleaning': Home,
  'deep-cleaning': Sparkles,
  'move-in-move-out': Truck,
  'airbnb-cleaning': KeyRound,
  'office-cleaning': Building2,
  'carpet-upholstery': Sofa,
  'window-cleaning': Droplets,
}

function ServicesOverview() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="section-label">Our Services</span>

          <h2 className="section-title">
            Services built around your space
          </h2>

          <p className="section-subtitle mx-auto">
            From a quick refresh to a full deep clean, choose the service that
            fits your home or business.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.slug] || Sparkles

            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="card group"
              >
                <div className="icon-badge">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-semibold text-navy">
                  {service.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {service.shortDescription}
                </p>

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Learn more
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services" className="btn-secondary">
            View all services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview