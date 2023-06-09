using Bragi.Managers;
using Bragi.Utils;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
string root = Directory.GetCurrentDirectory();
DotEnv.Load(Path.Combine(root, ".env"));
string? server = Environment.GetEnvironmentVariable("SERVER");
string? db = Environment.GetEnvironmentVariable("DATABASE");
string? username = Environment.GetEnvironmentVariable("USERNAME");
string? password = Environment.GetEnvironmentVariable("PASSWORD");

if (new[] {server, db, username, password}.Any(s => string.IsNullOrEmpty(s)))
{
    throw new ArgumentNullException("Config Was Not completed");
}

builder.Services.AddTransient(s => new DatabaseManager(server!, db!, username!, password!));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
