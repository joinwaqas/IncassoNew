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
    public class UserController : Controller
    {
        private readonly IUserService service;
        public UserController(IUserService _service)
        {
            this.service = _service;
        }
        [HttpPost("UserLogin")]
        public ActionResult<User> UserLogin([FromBody] User userData)
        {
            var getUser = service.GetUser(userData);

            if (getUser != null)
            {
                return Ok(getUser);
            }
            else
            {
                return NotFound();
            }
        }
        [HttpPost("RegisterUser")]
        public ActionResult<User> RegisterUser([FromBody] User userData)
        {
            var CreateUser = service.RegisterUser(userData);

            if (CreateUser != null)
            {
                return Json(1);
            }
            else
            {
                return Json(0);
            }
        }
        [HttpGet("GetAllUsers")]
        public ActionResult GetAllUsers()
        {
            var allUsers = service.GetAllUsers();

            return Json(allUsers);
        }

    }
}