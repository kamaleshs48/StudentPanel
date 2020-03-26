using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Student.Models
{
    public class ResponseModels:ProfileModels
    {
       
        public MethodResponse Response { get; set; }

    }
    public enum MethodResponse
    {
        Success,
        Invalid_Email_And_Password,
        SomthingWorng,

    }
    public static class SessionVariable
    {
        public const string LoginUserDetails = "LoginUserDetails";
        public const string UserID = "UserID";
        public const string ExamPanelURL = "ExamPanelURL";
        
    }



    public class TestQuestionReportModels
    {
        public string QNo { get; set; }
        public string Question { get; set; }
        public string Answer_Key { get; set; }
        public string Response_Key { get; set; }
        public string PaperName { get; set; }
        public string StudentName { get; set; }

        public int Question_TypeID { get; set; }
        public string OptionA { get; set; }
        public string OptionB { get; set; }
        public string OptionC { get; set; }
        public string OptionD { get; set; }


        public List<TestQuestionReportModels> _QList = new List<TestQuestionReportModels>();
    }
}