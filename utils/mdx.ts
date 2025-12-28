import { promises as fs } from 'fs';
import path from 'path';
import { readFile } from 'node:fs/promises'

import { compile } from '@mdx-js/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'


export interface Article {
  title: string;
  description: string;
  author: string;
  date: string;
  slug?: string;
}

// Article shape with a required slug for typed consumers
export type ArticleMatter = Article & { slug: string }

export async function parseModuleExports(content: string): Promise<Article> {
  try {
    // Regular expression to match the article export object with more flexible formatting
    const articleRegex = /export\s+const\s+article\s*=\s*({[\s\S]*?});?\s*$/m;
    const match = content.match(articleRegex);

    if (!match) {
      throw new Error('No article export found');
    }

    // Extract the object literal string
    let objectStr = match[1];

    // Clean up the object string for parsing
    objectStr = objectStr
      // Handle multiline strings
      .replace(/`([^`]*)`/g, (_, content) => JSON.stringify(content))
      // Handle single quotes
      .replace(/'/g, '"')
      // Handle trailing commas
      .replace(/,(\s*})/g, '$1')
      // Handle unquoted property names
      .replace(/(\s*)(\w+)(\s*):(\s*)/g, '$1"$2"$3:$4');

    try {
      // Try parsing the cleaned object string
      const articleData = JSON.parse(objectStr);
      
      // Validate required fields
      const requiredFields = ['title', 'description', 'author', 'date'];
      for (const field of requiredFields) {
        if (!articleData[field]) {
          throw new Error(`Missing required field: ${field}`);
        }
      }

      return articleData;
    } catch (parseError) {
      const errorMessage =
        parseError instanceof Error ? parseError.message : String(parseError)
      // If JSON parsing fails, throw a more detailed error
      throw new Error(`Failed to parse article data: ${errorMessage}\nProcessed string: ${objectStr}`);
    }
  } catch (error) {
    console.error('Error parsing module exports:', error);
    throw error;
  }
}

export async function getAllArticles() {
  try {

    const articlesPath = path.join(process.cwd(), 'content/articles');
    
    const files = await fs.readdir(articlesPath);
    const mdxFiles = files.filter(file => file.endsWith('.mdx'));

    const articles = await Promise.all(
      mdxFiles.map(async (filename) => {
        const filePath = path.join(articlesPath, filename);
        const { value } = await compile(await readFile(filePath), {
          jsx: true,
          remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter]
        })
        return value;
       // try {
         
          //content = await fs.readFile(filePath, 'utf8');
        //} catch (readError) {
          //console.error(`Error reading ${filename}:`, readError);
          //return null;
        //}
/*
        try {
          const articleData = await parseModuleExports(content);
          return {
            ...articleData,
            slug: filename.replace(/\.mdx$/, '')
          };
        } catch (parseError) {
          console.error(`Error processing ${filename}:`, parseError);
          // Log the content for debugging
          console.debug(`Content of ${filename}:`, content.slice(0, 500));
          return null;
        } */
      })
    );
    // Filter out any null results and sort by date
    return articles;
    // .filter((article): article is Article & { slug: string } => article !== null)
     // .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }  catch (error) {
    console.error('Error in getAllArticles:', error);
    throw error;
  } 
}