import { NextResponse } from 'next/server';
import  getAllArticles  from '@/lib/articles';
import path from 'path';
import { promises as fs } from 'fs';
import {parseModuleExports }from '../../../utils/mdx'


export async function GET() {
  try {
    const articles = (await getAllArticles()).slice(0, 4);
    
    return NextResponse.json(
      { articles },
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch articles',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Optional: If you need to get a single article
export async function getArticleBySlug(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'content/articles', `${slug}.mdx`);
    const content = await fs.readFile(filePath, 'utf8');
    const articleData = await parseModuleExports(content);
    
    return {
      ...articleData,
      slug
    };
  } catch (error) {
    console.error(`Error getting article ${slug}:`, error);
    throw error;
  }
}
