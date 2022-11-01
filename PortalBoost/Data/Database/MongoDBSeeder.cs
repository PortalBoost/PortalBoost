namespace PortalBoost.Data.Database
{
    using MongoDB.Bson.Serialization;
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

        // TODO: Get values directly from MongoDbSettings instead of hardcoding them in
        public MongoDBSeeder()
        {
            MongoClient client = new("mongodb://localhost:27017");
            _database = client.GetDatabase("PortalBoost");

            _userCollection = _database.GetCollection<User>("Users");
            _companyCollection = _database.GetCollection<Company>("Companies");
        }

        public async void SeedMockData()
        {
            string userSeedDataText = ReadTextFromFile("usersSeedData.json");
            string companySeedDataText = ReadTextFromFile("companiesSeedData.json");
            var usersCollectionDocument = BsonSerializer.Deserialize<IEnumerable<User>>(userSeedDataText);
            var companiesCollectionDocument = BsonSerializer.Deserialize<IEnumerable<Company>>(companySeedDataText);

            DropAllCollections();
            await _companyCollection.InsertManyAsync(companiesCollectionDocument);
            await _userCollection.InsertManyAsync(usersCollectionDocument);
        }

        // TODO: Error handling
        private string ReadTextFromFile(string filename)
        {
            string filePath = Environment.CurrentDirectory + $@"\{filename}";

            using StreamReader sr = new(filePath);

            return sr.ReadToEnd();
        }

        private void DropAllCollections()
        {
            DropDbCollection("Users");
            DropDbCollection("Companies");
        }

        private void DropDbCollection(string collectionName) => _database.DropCollection(collectionName);
    }
}
