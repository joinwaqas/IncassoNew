using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IncassoNewApi.Models;

namespace IncassoNewApi.Services
{
    public class AdministratorService : IAdministratorService
    {
        private readonly IncassoNewDBContext db;
        public AdministratorService(IncassoNewDBContext _db)
        {
            this.db = _db;
        }
        public List<Administrator> GetAllAdministrators()
        {
            return db.administrators.ToList();
        }
        public Administrator CreateNewAdministrator(Administrator administrator)
        {
            Administrator newAdministrator = new Administrator();
            newAdministrator.Name = administrator.Name;
            newAdministrator.AdministratorNumber = administrator.AdministratorNumber;
            newAdministrator.ContactPerson = administrator.ContactPerson;
            newAdministrator.EmailAddress = administrator.EmailAddress;
            newAdministrator.PhoneNumber = administrator.PhoneNumber;
            newAdministrator.MobileNumber = administrator.MobileNumber;
            newAdministrator.Bank = administrator.Bank;
            newAdministrator.AccountNumber = administrator.AccountNumber;
            newAdministrator.IBAN = administrator.IBAN;
            newAdministrator.BIC = administrator.BIC;
            newAdministrator.CreateDate = DateTime.Now;
            db.administrators.Add(newAdministrator);
            db.SaveChanges();

            return newAdministrator;
        }
        public int DeleteAdministrator(int id)
        {
            var findUser = db.administrators.Find(id);
            db.administrators.Remove(findUser);
            db.SaveChanges();
            return 1;
        }
    }
}
