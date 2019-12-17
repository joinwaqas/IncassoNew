using IncassoNewApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IncassoNewApi.Services
{
    public class UserService : IUserService
    {
        private readonly IncassoNewDBContext db;
        public UserService(IncassoNewDBContext _db)
        {
            this.db = _db;
        }

        public User GetUser(User user)
        {
            return db.Users.Where(x => x.EmailAddress == user.EmailAddress && x.Password == user.Password).FirstOrDefault();
        }

        public User RegisterUser(User user)
        {
            User newUser = new User();
            newUser.UserName = user.UserName;
            newUser.Password = user.Password;
            db.Users.Add(newUser);
            db.SaveChanges();
            return newUser;
        }
        public List<User> GetAllUsers()
        {
            return db.Users.ToList();
        }

    }
}
