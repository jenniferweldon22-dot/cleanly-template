import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import Container from './Container'
import { reviews } from '../data/reviews'

function ReviewsSection() {
  return (
    <section className="bg-navy">
      <Container className="py-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
            Reviews
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What our clients say
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-300">
            Real feedback from homeowners and businesses we clean for every week.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <div
              key={review.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex gap-1 text-accent">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-200">
                "{review.text}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent font-bold text-navy">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/reviews" className="btn-primary">
            Read all reviews
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default ReviewsSection
