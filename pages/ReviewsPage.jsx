import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { reviews } from '../data/reviews'

function ReviewsPage() {
  return (
    <div className="bg-base">
      <Container className="py-20">
        <SectionHeading
          title="What our clients say"
          description="Every review is from a real Cleanly client. Replace these with your own as they come in."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.name} className="bg-surface rounded-2xl p-6">
              <div className="flex gap-1 mb-4 text-accent">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-ink text-sm mb-6">"{review.text}"</p>
              <p className="text-stone text-sm font-semibold">{review.name}, {review.location}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default ReviewsPage
