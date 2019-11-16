using Student.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Student.Controllers
{
    [UrlCopyAttribute]
    public class AdminController : Controller
    {
        //
        // GET: /Admin/
        [HttpGet]
        public ActionResult StudentRegistration()
        {
            return View();
        }
        [HttpGet]
        public ActionResult StudentList()
        {
            return View();
        }
    }
}
