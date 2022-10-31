namespace PortalBoost.Data.Models
{
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public int ID { get; set; }

        [BsonElement("userName")]
        public string UserName { get; set; } = "";

        [BsonElement("firstName")]
        public string FirstName { get; set; } = "";

        [BsonElement("lastName")]
        public string LastName { get; set; } = "";

        public string Email { get; set; } = "";

        [BsonElement("oneLiner")]
        public string OneLiner { get; set; } = "";

        public string Presentation { get; set; } = "";

        public string Skill { get; set; } = "";

        public string Title { get; set; } = "";

        public string Hash { get; set; } = "";

        public string Salt { get; set; } = "";
    }
}
