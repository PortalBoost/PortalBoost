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

        /// <summary>
        /// Tries to find and return a user by username and password.
        /// </summary>
        /// <param name="username">The username.</param>
        /// <param name="password">The password.</param>
        /// <returns>Code 200 with a user object if a matching user is found. Code 404 not found if user could not be found.</returns>
        [HttpPost("LoginPass")]
        public async Task<ActionResult<User>> LoginUsingPassword([FromBody] User user)
        {
            var foundUser = await _userService.LoginPasswordAsync(user.Username, user.Password);
            if (foundUser == null) return NotFound();
            return Ok(foundUser);
        }
    }
}
