using Student.Filters;
using Student.Models;
using Student.Repository.DL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Student.Controllers
{
    [UrlCopyAttribute]
    public class TestController : Controller
    {
        //
        // GET: /Test/


        public TestController()
        {
            System.Web.HttpContext.Current.Session[SessionVariable.ExamPanelURL] = System.Configuration.ConfigurationManager.AppSettings["ExamPanelURL"].ToString();
        }

        public ActionResult Index()
        {
            TestPaperModels models = new TestPaperModels();
            models.PaperList = CommanFunction.GetMyAssignPaperList(Convert.ToInt32(System.Web.HttpContext.Current.Session[SessionVariable.UserID].ToString()));
            return View(models);
        }
        public ActionResult Unattended()
        {
            TestPaperModels models = new TestPaperModels();
            models.PaperList = CommanFunction.GetMyAssignPaperList(Convert.ToInt32(System.Web.HttpContext.Current.Session[SessionVariable.UserID].ToString()));
            return View(models);
        }
        public ActionResult Completed()
        {
            TestPaperModels models = new TestPaperModels();
            models.PaperList = CommanFunction.GetCompletedPaperList(Convert.ToInt32(System.Web.HttpContext.Current.Session[SessionVariable.UserID].ToString()));
            return View(models);
        }
        public ActionResult TestReport(string id, string SID)
        {
            ScoreBoardModels models = new ScoreBoardModels();

            if (!string.IsNullOrEmpty(id) && !string.IsNullOrEmpty(SID))
            {
                models = CommanFunction.GetStudentScoreBoard(CommanFunction.UrlDecode(id), CommanFunction.UrlDecode(SID));
            }
            return View(models);

        }
        public ActionResult TestReportByQuestion(int PID)
        {
            TestQuestionReportModels models = new TestQuestionReportModels();

            DataSet ds = CommanFunction.GetQuestionReportDS(PID, Convert.ToInt32(System.Web.HttpContext.Current.Session[SessionVariable.UserID].ToString()));

            if (ds != null && ds.Tables[0].Rows.Count > 0)
            {
                int Index = 1;
                foreach (DataRow dr in ds.Tables[0].Rows)
                {
                    models._QList.Add(new TestQuestionReportModels
                    {
                        QNo = Index.ToString(),
                        Question = dr["Question_Lang1"].ToString(),
                        Answer_Key = dr["Answer_Key"].ToString(),
                        Response_Key = dr["Response_Key"].ToString(),
                        OptionA=dr["OptionA_Lang1"].ToString(),
                        OptionB = dr["OptionB_Lang1"].ToString(),
                        OptionC = dr["OptionC_Lang1"].ToString(),
                        OptionD = dr["OptionD_Lang1"].ToString(),
                        Question_TypeID = Convert.ToInt32( dr["Question_Type_ID"].ToString()),
                    });

                    Index += Index;
                }

                models.PaperName = ds.Tables[2].Rows[0]["Paper_Name"].ToString();
                models.StudentName = ds.Tables[1].Rows[0]["First_Name"].ToString();


            }
            return View(models);
        }
    }
}
