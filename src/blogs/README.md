# Blog Posts

This directory contains all the blog posts for the portfolio website. Each blog post is a markdown file with frontmatter metadata.

## Adding a New Blog Post

1. Create a new `.md` file in this directory
2. Use kebab-case for the filename (e.g., `my-new-blog-post.md`)
3. Add frontmatter at the top of the file with the following structure:

```markdown
---
title: 'Your Blog Post Title'
date: 'YYYY-MM-DD'
author: 'Your Name'
excerpt: 'A brief description of your blog post that will appear in the blog listing.'
tags: ['Tag1', 'Tag2', 'Tag3']
---
```

4. Write your blog content in markdown format below the frontmatter
5. The blog will automatically appear on the `/blogs` page

## Frontmatter Fields

- **title**: The title of your blog post
- **date**: Publication date in YYYY-MM-DD format
- **author**: Your name or pen name
- **excerpt**: A brief description (1-2 sentences) that appears in the blog listing
- **tags**: An array of tags for categorizing your blog post

## Markdown Features

You can use standard markdown syntax in your blog posts:

- **Headers**: `#`, `##`, `###`, etc.
- **Bold**: `**text**` or `__text__`
- **Italic**: `*text*` or `_text_`
- **Code**: `` `code` `` for inline code
- **Code blocks**: ` ` ``` for multi-line code
- **Links**: `[text](url)`
- **Images**: `![alt text](image-url)`
- **Lists**: `- item` or `1. item`
- **Blockquotes**: `> quote`

## Example Blog Post

````markdown
---
title: 'My First Blog Post'
date: '2024-01-25'
author: 'Akhil Bhadran'
excerpt: 'This is my first blog post about web development and technology.'
tags: ['Web Development', 'JavaScript', 'React']
---

# My First Blog Post

This is the content of my blog post. You can write anything here using markdown syntax.

## Subsection

You can create subsections and include code examples:

```javascript
function hello() {
  console.log('Hello, World!')
}
```
````

## Conclusion

That's it! Your blog post will be automatically processed and displayed on the website.

```

## File Naming Convention

- Use kebab-case for filenames
- Make the filename descriptive but concise
- Avoid special characters except hyphens
- Examples: `getting-started-with-nextjs.md`, `react-hooks-guide.md`
```
