using System.Text.Json;
using Microsoft.Extensions.Configuration;
using System.Net.Http.Json;
using AdminPanel.Models;

namespace AdminPanel.Services;

public class BlogService : IBlogService
{
    private readonly string _dataPath;
    private readonly HttpClient _httpClient;
    private readonly IConfiguration _configuration;
    private List<Blog> _blogs;

    public BlogService(HttpClient httpClient, IConfiguration configuration)
    {
        _httpClient = httpClient;
        _configuration = configuration;
        
        // Ana dizine göre data/blogs.json yolunu ayarla
        var currentDirectory = Directory.GetCurrentDirectory();
        var projectRoot = Directory.GetParent(currentDirectory)?.FullName ?? currentDirectory;
        _dataPath = Path.Combine(projectRoot, "data", "blogs.json");
        
        // Data klasörünün varlığını kontrol et
        var dataDirectory = Path.GetDirectoryName(_dataPath);
        if (dataDirectory != null && !Directory.Exists(dataDirectory))
        {
            Directory.CreateDirectory(dataDirectory);
        }

        // Dosya yoksa oluştur
        if (!File.Exists(_dataPath))
        {
            File.WriteAllText(_dataPath, "[]");
        }
        
        _blogs = LoadBlogs();
    }

    private List<Blog> LoadBlogs()
    {
        try
        {
            var json = File.ReadAllText(_dataPath);
            var blogs = JsonSerializer.Deserialize<List<Blog>>(json);
            return blogs ?? new List<Blog>();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Blog yükleme hatası: {ex.Message}");
            return new List<Blog>();
        }
    }

    private async Task SaveBlogsAsync()
    {
        try
        {
            var json = JsonSerializer.Serialize(_blogs, new JsonSerializerOptions 
            { 
                WriteIndented = true 
            });
            await File.WriteAllTextAsync(_dataPath, json);
            await SyncWithNextJsApi();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Blog kaydetme hatası: {ex.Message}");
            throw;
        }
    }

    private async Task SyncWithNextJsApi()
    {
        try
        {
            var apiUrl = "http://localhost:3001/api/blogs";
            var response = await _httpClient.PostAsJsonAsync(apiUrl, _blogs);
            response.EnsureSuccessStatusCode();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"API sync hatası: {ex.Message}");
        }
    }

    public Task<List<Blog>> GetBlogsAsync()
    {
        _blogs = LoadBlogs(); // Her seferinde güncel verileri yükle
        return Task.FromResult(_blogs);
    }

    public Task<Blog?> GetBlogByIdAsync(int id)
    {
        _blogs = LoadBlogs(); // Her seferinde güncel verileri yükle
        var blog = _blogs.FirstOrDefault(b => b.Id == id);
        return Task.FromResult(blog);
    }

    public async Task<Blog> CreateBlogAsync(Blog blog)
    {
        try
        {
            _blogs = LoadBlogs(); // Güncel verileri yükle
            blog.Id = _blogs.Count > 0 ? _blogs.Max(b => b.Id) + 1 : 1;
            blog.CreatedAt = DateTime.Now;
            blog.UpdatedAt = DateTime.Now;
            
            _blogs.Add(blog);
            await SaveBlogsAsync();
            
            return blog;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Blog oluşturma hatası: {ex.Message}");
            throw;
        }
    }

    public async Task<Blog?> UpdateBlogAsync(Blog blog)
    {
        try
        {
            _blogs = LoadBlogs(); // Güncel verileri yükle
            var existingBlog = _blogs.FirstOrDefault(b => b.Id == blog.Id);
            if (existingBlog == null)
                return null;

            existingBlog.Title = blog.Title;
            existingBlog.Content = blog.Content;
            existingBlog.Summary = blog.Summary;
            existingBlog.ImageUrl = blog.ImageUrl;
            existingBlog.Author = blog.Author;
            existingBlog.UpdatedAt = DateTime.Now;
            existingBlog.IsPublished = blog.IsPublished;

            await SaveBlogsAsync();
            
            return existingBlog;
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Blog güncelleme hatası: {ex.Message}");
            throw;
        }
    }

    public async Task DeleteBlogAsync(int id)
    {
        try
        {
            _blogs = LoadBlogs(); // Güncel verileri yükle
            var blog = _blogs.FirstOrDefault(b => b.Id == id);
            if (blog == null)
                return;

            _blogs.Remove(blog);
            await SaveBlogsAsync();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Blog silme hatası: {ex.Message}");
            throw;
        }
    }
}