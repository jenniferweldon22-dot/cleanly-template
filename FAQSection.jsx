import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Container from './Container'
import SectionHeading from './SectionHeading'
import { faqs } from '../data/faqs'

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white">
      <Container className="max-w-3xl py-20">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know before booking."
          align="center"
        />
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition ${
                  isOpen ? 'border-brand bg-blue-50/50' : 'border-gray-200 bg-white'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="pr-8 font-semibold text-navy">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-brand transition ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default FAQSection
