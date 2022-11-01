namespace PortalBoost.Data.Database
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    /// <summary>
    /// Simple class used to store the values of MongoDB database settings from appsettings.json
    /// </summary>
    public class MongoDBSettings
    {
        public string ConnectionURI { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;
        public string CompanyCollection { get; set; } = null!;
        public string UserCollection { get; set; } = null!;
    }
}
