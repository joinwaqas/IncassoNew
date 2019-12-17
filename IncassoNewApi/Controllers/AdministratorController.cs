using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IncassoNewApi.Models;
using IncassoNewApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace IncassoNewApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdministratorController : Controller
    {
        private readonly IAdministratorService service;

        public AdministratorController(IAdministratorService _service)
        {
            this.service = _service;
        }

        [HttpGet("GetAllAdministrators")]
        public ActionResult GetAllAdministrators()
        {
            var allAdministrators = service.GetAllAdministrators();

            if (allAdministrators.Count != 0)
            {
                return Json(allAdministrators);
            }
            else
            {
                return Json("Could not found");
            }

        }

        [HttpPost("CreateNewAdministrator")]
        public ActionResult CreateNewAdministrator([FromBody] Administrator administratorData)
        {
            if (administratorData != null)
            {
                var newAdministrator = service.CreateNewAdministrator(administratorData);
                if (newAdministrator != null)
                {
                    return Json(newAdministrator);
                }
            }
            return Json("something went wrong");
        }

        [HttpPost("DeleteAdministrator")]
        public ActionResult DeleteAdministrator([FromBody] int id)
        {
            int response = service.DeleteAdministrator(id);
            if (response == 1)
            {
                return Json(1);
            }
            else
            {
                return Json(0);
            }
        }
    }
}