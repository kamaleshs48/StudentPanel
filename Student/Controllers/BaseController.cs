using Student.Filters;
using Student.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Student.Controllers
{
   
    public class BaseController : Controller
    {
        //
        // GET: /Base/http://localhost:18101/Properties/
        public int LoginUserID;
        public BaseController()
        {
            LoginUserID = Convert.ToInt32(System.Web.HttpContext.Current.Session[SessionVariable.UserID].ToString());
            System.Web.HttpContext.Current.Session[SessionVariable.ExamPanelURL] = System.Configuration.ConfigurationManager.AppSettings["ExamPanelURL"].ToString();
        }

       
    }
}
