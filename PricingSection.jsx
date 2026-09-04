import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { plans } from '../data/pricing'

function PricingSection() {
  return (
    <section className="bg-base py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="section-label">Pricing</span>

          <h2 className="section-title">
            Simple, transparent pricing
          </h2>

          <p className="section-subtitle mx-auto">
            Every home is different — these packages are a starting point.
            Your exact quote depends on size and condition.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={
                plan.featured
                  ? 'relative rounded-2xl bg-navy p-8 text-white shadow-2xl lg:scale-105'
                  : 'rounded-2xl border border-gray-200 bg-white p-8 shadow-sm'
              }
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wide text-navy">
                  Most popular
                </span>
              )}

              <h3 className="text-xl font-bold">
                {plan.name}
              </h3>

              <p
                className={`mt-2 text-sm ${
                  plan.featured
                    ? 'text-gray-300'
                    : 'text-gray-600'
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold">
                  ${plan.price}
                </span>

                <span
                  className={`text-sm ${
                    plan.featured
                      ? 'text-gray-300'
                      : 'text-gray-500'
                  }`}
                >
                  per visit
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span
                      className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                        plan.featured
                          ? 'bg-accent text-navy'
                          : 'bg-blue-50 text-brand'
                      }`}
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`mt-8 w-full ${
                  plan.featured
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                Get a Free Quote
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection