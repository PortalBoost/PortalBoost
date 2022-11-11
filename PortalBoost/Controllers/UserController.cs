namespace PortalBoost.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using MongoDB.Driver;
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

        [HttpGet("GetUserById")]
        public async Task<ActionResult<User>> Get(string id)
        {
            var user = await _userService.GetUserById(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpDelete("DeleteUser")]
        public async Task<ActionResult<DeleteResult>> Delete(string id)
        {
            var deletion = await _userService.DeleteAsync(id);
            if (deletion.IsAcknowledged)
            {
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }
    }
}
