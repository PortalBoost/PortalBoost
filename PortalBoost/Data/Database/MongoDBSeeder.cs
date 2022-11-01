namespace PortalBoost.Data.Database
{
    using MongoDB.Driver;
    using PortalBoost.Data.Models;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class MongoDBSeeder
    {
        private readonly IMongoDatabase _database;
        private readonly IMongoCollection<User> _userCollection;
        private readonly IMongoCollection<Company> _companyCollection;


        public MongoDBSeeder()
        {
            MongoClient client = new("mongodb://loclahost:27017");
            _database = client.GetDatabase("PortalBoost");

            _userCollection = _database.GetCollection<User>("Users");
            _companyCollection = _database.GetCollection<Company>("Companies");

        }

        //TODO: Seed stuff into the collections
    }
}
