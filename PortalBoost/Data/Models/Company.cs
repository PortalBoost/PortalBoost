namespace PortalBoost.Data.Models
{
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class Company
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? ID { get; set; }

        public string Name { get; set; } = "";

        public IEnumerable<string>? Description { get; set; }

        public IEnumerable<string>? Techniques { get; set; }

        [BsonElement("systemsUsed")]
        public IEnumerable<string>? SystemsUsed { get; set; }

        public IEnumerable<User>? Employees { get; set; }

    }
}
