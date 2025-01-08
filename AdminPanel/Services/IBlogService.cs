using AdminPanel.Models;

namespace AdminPanel.Services;

public interface IBlogService
{
    Task<List<Blog>> GetBlogsAsync();
    Task<Blog?> GetBlogByIdAsync(int id);
    Task<Blog> CreateBlogAsync(Blog blog);
    Task<Blog?> UpdateBlogAsync(Blog blog);
    Task DeleteBlogAsync(int id);
} 