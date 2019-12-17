using IncassoNewApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IncassoNewApi.Services
{
    public interface IUserService
    {
        User GetUser(User user);
        User RegisterUser(User user);
        List<User> GetAllUsers();

    }
}
