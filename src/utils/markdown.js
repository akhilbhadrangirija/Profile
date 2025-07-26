import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const blogsDirectory = path.join(process.cwd(), 'src/blogs')

export function getAllBlogs() {
  // Get file names under /blogs
  const fileNames = fs.readdirSync(blogsDirectory)
  const allBlogsData = fileNames
    .filter(fileName => {
      // Exclude README.md and other non-blog files
      return fileName.endsWith('.md') && fileName !== 'README.md'
    })
    .map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')

      // Read markdown file as string
      const fullPath = path.join(blogsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the id
      return {
        id,
        ...matterResult.data
      }
    })

  // Sort posts by date
  return allBlogsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllBlogIds() {
  const fileNames = fs.readdirSync(blogsDirectory)
  return fileNames
    .filter(fileName => {
      // Exclude README.md and other non-blog files
      return fileName.endsWith('.md') && fileName !== 'README.md'
    })
    .map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
}

export async function getBlogData(id) {
  const fullPath = path.join(blogsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
