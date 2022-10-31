namespace PortalBoost.Data.DBUtils
{
using MongoDB.Bson.Serialization.Conventions;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public static class BSONSettings
    {
        /// <summary>
        /// Registers a CamelCaseElementNameConvention-pack into MongoDB's BSON Settings
        /// Makes it easier to create case-insensitive models for use in the database, since the naming conventions of C# and MongoDB collections differ.
        /// </summary>
        public static void InitSettings()
        {
            var pack = new ConventionPack
            {
                new CamelCaseElementNameConvention()
            };

            ConventionRegistry.Register("Camel case convention", pack, _ => true);
        }
    }
}
