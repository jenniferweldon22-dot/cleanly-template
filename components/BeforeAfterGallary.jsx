import { ImageIcon, ArrowRight } from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'

// ============================================================
// BEFORE & AFTER PHOTOS
// ============================================================
// To add your own photos:
// 1. Put your photos inside: public/images/
// 2. Change the image path below.
//
// Example:
// image: '/images/kitchen-before.jpg'
//
// If you leave image as null, the "Add photo" placeholder appears.
// ============================================================

const pairs = [
  {
    title: 'Kitchen deep clean',
    before: {
      label: 'Before',
      image: null,
    },
    after: {
      label: 'After',
      image: null,
    },
  },
  {
    title: 'Bathroom refresh',
    before: {
      label: 'Before',
      image: null,
    },
    after: {
      label: 'After',
      image: null,
    },
  },
]

function Photo({ label, image, title }) {
  const isAfter = label === 'After'

  return (
    <div className="relative aspect-square overflow-hidden rounded-2xl">
      {image ? (
        <img
          src={image}
          alt={`${title} — ${label}`}
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          className={`flex h-full w-full flex-col items-center justify-center gap-2 ${
            isAfter
              ? 'bg-gradient-to-br from-blue-100 to-blue-200 text-brand'
              : 'bg-gradient-to-br from-gray-200 to-gray-300 text-gray-500'
          }`}
        >
          <ImageIcon size={32} />
          <span className="text-xs font-medium">Add photo</span>
        </div>
      )}

      <span
        className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
          isAfter
            ? 'bg-accent text-navy'
            : 'bg-navy text-white'
        }`}
      >
        {label}
      </span>
    </div>
  )
}

function BeforeAfterGallery() {
  return (
    <section className="bg-white">
      <Container className="py-20">
        <SectionHeading
          eyebrow="Results"
          title="See the difference"
          description="Real results from real cleanings. Our team leaves every space looking brand new."
          align="center"
        />

        <div className="grid gap-10 md:grid-cols-2">
          {pairs.map((pair) => (
            <div key={pair.title} className="card">
              <h3 className="mb-4 text-lg font-semibold text-navy">
                {pair.title}
              </h3>

              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                <Photo
                  {...pair.before}
                  title={pair.title}
                />

                <ArrowRight
                  className="text-brand"
                  size={24}
                />

                <Photo
                  {...pair.after}
                  title={pair.title}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default BeforeAfterGallery
