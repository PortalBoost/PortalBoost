namespace PortalBoost.Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class Company
    {
        public int ID { get; set; }
        
        public int EmployeeID { get; set; }

        public string Name { get; set; } = "";
        public string CompanyInfo { get; set; } = "";

        public Employee? Employee { get; set; }
    }
}
