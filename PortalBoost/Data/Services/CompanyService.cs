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


        /// <summary>
        /// Gets a company by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<Company> GetCompanyById(string id)
        {
            return (await _companyCollection.FindAsync(c => c.ID == id)).FirstOrDefault();
        }

        /// <summary>
        /// Deletes a company by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<DeleteResult> DeleteAsync(string id) => await _companyCollection.DeleteOneAsync(c => c.ID == id);

        /// <summary>
        /// Finds a company belonging to the sent in <paramref name="user"/>.
        /// </summary>
        /// <param name="user">The user.</param>
        /// <returns>The found company or null.</returns>
        public async Task<Company> FindUserAtCompany(User user)
        {
            var findUserFilter = Builders<Company>.Filter.ElemMatch(x => x.Employees, e => e.ID == user.ID);
            return await _companyCollection.Find(findUserFilter).FirstOrDefaultAsync();
        }

        /// <summary>
        /// Deletes the chosen user at a company.
        /// </summary>
        /// <param name="user">The user.</param>
        public async Task DeleteUserAtCompany(User user)
        {
            var companyFilter = Builders<Company>.Filter.ElemMatch(x => x.Employees, e => e.ID == user.ID);
            var removeFilter = Builders<Company>.Update.PullFilter(x => x.Employees, e => e.ID == user.ID);
            await _companyCollection.UpdateOneAsync(companyFilter, removeFilter);
        }

        /// <summary>
        /// Adds a user to the selected company.
        /// </summary>
        /// <param name="company">The company.</param>
        /// <param name="userToAdd">The user to add.</param>
        public async Task AddUser(Company company, User userToAdd)
        {
            var companyFilter = Builders<Company>.Filter.Eq(x => x.ID, company.ID);
            var update = Builders<Company>.Update.AddToSet("employees", userToAdd);
            await _companyCollection.UpdateOneAsync(companyFilter, update);
        }
    }
}
