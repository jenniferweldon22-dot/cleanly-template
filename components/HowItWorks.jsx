import { FileText, CalendarCheck, Sparkles } from 'lucide-react'
import Container from './Container'

const steps = [
  {
    icon: FileText,
    title: 'Request a quote',
    description: 'Tell us about your space and cleaning needs in under two minutes.',
  },
  {
    icon: CalendarCheck,
    title: 'We confirm your visit',
    description: "We'll follow up with pricing and lock in a date and time that works for you.",
  },
  {
    icon: Sparkles,
    title: 'Enjoy a spotless space',
    description: 'Our team arrives on time, does the work, and you get your time back.',
  },
]

function HowItWorks() {
  return (
    <section className="bg-white">
      <Container className="py-20">
        <div className="text-center">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Three simple steps</h2>
          <p className="section-subtitle mx-auto">
            Getting your space cleaned shouldn't be complicated. Here's what to expect.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-blue-200">
                  <Icon size={28} />
                </div>
                <span className="absolute left-1/2 top-0 -translate-y-3 translate-x-4 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-navy">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-lg font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default HowItWorks
