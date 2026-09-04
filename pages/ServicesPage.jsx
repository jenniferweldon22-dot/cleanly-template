import { Link } from 'react-router-dom'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { services } from '../data/services'

function ServicesPage() {
  return (
    <div className="bg-base">
      <Container className="py-20">
        <SectionHeading
          title="Our services"
          description="Every service includes background-checked cleaners, eco-friendly supplies, and our satisfaction guarantee."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group block rounded-2xl border border-ink/10 p-6 hover:border-accent/40 transition-colors"
            >
              <h3 className="font-display text-xl text-ink mb-2">{service.name}</h3>
              <p className="text-stone text-sm mb-4">{service.shortDescription}</p>
              <p className="text-sm font-semibold text-accent">Starting at {service.startingPrice}</p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default ServicesPage
