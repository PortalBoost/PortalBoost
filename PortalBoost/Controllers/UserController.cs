namespace PortalBoost.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using PortalBoost.Data.DB;
    using PortalBoost.Data.Models;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {

        private readonly AppDbContext _context;

        public UserController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<User>> Get(int userId)
        {
            var foundUser = await _context.Users.Where(x => x.ID == userId).FirstOrDefaultAsync();
            return Ok(foundUser);
        }

        [HttpGet("AllUsers")]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            var foundUsers = await _context.Users.ToListAsync();
            return Ok(foundUsers);
        }

        [HttpPost]
        public async Task<ActionResult> Post(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return Ok(user);
        }

    }
}
