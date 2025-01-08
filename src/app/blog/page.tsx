import fs from 'fs';
import path from 'path';

interface Blog {
    id: number;
    title: string;
    content: string;
    summary: string;
    imageUrl?: string;
    author: string;
    createdAt: string;
    updatedAt?: string;
    isPublished: boolean;
}

async function getBlogs(): Promise<Blog[]> {
    const dataFile = path.join(process.cwd(), 'data', 'blogs.json');
    
    try {
        if (!fs.existsSync(path.dirname(dataFile))) {
            fs.mkdirSync(path.dirname(dataFile), { recursive: true });
        }
        
        if (!fs.existsSync(dataFile)) {
            fs.writeFileSync(dataFile, '[]', 'utf-8');
            return [];
        }
        
        const data = fs.readFileSync(dataFile, 'utf-8');
        const blogs = JSON.parse(data) as Blog[];
        return blogs.filter(blog => blog.isPublished);
    } catch (error) {
        console.error('Blog okuma hatası:', error);
        return [];
    }
}

export default async function BlogPage() {
    const blogs = await getBlogs();

    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Blog Yazıları
                    </h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        En son blog yazılarımızı keşfedin
                    </p>
                </div>

                {blogs.length > 0 ? (
                    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
                                {blog.imageUrl && (
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-48 w-full object-cover"
                                            src={blog.imageUrl}
                                            alt={blog.title}
                                        />
                                    </div>
                                )}
                                <div className="flex-1 p-6 flex flex-col justify-between">
                                    <div className="flex-1">
                                        <a href={`/blog/${blog.id}`} className="block">
                                            <h3 className="text-xl font-semibold text-gray-900 hover:text-indigo-600">
                                                {blog.title}
                                            </h3>
                                            <p className="mt-3 text-base text-gray-500">
                                                {blog.summary}
                                            </p>
                                        </a>
                                    </div>
                                    <div className="mt-6 flex items-center">
                                        <div className="flex-shrink-0">
                                            <span className="sr-only">Yazar</span>
                                            <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center">
                                                <span className="text-white font-semibold">
                                                    {blog.author.charAt(0).toUpperCase()}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900">
                                                {blog.author}
                                            </p>
                                            <div className="flex space-x-1 text-sm text-gray-500">
                                                <time dateTime={blog.createdAt}>
                                                    {new Date(blog.createdAt).toLocaleDateString('tr-TR')}
                                                </time>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="mt-12 text-center py-12 bg-white rounded-lg shadow">
                        <p className="text-gray-500 text-lg">
                            Henüz blog yazısı bulunmamaktadır.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
} 