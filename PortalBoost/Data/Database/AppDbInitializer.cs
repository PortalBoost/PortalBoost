namespace PortalBoost.Data.Database
{
    using Microsoft.EntityFrameworkCore;
    using PortalBoost.Data.Models;

    public class AppDbInitializer
    {


        private readonly AppDbContext _context;

        public AppDbInitializer(AppDbContext context)
        {

            _context = context;
        }



        public void InitDb()
        {
            //_context.Database.EnsureCreated();
            //_context.Database.Migrate();
            
        }

        public void SeedDb()
        {
            _context.Users.Add(new User { UserName = "Test", ID = 1 });
        }

    }
}
