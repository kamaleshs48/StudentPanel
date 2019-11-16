using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Student.Repository.DL;
using System.Data;
using Student.Models;
using Student.Filters;

namespace Student.Controllers
{
    [UrlCopyAttribute]
    public class LiveController : Controller
    {
        //
        // GET: /Live/

        public ActionResult MySession(string id)
        {
            if (!string.IsNullOrEmpty(id))
            {

                ResponseModels models = new ResponseModels();
                models = (ResponseModels)Session[SessionVariable.LoginUserDetails];


                DataSet ds = CommanFunction.GetDataSet("Select * from tbl_ScheduleClassMaster where ClassID=" + CommanFunction.UrlDecode(id));

                if (ds != null && ds.Tables[0].Rows.Count > 0)
                {
                    string s = "https://api.braincert.com/v2/getclasslaunch?apikey=008ue0CmckjvtN3czdIi&class_id=" +
                        ds.Tables[0].Rows[0]["ClassID"].ToString() + "&userId=" + models.UserID.ToString() +
                        "&userName=" + models.FirstName + "&isTeacher=0&lessonName=" +
                        ds.Tables[0].Rows[0]["LessionName"].ToString() + "&courseName=" + ds.Tables[0].Rows[0]["LessionName"].ToString() + "";
                    s = "http://roken4life.com/online/Class.aspx?Method=GETLINK&class_id=" +
                          ds.Tables[0].Rows[0]["ClassID"].ToString() + "&userId=" + models.UserID.ToString() +
                          "&userName=" + models.FirstName + "&isTeacher=0&lessonName=" +
                          ds.Tables[0].Rows[0]["LessionName"].ToString() + "&courseName=" + ds.Tables[0].Rows[0]["LessionName"].ToString() + "";
                    s = CommanFunction.GetResponse(s);
                    ViewBag.Src = s;


                    Response.Redirect(s);

                }

                return View();
            }
            else
            {
                ViewBag.ErrorText = "Somthing worng";
                return View();
            }

        }
        public ActionResult SessionList()
        {
            ScheduleClassModels model = new ScheduleClassModels();
            if (Session[SessionVariable.LoginUserDetails] != null)
            {

                ResponseModels models = new ResponseModels();
                models = (ResponseModels)Session[SessionVariable.LoginUserDetails];
                model.ScheduleClassList = CommanFunction.MyScheduleClassList(models.UserID);
            }
            else
            {
                return RedirectToAction("Login", "Home");
            }

            return View(model);
        }
    }
}
