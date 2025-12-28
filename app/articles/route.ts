import { NextResponse } from 'next/server';
import { getAllArticles } from '../../utils/mdx';

export async function GET() {
  try {
    const articles = await getAllArticles();
    
    return NextResponse.json({ articles }, { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}
