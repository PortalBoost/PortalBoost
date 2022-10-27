namespace PortalBoost.Data.DB
{
    using Microsoft.EntityFrameworkCore;

    public class AppDbInitializer
    {


        private readonly AppDbContext _context;

        public AppDbInitializer(AppDbContext context)
        {

            _context = context;
        }



        public void InitDb()
        {
            _context.Database.EnsureCreated();
            _context.Database.Migrate();
            
        }

    }
}
