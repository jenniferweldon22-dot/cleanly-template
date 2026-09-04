import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import FAQSection from '../components/FAQSection'
import FinalCTA from '../components/FinalCTA'
import { services } from '../data/services'
import { reviews } from '../data/reviews'

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8 md:gap-24">
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Our Cleaning Services
          </h2>
          <p className="mt-3 text-stone">
            Tailored cleaning solutions designed to fit your home and schedule.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(services) && services.slice(0, 6).map((service) => (
            <div
              key={service.slug || service.title}
              className="flex flex-col justify-between rounded-2xl border border-ink/10 bg-surface p-6 shadow-sm transition hover:shadow-md"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {service.title || service.name}
                </h3>
                <p className="mt-2 text-sm text-stone">
                  {service.description || service.shortDescription}
                </p>
              </div>
              <div className="mt-6">
                <Link
                  to={`/services/${service.slug || ''}`}
                  className="text-sm font-semibold text-accent hover:underline"
                >
                  Learn more &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Reviews / Testimonials */}
      <section className="bg-base py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Loved by Our Clients
            </h2>
            <p className="mt-3 text-stone">
              See what our customers have to say about our cleaning quality.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.isArray(reviews) && reviews.slice(0, 3).map((review, i) => (
              <div
                key={i}
                className="rounded-2xl border border-ink/10 bg-surface p-6 shadow-sm"
              >
                <div className="mb-3 text-amber-500">
                  {'★'.repeat(review.rating || 5)}
                </div>
                <p className="text-sm italic text-stone">
                  "{review.comment || review.text || review.quote}"
                </p>
                <p className="mt-4 font-semibold text-ink">
                  - {review.author || review.name || 'Happy Customer'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection />

      {/* Final Call to Action */}
      <FinalCTA />
    </div>
  )
}
