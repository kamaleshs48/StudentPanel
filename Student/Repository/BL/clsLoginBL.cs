using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Student.Models;
using Student.Repository.DL;
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

    }
}