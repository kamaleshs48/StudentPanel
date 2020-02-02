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
            return clsLoginDL.ForgotPassword(models);
        }
        public static List<SelectListItem> GetInstituteList()
        {
            return clsLoginDL.GetInstituteList();
        }
        public static int UpdateStudentInfo(string Fname, string Lname, string institute, string gender, string id)
        {
            return clsLoginDL.UpdateStudentInfo(Fname, Lname, institute, gender, id);
        }
        public static int UpdateDiscription(string Diss, string id)
        {
            return clsLoginDL.UpdateDiscription(Diss, id);
        }
        public static int UpdateContactInfo(string Mobile, string Email, string Location, string Linkdin, string Facebook, string Twitter, string Skype, string id)
        {
            return clsLoginDL.UpdateContactInfo(Mobile, Email, Location, Linkdin, Facebook, Twitter, Skype, id);
        }
    }
}