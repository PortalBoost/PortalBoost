using Microsoft.EntityFrameworkCore;
using PortalBoost.Data.Models;

namespace PortalBoost.Data.DB
{
    public class AppDbContex : DbContext
    {
        public DbSet<Model> ModelName { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("connStr");
        }
    }
}
