import glob from 'fast-glob'
interface Article {
  title: string
  description: string
  author: string
  date: string
}

export interface ArticleWithSlug extends Article {
  slug: string
}

async function importArticle(
  articleFilename: string,
): Promise<ArticleWithSlug> {
  const { article } = (await import(`content/articles/${articleFilename}`)) as {
    default: React.ComponentType
    article: Article
  };
  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

 async function getAllArticles() {
  const articleFilenames = await glob('*/page.mdx', {
    cwd: 'content/articles',
  })
  const articles = await Promise.all(articleFilenames.map((filename)=>importArticle(filename)));

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date))
}

export default getAllArticles;