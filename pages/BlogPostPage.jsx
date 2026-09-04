import { useParams, Link } from 'react-router-dom'
import Container from '../components/Container'
import { blogPosts } from '../data/blogPosts'

function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <Container className="py-20 text-center">
        <p className="text-ink mb-4">Post not found.</p>
        <Link to="/blog" className="text-accent font-semibold">Back to blog</Link>
      </Container>
    )
  }

  return (
    <div className="bg-base">
      <Container className="py-20 max-w-2xl">
        <Link to="/blog" className="text-sm text-stone hover:text-ink">All posts</Link>
        <p className="text-xs text-stone mt-4 mb-2">
          {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
        <h1 className="font-display text-4xl text-ink mb-6">{post.title}</h1>
        <div className="aspect-[16/9] rounded-2xl bg-surface border border-ink/10 mb-8" />
        <p className="text-stone text-lg leading-relaxed">{post.content}</p>
      </Container>
    </div>
  )
}

export default BlogPostPage
