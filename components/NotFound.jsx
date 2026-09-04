import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-32 text-center">
      <h1 className="text-6xl font-bold text-brand">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        Sorry, we couldn't find that page.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-lg bg-brand px-6 py-3 font-medium text-white hover:bg-brand-dark"
      >
        Back to Home
      </Link>
    </section>
  )
}

export default NotFound
