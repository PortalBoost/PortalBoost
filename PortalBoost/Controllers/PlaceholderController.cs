namespace PortalBoost.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;

    [ApiController]
    [Route("api/[controller]")]
    public class Placeholder : ControllerBase
    {
        [HttpGet]
        public string HelloWorld()
        {
            return "Hello World";
        }
    }
}
