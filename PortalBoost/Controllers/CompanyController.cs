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


        [HttpGet("GetCompanyById")]
        public async Task<ActionResult<Company>> Get(string id)
        {
            var company = await _companyService.GetCompanyById(id);
            if (company == null)
            {
                return NotFound();
            }
            return Ok(company);
        }

        [HttpDelete("DeleteCompany")]
        public async Task<ActionResult<DeleteResult>> Delete(string id)
        {
            var deletion = await _companyService.DeleteAsync(id);
            if (deletion.IsAcknowledged)
            {
                return Ok();
            } else
            {
                return NotFound();
            }
        }

        [HttpPut("AddEmployee/{id:length(24)}")]
        public async Task<ActionResult> AddEmployee(string id, User user)
        {
            var companyToUpdate = await _companyService.GetCompanyById(id);
            var userHasCompany = await _companyService.FindUserAtCompany(user);
            if (companyToUpdate == null) return NotFound("Invalid company ID");
            if (userHasCompany != null) await _companyService.DeleteUserAtCompany(user);
            await _companyService.AddUser(companyToUpdate, user);
            return Ok();
        }

    }
}
