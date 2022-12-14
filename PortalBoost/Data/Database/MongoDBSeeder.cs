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

    /// <summary>
    /// Class used to seed a local MongoDB database.
    /// </summary>
    public class MongoDBSeeder
    {
        private readonly IMongoDatabase _database;
        private readonly IMongoCollection<User> _userCollection;
        private readonly IMongoCollection<Company> _companyCollection;

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

        /// <summary>
        /// Uses an isntance of StreamReader to read text-data from the <paramref name="filename"/> file.
        /// </summary>
        /// <param name="filename">The filename of the file to be read.</param>
        /// <returns>The read data</returns>
        private static string ReadTextFromFile(string filename)
        {
            string filePath = Environment.CurrentDirectory + $@"\{filename}";

            using StreamReader sr = new(filePath);

            return sr.ReadToEnd();
        }

        /// <summary>
        /// Manually drops the two database collections
        /// </summary>
        private void DropAllCollections()
        {
            DropDbCollection("Users");
            DropDbCollection("Companies");
        }

        /// <summary>
        /// Drops the database collection.
        /// </summary>
        /// <param name="collectionName">Name of the collection to be dropped.</param>
        private void DropDbCollection(string collectionName) => _database.DropCollection(collectionName);
    }
}
