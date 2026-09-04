import { MapPin } from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'

const areas = [
  'Downtown',
  'Maple Heights',
  'Oakwood',
  'Riverside',
  'Westgate',
  'Hillcrest',
  'Lakeside',
  'Northgate',
]

function ServiceAreaSection() {
  return (
    <section className="bg-base">
      <Container className="py-20">
        <SectionHeading
          eyebrow="Service Area"
          title="Where we clean"
          description="Proudly serving homes and offices across the following neighborhoods. Don't see yours? Ask us — we're always expanding."
          align="center"
        />
        <div className="flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm transition hover:border-brand hover:text-brand"
            >
              <MapPin size={14} className="text-brand" />
              {area}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ServiceAreaSection
