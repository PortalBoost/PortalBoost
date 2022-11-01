namespace PortalBoost.Data.Services
{
    using Microsoft.Extensions.Options;
    using MongoDB.Driver;
    using PortalBoost.Data.Database;
    using PortalBoost.Data.Models;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class CompanyService
    {
        private readonly IMongoCollection<Company> _companyCollection;

        public CompanyService(IOptions<MongoDBSettings> mongoDBSettings)
        {
            MongoClient client = new(mongoDBSettings.Value.ConnectionURI);
            IMongoDatabase database = client.GetDatabase(mongoDBSettings.Value.DatabaseName);
            _companyCollection = database.GetCollection<Company>(mongoDBSettings.Value.CompanyCollection);
        }

        /// <summary>
        /// Gets a list containing all companies.
        /// </summary>
        /// <returns> A list of companies </returns>
        public async Task<List<Company>> GetAsync() => await _companyCollection.Find(_ => true).ToListAsync();
    }
}
