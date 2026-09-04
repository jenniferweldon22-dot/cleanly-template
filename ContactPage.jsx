import Container from '../components/Container'
import QuoteForm from '../components/QuoteForm'

function ContactPage() {
  return (
    <div className="bg-base">
      <Container className="py-20">
        <div className="max-w-2xl mb-10">
          <h1 className="font-display text-4xl text-ink mb-4">Get your free quote</h1>
          <p className="text-stone text-lg">
            Answer a few quick questions and we'll follow up with a custom price — usually within one business day.
          </p>
        </div>
        <div className="max-w-2xl">
          <QuoteForm />
        </div>
      </Container>
    </div>
  )
}

export default ContactPage
