using System.ComponentModel.DataAnnotations;

namespace AdminPanel.Models;

public class Blog
{
    public int Id { get; set; }

    [Required(ErrorMessage = "Başlık zorunludur")]
    [StringLength(200, ErrorMessage = "Başlık en fazla 200 karakter olabilir")]
    public string Title { get; set; } = string.Empty;

    [Required(ErrorMessage = "İçerik zorunludur")]
    public string Content { get; set; } = string.Empty;

    [Required(ErrorMessage = "Özet zorunludur")]
    [StringLength(500, ErrorMessage = "Özet en fazla 500 karakter olabilir")]
    public string Summary { get; set; } = string.Empty;

    public string? ImageUrl { get; set; }

    [Required(ErrorMessage = "Yazar adı zorunludur")]
    public string Author { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public bool IsPublished { get; set; }
} 