import Head from 'next/head'
import Link from 'next/link'
import { getAllBlogIds, getBlogData, getAllBlogs } from '../../utils/markdown'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import { Container } from '../../layout/LayoutStyles'

const BlogContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  background: #1a1a1a;
  color: white;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const BackLink = styled.div`
  margin-bottom: 2rem;

  a {
    color: #60a5fa;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: #93c5fd;
      text-decoration: underline;
    }
  }
`

const BlogHeader = styled.div`
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #374151;
`

const BlogTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.02em;
`

const BlogMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #d1d5db;
  flex-wrap: wrap;
  align-items: center;
`

const ReadingTime = styled.span`
  background: #1e40af;
  color: #dbeafe;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`

const BlogTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`

const Tag = styled.span`
  background: #374151;
  color: #d1d5db;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid #4b5563;
  transition: all 0.2s ease;

  &:hover {
    background: #4b5563;
    transform: translateY(-1px);
  }
`

const TableOfContents = styled.div`
  background: #374151;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  border: 1px solid #4b5563;

  h3 {
    margin: 0 0 1rem 0;
    color: white;
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #d1d5db;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s ease;

    &:hover {
      color: #60a5fa;
    }
  }
`

const BlogContent = styled.div`
  line-height: 1.8;
  color: #e5e7eb;
  font-size: 1.1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: white;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
    line-height: 1.3;
  }

  h1 {
    font-size: 2rem;
    border-bottom: 2px solid #374151;
    padding-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.75rem;
    border-bottom: 1px solid #374151;
    padding-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1.5rem;
    text-align: justify;
  }

  ul,
  ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  code {
    background: #1f2937;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas,
      'Courier New', monospace;
    font-size: 0.9em;
    color: #f87171;
  }

  pre {
    background: #1f2937;
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1.5rem 0;
    border: 1px solid #374151;

    code {
      background: none;
      padding: 0;
      color: inherit;
    }
  }

  blockquote {
    border-left: 4px solid #60a5fa;
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: #d1d5db;
    background: #374151;
    padding: 1rem 1.5rem;
    border-radius: 0 8px 8px 0;
  }

  a {
    color: #60a5fa;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease;

    &:hover {
      border-bottom-color: #60a5fa;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1.5rem 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    h1 {
      font-size: 1.75rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.25rem;
    }
  }
`

const SocialShare = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  padding: 1.5rem;
  background: #374151;
  border-radius: 12px;
  border: 1px solid #4b5563;
`

const ShareButton = styled.button`
  background: #1e40af;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;

  &:hover {
    background: #1e3a8a;
    transform: translateY(-1px);
  }

  &.twitter {
    background: #1da1f2;

    &:hover {
      background: #1a91da;
    }
  }

  &.linkedin {
    background: #0077b5;

    &:hover {
      background: #006097;
    }
  }
`

const RelatedPosts = styled.div`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #374151;

  h3 {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 1.5rem;
  }
`

const RelatedPostCard = styled.div`
  background: #374151;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  border: 1px solid #4b5563;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin-bottom: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  }

  h4 {
    margin: 0 0 0.5rem 0;

    a {
      color: white;
      text-decoration: none;
      font-size: 1.1rem;
      font-weight: 600;

      &:hover {
        color: #60a5fa;
      }
    }
  }

  p {
    color: #d1d5db;
    font-size: 0.9rem;
    margin: 0;
  }
`

const BlogFooter = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #374151;
  text-align: center;
  color: #d1d5db;
`

// Calculate reading time
function calculateReadingTime(content) {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / wordsPerMinute)
  return readingTime
}

// Generate table of contents
function generateTableOfContents(contentHtml) {
  const headings = contentHtml.match(/<h[2-3][^>]*>.*?<\/h[2-3]>/g)
  if (!headings) return null

  const toc = headings.map(heading => {
    const level = heading.match(/<h([2-3])/)[1]
    const text = heading.replace(/<[^>]*>/g, '')
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    return { level, text, id }
  })

  return toc
}

export default function BlogPost({ blogData, relatedPosts }) {
  const [toc, setToc] = useState(null)
  const readingTime = calculateReadingTime(blogData.contentHtml)

  useEffect(() => {
    const tocData = generateTableOfContents(blogData.contentHtml)
    setToc(tocData)
  }, [blogData.contentHtml])

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = `${blogData.title} by Akhil Bhadrangirija`

  const handleShare = platform => {
    let url = ''
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          shareText
        )}&url=${encodeURIComponent(shareUrl)}`
        break
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          shareUrl
        )}`
        break
      case 'copy':
        navigator.clipboard.writeText(shareUrl)
        alert('Link copied to clipboard!')
        return
    }
    window.open(url, '_blank')
  }

  return (
    <>
      <Head>
        <title>{blogData.title} - Akhil Bhadrangirija</title>
        <meta
          name="description"
          content={blogData.excerpt}
        />
        <meta
          property="og:title"
          content={blogData.title}
        />
        <meta
          property="og:description"
          content={blogData.excerpt}
        />
        <meta
          property="og:type"
          content="article"
        />
        <meta
          property="article:author"
          content={blogData.author}
        />
        <meta
          property="article:published_time"
          content={blogData.date}
        />
        {blogData.tags &&
          blogData.tags.map(tag => (
            <meta
              key={tag}
              property="article:tag"
              content={tag}
            />
          ))}
      </Head>
      <Container>
        <Header />

        <BlogContainer>
          <BackLink>
            <Link href="/blogs">← Back to all blogs</Link>
          </BackLink>

          <BlogHeader>
            <BlogTitle>{blogData.title}</BlogTitle>

            <BlogMeta>
              <span>{blogData.date}</span>
              <span>•</span>
              <span>By {blogData.author}</span>
              <span>•</span>
              <ReadingTime>{readingTime} min read</ReadingTime>
            </BlogMeta>

            {blogData.tags && (
              <BlogTags>
                {blogData.tags.map(tag => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </BlogTags>
            )}
          </BlogHeader>

          {toc && (
            <TableOfContents>
              <h3>Table of Contents</h3>
              <ul>
                {toc.map((item, index) => (
                  <li
                    key={index}
                    style={{ marginLeft: `${(item.level - 2) * 1}rem` }}>
                    <a href={`#${item.id}`}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </TableOfContents>
          )}

          <BlogContent
            dangerouslySetInnerHTML={{ __html: blogData.contentHtml }}
          />

          <SocialShare>
            <ShareButton onClick={() => handleShare('twitter')}>
              Share on Twitter
            </ShareButton>
            <ShareButton
              className="linkedin"
              onClick={() => handleShare('linkedin')}>
              Share on LinkedIn
            </ShareButton>
            <ShareButton onClick={() => handleShare('copy')}>
              Copy Link
            </ShareButton>
          </SocialShare>

          {relatedPosts && relatedPosts.length > 0 && (
            <RelatedPosts>
              <h3>Related Posts</h3>
              {relatedPosts.map(post => (
                <RelatedPostCard key={post.id}>
                  <h4>
                    <Link href={`/blogs/${post.id}`}>{post.title}</Link>
                  </h4>
                  <p>{post.excerpt}</p>
                </RelatedPostCard>
              ))}
            </RelatedPosts>
          )}

          <BlogFooter>
            <p>Thanks for reading! Share this post if you found it helpful.</p>
          </BlogFooter>
        </BlogContainer>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllBlogIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const blogData = await getBlogData(params.id)
  const allBlogs = getAllBlogs()

  // Get related posts (same tags or recent posts)
  const relatedPosts = allBlogs
    .filter(blog => blog.id !== params.id)
    .slice(0, 3)

  return {
    props: {
      blogData,
      relatedPosts
    }
  }
}
