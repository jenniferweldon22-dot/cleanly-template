import { Link } from 'react-router-dom'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { blogPosts } from '../data/blogPosts'

function BlogPage() {
  return (
    <div className="bg-base">
      <Container className="py-20">
        <SectionHeading
          title="From the blog"
          description="Cleaning tips, checklists, and updates from the Cleanly team."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="block">
              <div className="aspect-[4/3] rounded-2xl bg-surface border border-ink/10 mb-4" />
              <p className="text-xs text-stone mb-2">
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              <h3 className="font-display text-xl text-ink mb-2">{post.title}</h3>
              <p className="text-stone text-sm">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default BlogPage
