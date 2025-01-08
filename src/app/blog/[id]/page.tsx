import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

interface Blog {
    id: number;
    title: string;
    content: string;
    summary: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
    isPublished: boolean;
}

async function getBlog(id: string): Promise<Blog | null> {
    const dataFile = path.join(process.cwd(), 'data', 'blogs.json');
    if (!fs.existsSync(dataFile)) {
        return null;
    }
    const data = fs.readFileSync(dataFile, 'utf-8');
    const blogs: Blog[] = JSON.parse(data);
    return blogs.find(blog => blog.id === parseInt(id)) || null;
}

export default async function BlogDetailPage({ params }: { params: { id: string } }) {
    const blog = await getBlog(params.id);

    if (!blog) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {blog.imageUrl && (
                    <div className="mb-8 rounded-lg overflow-hidden">
                        <img
                            src={blog.imageUrl}
                            alt={blog.title}
                            className="w-full h-96 object-cover"
                        />
                    </div>
                )}

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            {blog.title}
                        </h1>

                        <div className="flex items-center text-gray-500 text-sm mb-8">
                            <time dateTime={blog.createdAt}>
                                {new Date(blog.createdAt).toLocaleDateString('tr-TR')}
                            </time>
                            {blog.updatedAt && blog.updatedAt !== blog.createdAt && (
                                <span className="ml-4">
                                    (Güncellendi: {new Date(blog.updatedAt).toLocaleDateString('tr-TR')})
                                </span>
                            )}
                        </div>

                        <div className="prose prose-lg max-w-none">
                            {blog.content.split('\n').map((paragraph, index) => (
                                <p key={index} className="mb-4">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <a
                        href="/blog"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        ← Blog Listesine Dön
                    </a>
                </div>
            </article>
        </div>
    );
} 