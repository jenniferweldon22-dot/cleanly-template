import { Link } from 'react-router-dom'
import { Sparkles, Phone, ShieldCheck, Star, Clock } from 'lucide-react'
import { site } from '../data/site'
import { homepage } from '../data/homepage'

const badges = [
  {
    icon: Star,
    title: homepage.trustBadges[0].title,
    subtitle: homepage.trustBadges[0].subtitle,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: ShieldCheck,
    title: homepage.trustBadges[1].title,
    subtitle: homepage.trustBadges[1].subtitle,
    color: 'bg-blue-100 text-brand',
  },
  {
    icon: Clock,
    title: homepage.trustBadges[2].title,
    subtitle: homepage.trustBadges[2].subtitle,
    color: 'bg-emerald-100 text-emerald-600',
  },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

          {/* LEFT SIDE */}
          <div className="space-y-6 lg:col-span-7">

            <div className="section-label inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 fill-accent text-accent" />
              {homepage.hero.eyebrow}
            </div>

            <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-navy sm:text-6xl">
              {homepage.hero.titleBefore}{' '}
              <span className="bg-gradient-to-r from-brand to-indigo-600 bg-clip-text text-transparent">
                {homepage.hero.titleHighlight}
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-gray-600">
              {homepage.hero.description}
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-2">

              <Link
                to="/contact"
                className="btn-primary !px-8 !py-4 shadow-lg shadow-yellow-200 hover:-translate-y-0.5"
              >
                {homepage.hero.primaryButton}
              </Link>

              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg border border-blue-200 px-6 py-4 font-bold text-brand transition hover:bg-blue-50"
              >
                <Phone className="h-5 w-5" />
                {site.phone}
              </a>

            </div>

            {/* TRUST BADGES */}
            <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6 sm:grid-cols-3">

              {badges.map((badge) => {
                const Icon = badge.icon

                return (
                  <div
                    key={badge.title}
                    className="flex items-center gap-2.5"
                  >
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg ${badge.color}`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-navy">
                        {badge.title}
                      </p>

                      <p className="text-xs text-gray-500">
                        {badge.subtitle}
                      </p>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>

          {/* RIGHT SIDE / HERO IMAGE */}
          <div className="relative lg:col-span-5">

            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Glow behind image */}
              <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-tr from-yellow-300/30 to-blue-400/30 blur-2xl" />

              {/* HERO IMAGE */}
              <img
                src="/images/hero.jpg"
                alt="Professional cleaner wiping a window"
                className="h-[460px] w-full rounded-3xl border-4 border-white object-cover shadow-2xl"
              />

              {/* SATISFACTION BADGE */}
              <div className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:flex">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-xl font-bold text-white">
                  ✓
                </div>

                <div>
                  <p className="text-sm font-bold text-navy">
                    {homepage.satisfaction.title}
                  </p>

                  <p className="text-xs text-gray-500">
                    {homepage.satisfaction.subtitle}
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}