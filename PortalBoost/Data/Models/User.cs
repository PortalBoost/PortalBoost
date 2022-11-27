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
        public string? ID { get; set; }

        public string Username { get; set; } = "";

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

        //TODO: Remove password field from model+database when/if hash+salt is implemented?
        public string Password { get; set; } = "";

        public string? Hash { get; set; }

        public string? Salt { get; set; }
    }
}
