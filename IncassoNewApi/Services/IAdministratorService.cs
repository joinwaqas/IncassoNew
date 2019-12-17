using IncassoNewApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IncassoNewApi.Services
{
    public interface IAdministratorService
    {
        List<Administrator> GetAllAdministrators();
        Administrator CreateNewAdministrator(Administrator administrator);
        public int DeleteAdministrator(int id);
    }
}
