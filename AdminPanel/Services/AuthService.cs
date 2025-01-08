using System.Security.Claims;
using Microsoft.AspNetCore.Components.Authorization;
using System.Text.Json;
using AdminPanel.Models;
using Blazored.LocalStorage;

namespace AdminPanel.Services;

public interface IAuthService
{
    Task<bool> LoginAsync(string username, string password);
    Task LogoutAsync();
    Task<User?> GetCurrentUserAsync();
}

public class AuthService : IAuthService
{
    private readonly ILocalStorageService _localStorage;
    private readonly AuthenticationStateProvider _authStateProvider;
    
    public AuthService(ILocalStorageService localStorage, AuthenticationStateProvider authStateProvider)
    {
        _localStorage = localStorage;
        _authStateProvider = authStateProvider;
    }
    
    public async Task<bool> LoginAsync(string username, string password)
    {
        // TODO: Gerçek API entegrasyonu burada yapılacak
        // Şimdilik test için sabit bir kullanıcı kullanıyoruz
        if (username == "admin" && password == "admin123")
        {
            var user = new User
            {
                Username = username,
                Email = "admin@example.com",
                Role = "Admin"
            };
            
            await _localStorage.SetItemAsync("user", JsonSerializer.Serialize(user));
            ((CustomAuthStateProvider)_authStateProvider).NotifyAuthenticationStateChanged();
            return true;
        }
        return false;
    }
    
    public async Task LogoutAsync()
    {
        await _localStorage.RemoveItemAsync("user");
        ((CustomAuthStateProvider)_authStateProvider).NotifyAuthenticationStateChanged();
    }
    
    public async Task<User?> GetCurrentUserAsync()
    {
        var userJson = await _localStorage.GetItemAsync<string>("user");
        if (string.IsNullOrEmpty(userJson))
            return null;
            
        return JsonSerializer.Deserialize<User>(userJson);
    }
} 