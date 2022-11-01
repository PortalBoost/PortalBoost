namespace PortalBoost.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using PortalBoost.Data.Models;
    using PortalBoost.Data.Services;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {

        private readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet("AllUsers")]
        public async Task<ActionResult<List<User>>> Get()
        {
            var users = await _userService.GetAsync();
            if (users == null) return NotFound();
            return Ok(users);
        }


    }
}
