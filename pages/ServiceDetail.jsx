import { useParams, Link } from 'react-router-dom'
import Container from '../components/Container'
import Button from '../components/Button'
import PlaceholderImage from '../components/PlaceholderImage'
import { services } from '../data/services'

function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return (
      <Container className="py-20 text-center">
        <p className="text-ink mb-4">Service not found.</p>
        <Link
          to="/services"
          className="text-accent font-semibold"
        >
          Back to all services
        </Link>
      </Container>
    )
  }

  return (
    <div className="bg-base">
      <Container className="py-20">
        <div className="grid items-start gap-12 md:grid-cols-2">
          {/* Service Information */}
          <div>
            <Link
              to="/services"
              className="text-sm text-stone transition-colors hover:text-ink"
            >
              ← All services
            </Link>

            <h1 className="mt-4 mb-4 font-display text-4xl text-ink">
              {service.name}
            </h1>

            <p className="mb-6 text-lg text-stone">
              {service.description}
            </p>

            <p className="mb-8 font-semibold text-ink">
              Starting at{' '}
              <span className="text-accent">{service.startingPrice}</span>
            </p>

            {/* What's Included */}
            <div className="mb-10">
              <h2 className="mb-4 font-display text-xl text-ink">
                What's included
              </h2>

              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-sm text-ink"
                  >
                    <span className="font-semibold text-accent">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button to="/contact" variant="primary">
              Get a Free Quote
            </Button>
          </div>

          {/* Service Image */}
          <PlaceholderImage
            label={`Replace with a photo related to ${service.name.toLowerCase()}`}
            aspect="aspect-[4/5]"
          />
        </div>
      </Container>
    </div>
  )
}

export default ServiceDetail
