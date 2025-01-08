import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'blogs.json');

// Veri dosyasının varlığını kontrol et ve oluştur
if (!fs.existsSync(path.dirname(DATA_FILE))) {
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
}
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, '[]', 'utf-8');
}

export async function GET() {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf-8');
        const blogs = JSON.parse(data);
        return NextResponse.json(blogs);
    } catch (error) {
        console.error('Error reading blogs:', error);
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const blogs = await request.json();
        fs.writeFileSync(DATA_FILE, JSON.stringify(blogs, null, 2), 'utf-8');
        return NextResponse.json({ message: 'Blogs updated successfully' });
    } catch (error) {
        console.error('Error updating blogs:', error);
        return NextResponse.json({ error: 'Failed to update blogs' }, { status: 500 });
    }
} 