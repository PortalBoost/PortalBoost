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

    public class UserService
    {
        private readonly IMongoCollection<User> _userCollection;

        public UserService(IOptions<MongoDBSettings> mongoDBSettings)
        {
            
        }
    }
}
