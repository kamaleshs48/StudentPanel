using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Student.Models;
using Student.Repository.DL;
using System.Web.Mvc;
namespace Student.Repository.BL
{
    public class clsLoginBL
    {
        public static ResponseModels Login(LoginModels models)
        {

            return clsLoginDL.Login(models);
        }
        public static ResponseModels ForgotPassword(ForgotPasswordModels models)
        {
            return   clsLoginDL.ForgotPassword (models);
        }
        public static List<SelectListItem> GetInstituteList()
        {
            return clsLoginDL.GetInstituteList();
        }

    }
}