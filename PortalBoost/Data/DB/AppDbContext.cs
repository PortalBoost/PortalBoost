namespace PortalBoost.Data.DB
{
    using Microsoft.EntityFrameworkCore;
    using PortalBoost.Data.Models;

    public class AppDbContext : DbContext
    {

        // TODO: Create and apply a new migration upon running the program.
        // 
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            Database.Migrate();
              
        }

        //public DbSet<Model> ModelName { get; set; }
        public DbSet<Company>? Companies { get; set; }
        public DbSet<Employee>? Employees { get; set; }
        public DbSet<User>? Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Company>().ToTable("Company");
            modelBuilder.Entity<Employee>().ToTable("Employee");
            modelBuilder.Entity<User>().ToTable("User");



            modelBuilder.Entity<User>().HasData(
                new User { ID = 1, UserName = "user", FirstName = "John", LastName = "Doe" }
                );
        }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer("connStr");
        //}
    }
}
