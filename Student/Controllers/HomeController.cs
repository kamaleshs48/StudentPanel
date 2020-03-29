using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Student.Models;
using Student.Repository.BL;
using Student.Filters;
using System.IO;

namespace Student.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        // Code change by praveen
        public ActionResult Index()
        {

            var ffMpeg = new NReco.VideoConverter.FFMpegConverter();
            ffMpeg.ConvertMedia("D:\\Video\\input.mov", "D:\\Video\\output.mp4", Format.mp4);


            return View();
        }
        public ActionResult DashBoard()
        {
            return View();
        }
        public ActionResult ChangePassword()
        {
            ResponseModels _ResponseModel = new ResponseModels();
            ProfileModels model = new ProfileModels();
            if (Session[SessionVariable.LoginUserDetails] != null)
            {
                _ResponseModel = (ResponseModels)Session[SessionVariable.LoginUserDetails];
                model.FirstName = _ResponseModel.FirstName;
                model.LastName = _ResponseModel.LastName;
                model.UserID = _ResponseModel.UserID;
            }
            return View(model);
        }
        [UrlCopyAttribute]
        public ActionResult MemberProfile()
        {
            ResponseModels _ResponseModel = new ResponseModels();
            ProfileModels model = new ProfileModels();
            if (Session[SessionVariable.LoginUserDetails] != null)
            {
                _ResponseModel = (ResponseModels)Session[SessionVariable.LoginUserDetails];
                model.FirstName = _ResponseModel.FirstName;
                model.LastName = _ResponseModel.LastName;
                model.UserID = _ResponseModel.UserID;
                model.Address = _ResponseModel.Address;
                model.Gender = _ResponseModel.Gender;
                model.MobilePhone = _ResponseModel.MobilePhone;
                model.Email = _ResponseModel.Email;
                model.LinkedIn = _ResponseModel.LinkedIn;
                model.Facebook = _ResponseModel.Facebook;
                model.Twitter = _ResponseModel.Twitter;
                model.Skyup = _ResponseModel.Skyup;
                model.InstituteName = _ResponseModel.InstituteName;
                model.Discription = _ResponseModel.Discription;
                model.setLogo = _ResponseModel.setLogo;
                Session["ProfileImg"] = model.setLogo;
                Session[SessionVariable.UserID] = _ResponseModel.UserID;
                return View(model);
            }
            else
            {
                return RedirectToAction("Login");
            }
        }

        [HttpGet]

        public ActionResult Login()
        {
            LoginModels models = new LoginModels();
            models.ORG_ID = "10";
            models.InstituteList = clsLoginBL.GetInstituteList();


            return View(models);
        }
        [HttpPost]
        public ActionResult Login(LoginModels models)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    ResponseModels result = clsLoginBL.Login(models);
                    if (result.Response == MethodResponse.Success)
                    {
                        Session[SessionVariable.LoginUserDetails] = result;
                        Session["ProfileImg"] = result.setLogo;
                        Session["FirstName"] = result.FirstName;
                        Session[SessionVariable.UserID] = result.UserID;
                        return RedirectToAction("Index", "Test");
                    }
                    else
                    {
                        ModelState.AddModelError("", "Invalid Email or Password.");
                    }
                }
            }
            catch (Exception ex)
            {
                ViewBag.Error = ex.ToString();

            }
            models.InstituteList = clsLoginBL.GetInstituteList();
            return View(models);
        }


        [HttpGet]
        [ActionName("forgot-password")]
        public ActionResult ForgotPassword()
        {
            ForgotPasswordModels model = new ForgotPasswordModels();
            return View(model);
        }

        [HttpPost]
        [ActionName("forgot-password")]
        public ActionResult ForgotPassword(ForgotPasswordModels models)
        {
            if (ModelState.IsValid)
            {
                clsLoginBL.ForgotPassword(models);
            }
            return View();
        }

        [HttpGet]
        public ActionResult MyTest()
        {
            TestModels models = new TestModels();
            for (int i = 1; i < 20; i++)
            {
                models.TestList.Add(new TestModels { TestName = "Test #" + i.ToString(), TotalMarks = 50 + i, TotalQuestion = 10 + 1 });
            }
            return View(models);
        }
        public ActionResult TestReport()
        {
            return View();

        }
        public ActionResult EBooks()
        {
            return View();
        }

        public ActionResult MyDocuments()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Register()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Register(ProfileModels models)
        {
            if (ModelState.IsValid)
            {
                var m = models.Email;
            }
            return View();
        }
        [HttpPost]
        public ActionResult UploadFiles()
        {
            // Checking no of files injected in Request object  
            if (Request.Files.Count > 0)
            {
                try
                {
                    string ID = Request.Form[0];
                    //  Get all files from Request object  
                    HttpFileCollectionBase files = Request.Files;
                    for (int i = 0; i < files.Count; i++)
                    {
                        HttpPostedFileBase file = files[i];
                        string fname;

                        // Checking for Internet Explorer  
                        if (Request.Browser.Browser.ToUpper() == "IE" || Request.Browser.Browser.ToUpper() == "INTERNETEXPLORER")
                        {
                            string[] testfiles = file.FileName.Split(new char[] { '\\' });
                            fname = testfiles[testfiles.Length - 1];
                        }
                        else
                        {
                            fname = file.FileName;
                        }
                        int a = clsLoginBL.UpdateProfile(fname, ID);
                        ResponseModels _ResponseModel = new ResponseModels();
                        if (Session[SessionVariable.LoginUserDetails] != null)
                        {
                            _ResponseModel = (ResponseModels)Session[SessionVariable.LoginUserDetails];
                            _ResponseModel.setLogo = "Images/" + fname;
                            Session["ProfileImg"] = _ResponseModel.setLogo;
                            Session[SessionVariable.LoginUserDetails] = _ResponseModel;

                        }
                        fname = Path.Combine(Server.MapPath("~/Images/"), fname);
                        file.SaveAs(fname);
                    }
                    // Returns message that successfully uploaded  
                    return Json("File Uploaded Successfully!");
                }
                catch (Exception ex)
                {
                    return Json("Error occurred. Error details: " + ex.Message);
                }
            }
            else
            {
                return Json("No files selected.");
            }
        }
        [HttpPost]
        public ActionResult ChangeStudentPassword()
        {
            try
            {
                string ID = Request.Form[0];
                string oldpass = Request.Form[1];
                string newpass = Request.Form[2];
                string cnfpass = Request.Form[3];


                int a = clsLoginBL.UpdateProfile(oldpass,newpass, ID);
                if (a == 2)
                {
                    return Json("The Current Password is invalid!");
                }
                else
                {
                    return Json("File Uploaded Successfully!");
                }
            }
            catch (Exception ex)
            {
                return Json("Error occurred. Error details: " + ex.Message);
            }

        }
        public void UpdateDetails(string FirstName, string LastName, string InstituteName, string Gender, string ID)
        {
            int a = clsLoginBL.UpdateStudentInfo(FirstName, LastName, InstituteName, Gender, ID);
            ResponseModels _ResponseModel = new ResponseModels();
            if (Session[SessionVariable.LoginUserDetails] != null)
            {
                _ResponseModel = (ResponseModels)Session[SessionVariable.LoginUserDetails];
                _ResponseModel.FirstName = FirstName;
                _ResponseModel.LastName = LastName;
                _ResponseModel.InstituteName = InstituteName;
                _ResponseModel.Gender = Gender;
                Session[SessionVariable.LoginUserDetails] = _ResponseModel;

            }
        }
        public void UpdateDiscription(string Diss, string ID)
        {
            int a = clsLoginBL.UpdateDiscription(Diss, ID);
            ResponseModels _ResponseModel = new ResponseModels();
            if (Session[SessionVariable.LoginUserDetails] != null)
            {
                _ResponseModel = (ResponseModels)Session[SessionVariable.LoginUserDetails];
                _ResponseModel.Discription = Diss;
                Session[SessionVariable.LoginUserDetails] = _ResponseModel;

            }
        }
        public void UpdateContactDetails(string Mobile, string Email, string Location, string Linkdin, string Facebook, string Twitter, string Skype, string id)
        {
            int a = clsLoginBL.UpdateContactInfo(Mobile, Email, Location, Linkdin, Facebook, Twitter, Skype, id);
            ResponseModels _ResponseModel = new ResponseModels();
            if (Session[SessionVariable.LoginUserDetails] != null)
            {
                _ResponseModel = (ResponseModels)Session[SessionVariable.LoginUserDetails];
                _ResponseModel.MobilePhone = Mobile;
                _ResponseModel.Email = Email;
                _ResponseModel.Address = Location;
                _ResponseModel.LinkedIn = Linkdin;
                _ResponseModel.Facebook = Facebook;
                _ResponseModel.Twitter = Twitter;
                _ResponseModel.Skyup = Skype;
                Session[SessionVariable.LoginUserDetails] = _ResponseModel;

            }
        }


        public ActionResult Test()
        {
            return View();
        }
        public ActionResult Test2()
        {
            return View();
        }
        public ActionResult TestFinal()
        {
            return View();
        }
    }
}
