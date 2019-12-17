using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace IncassoNewApi.Models
{
    public class Administrator
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ID { get; set; }
        public string Name { get; set; }
        public string AdministratorNumber { get; set; }
        public string ContactPerson { get; set; }
        public string EmailAddress { get; set; }
        public string PhoneNumber { get; set; }
        public string MobileNumber { get; set; }
        public string Bank { get; set; }
        public string AccountNumber { get; set; }
        public string IBAN { get; set; }
        public string BIC { get; set; }
        public DateTime CreateDate { get; set; }

    }
}
