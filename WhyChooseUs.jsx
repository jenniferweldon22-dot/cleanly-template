import {
  ShieldCheck,
  Sparkles,
  Clock,
  HeartHandshake,
} from 'lucide-react'

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Trusted & Insured',
    description:
      'Our professional cleaners are carefully vetted and insured, so you can feel confident inviting us into your space.',
  },
  {
    icon: Sparkles,
    title: 'Consistently High Quality',
    description:
      'We pay attention to the details that make a space feel truly clean, fresh, and comfortable.',
  },
  {
    icon: Clock,
    title: 'Reliable & On Time',
    description:
      'We respect your schedule and make it easy to book dependable cleaning services when you need them.',
  },
  {
    icon: HeartHandshake,
    title: 'Satisfaction Guaranteed',
    description:
      'Your satisfaction matters to us. If something is not right, we will work with you to make it right.',
  },
]

function WhyChooseUs() {
  return (
    <section className="bg-blue-50/50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="section-label">Why Choose Us</span>

          <h2 className="section-title">
            Cleaning you can count on
          </h2>

          <p className="section-subtitle mx-auto">
            We combine professional service, attention to detail, and
            dependable scheduling to make keeping your space clean simple.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon

            return (
              <div
                key={reason.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="icon-badge">
                  <Icon size={24} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-navy">
                  {reason.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs