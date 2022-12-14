namespace PortalBoost.Data.Services
{
    using Microsoft.Extensions.Options;
    using MongoDB.Driver;
    using PortalBoost.Data.Database;
    using PortalBoost.Data.Models;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class UserService
    {
        private readonly IMongoCollection<User> _userCollection;

        /// <summary>
        /// Initializes a new instance of the <see cref="UserService"/> class. Using the settings stored in <see cref="MongoDBSettings"/>.
        /// </summary>
        /// <param name="mongoDBSettings">The mongo database settings.</param>
        public UserService(IOptions<MongoDBSettings> mongoDBSettings)
        {
            MongoClient client = new(mongoDBSettings.Value.ConnectionURI);
            IMongoDatabase database = client.GetDatabase(mongoDBSettings.Value.DatabaseName);
            _userCollection = database.GetCollection<User>(mongoDBSettings.Value.UserCollection);
        }

        /// <summary>
        /// Gets a list containing all users
        /// </summary>
        /// <returns> A list of users </returns>
        public async Task<List<User>> GetAsync()
        {
            return await _userCollection.Find(_ => true).ToListAsync();
        }

        /// <summary>
        /// Gets a user by id.
        /// </summary>
        /// <param name="id"> The id of the user to be found. </param>
        /// <returns>The first user with matching id.</returns>
        public async Task<User> GetUserById(string id)
        {
            return (await _userCollection.FindAsync(u => u.ID == id)).FirstOrDefault();
        }

        /// <summary>
        /// Deletes a user by id.
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public async Task<DeleteResult> DeleteAsync(string id)
        {
            return await _userCollection.DeleteOneAsync(u => u.ID == id);
        }

        /// <summary>
        /// Returns a user by username and password.
        /// </summary>
        /// <param name="username">The username.</param>
        /// <param name="password">The password.</param>
        /// <returns>A user with matching username and password.</returns>
        public async Task<User> LoginPasswordAsync(string username, string password)
        {
            return await _userCollection.Find(x => x.Username == username && x.Password == password).FirstOrDefaultAsync();
        }

        /// <summary>
        /// <para>Compares parameter <see cref="User"/> with UserCollection and applies changes to relevant <see cref="User"/>.</para>
        /// <para>Finds relevant <see cref="User"/> with the <see cref="User.ID"/> parameter.</para>
        /// </summary>
        /// <param name="user">User Object</param>
        /// <returns><see cref="ReplaceOneResult"/></returns>
        public async Task<ReplaceOneResult> UpdateUserAsync(User user)
        {
            return await _userCollection.ReplaceOneAsync(u => user.ID == u.ID, user);
        }
    }
}
