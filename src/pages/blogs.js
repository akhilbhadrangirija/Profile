import Head from 'next/head'
import Link from 'next/link'
import { getAllBlogs } from '../utils/markdown'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import { Container } from '../layout/LayoutStyles'

const BlogsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`

const BlogSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`

const BlogGrid = styled.div`
  display: grid;
  gap: 2rem;
`

const BlogCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid #e5e5e5;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`

const BlogCardTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #0070f3;
    }
  }
`

const BlogMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #666;
`

const BlogExcerpt = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
`

const BlogTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

const Tag = styled.span`
  background: #f0f0f0;
  color: #666;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
`

const NoBlogsMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.1rem;
`

export default function Blogs({ blogs }) {
  return (
    <Container>
      <Head>
        <title>Blogs - Akhil Bhadran</title>
        <meta
          name="description"
          content="Read my latest blog posts about web development, Next.js, and technology."
        />
      </Head>

      <Header />

      <BlogsContainer>
        <BlogHeader>
          <BlogTitle>Blog Posts</BlogTitle>
          <BlogSubtitle>
            Thoughts, tutorials, and insights about web development and
            technology
          </BlogSubtitle>
        </BlogHeader>

        {blogs.length === 0 ? (
          <NoBlogsMessage>
            No blog posts found. Check back soon for new content!
          </NoBlogsMessage>
        ) : (
          <BlogGrid>
            {blogs.map(blog => (
              <Link
                key={blog.id}
                href={`/blogs/${blog.id}`}>
                <BlogCard>
                  <BlogCardTitle>{blog.title}</BlogCardTitle>

                  <BlogMeta>
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.author}</span>
                  </BlogMeta>

                  <BlogExcerpt>{blog.excerpt}</BlogExcerpt>

                  {blog.tags && (
                    <BlogTags>
                      {blog.tags.map(tag => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </BlogTags>
                  )}
                </BlogCard>
              </Link>
            ))}
          </BlogGrid>
        )}
      </BlogsContainer>
    </Container>
  )
}

export async function getStaticProps() {
  const blogs = getAllBlogs()
  return {
    props: {
      blogs
    }
  }
}
