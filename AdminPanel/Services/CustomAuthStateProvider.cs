using System.Security.Claims;
using Microsoft.AspNetCore.Components.Authorization;
using System.Text.Json;
using AdminPanel.Models;
using Blazored.LocalStorage;

namespace AdminPanel.Services;

public class CustomAuthStateProvider : AuthenticationStateProvider
{
    private readonly ILocalStorageService _localStorage;
    
    public CustomAuthStateProvider(ILocalStorageService localStorage)
    {
        _localStorage = localStorage;
    }
    
    public override async Task<AuthenticationState> GetAuthenticationStateAsync()
    {
        var userJson = await _localStorage.GetItemAsync<string>("user");
        
        if (string.IsNullOrEmpty(userJson))
        {
            return new AuthenticationState(new ClaimsPrincipal(new ClaimsIdentity()));
        }
        
        var user = JsonSerializer.Deserialize<User>(userJson) ?? new User();
        var claims = new[]
        {
            new Claim(ClaimTypes.Name, user.Username),
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(ClaimTypes.Role, user.Role)
        };
        
        var identity = new ClaimsIdentity(claims, "Custom");
        return new AuthenticationState(new ClaimsPrincipal(identity));
    }
    
    public void NotifyAuthenticationStateChanged()
    {
        NotifyAuthenticationStateChanged(GetAuthenticationStateAsync());
    }
} 