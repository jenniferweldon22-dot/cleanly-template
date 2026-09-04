import Container from '../components/Container'
import PlaceholderImage from '../components/PlaceholderImage'

function AboutPage() {
  return (
    <div className="bg-base">
      <Container className="py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="font-display text-4xl text-ink mb-6">Built on trust, one clean at a time.</h1>
          <p className="text-stone text-lg mb-4">
            Cleanly started with a simple idea: cleaning services should be reliable, transparent, and easy to book. Replace this paragraph with your company's real story — when you started, why, and what makes your team different.
          </p>
          <p className="text-stone text-lg">
            Today we serve homes and offices across the city, backed by a team of background-checked, insured professionals who take pride in the details.
          </p>
        </div>
        <PlaceholderImage label="Replace with a photo of your founder or team" aspect="aspect-[4/5]" />
      </Container>
    </div>
  )
}

export default AboutPage
