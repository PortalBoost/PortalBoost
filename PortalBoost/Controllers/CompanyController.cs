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
    public class CompanyController : ControllerBase
    {
        private readonly CompanyService _companyService;

        public CompanyController(CompanyService companyService)
        {
            _companyService = companyService;
        }

        [HttpGet("AllCompanies")]
        public async Task<ActionResult<List<Company>>> Get()
        {
            var users = await _companyService.GetAsync();
            if (users == null) return NotFound();
            return Ok(users);
        }
    }
}
