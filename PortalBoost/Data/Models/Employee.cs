namespace PortalBoost.Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class Employee
    {
        public int ID { get; set; }

        public int UserID { get; set; }
        public int CompanyID { get; set; }

        public User? User { get; set; }
        public Company? Company { get; set; }
    }
}
