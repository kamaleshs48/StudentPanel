using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using Student.Repository.DL;
using System.Text.RegularExpressions;
using System.Net;
using System.IO;
using System.Text;
using System.Security.Cryptography;
using Student.Models;
namespace Student.Repository.DL
{
    public static class CommanFunction
    {


        public static string UrlEncode(string URL)
        {

            byte[] encoded = System.Text.Encoding.UTF8.GetBytes(URL.ToString());
            return Convert.ToBase64String(encoded);
        }

        public static string UrlEncode(int encodeMe)
        {
            byte[] encoded = System.Text.Encoding.UTF8.GetBytes(encodeMe.ToString());
            return Convert.ToBase64String(encoded);
        }


        public static string UrlDecode(string decodeMe)
        {
            byte[] encoded = Convert.FromBase64String(decodeMe);
            return System.Text.Encoding.UTF8.GetString(encoded);
        }

        public static DataSet GetDataSet(string Qry)
        {
            return SqlHelper.ExecuteDataset(SqlHelper.ConnectionStr(), CommandType.Text, Qry);
        }
        public static string GetResponse(string url)
        {
            try
            {
                WebRequest request = WebRequest.Create(url);
                // Set the Method property of the request to POST.
                request.Method = "GET";
                // Get the request stream.
                Stream dataStream = default(Stream);
                // = request.GetRequestStream();
                // Write the data to the request stream.
                // Get the response.
                WebResponse response = request.GetResponse();
                // Display the status.
                // Console.WriteLine(DirectCast(response, HttpWebResponse).StatusDescription)
                // Get the stream containing content returned by the server.
                dataStream = response.GetResponseStream();
                // Open the stream using a StreamReader for easy access.
                StreamReader reader = new StreamReader(dataStream);
                // Read the content.
                string responseFromServer = reader.ReadToEnd();
                // Display the content.
                // Console.WriteLine(responseFromServer)
                // Clean up the streams.
                reader.Close();
                dataStream.Close();
                response.Close();
                return responseFromServer;
            }
            catch
            {
                return "Error";
            }
        }
        public static DataTable JsonStringToDataTable(string jsonString)
        {
            DataTable dt = new DataTable();
            try
            {
                string[] jsonStringArray = Regex.Split(jsonString.Replace("[", "").Replace("]", ""), "},{");
                List<string> ColumnsName = new List<string>();

                foreach (string jSA in jsonStringArray)
                {
                    string[] jsonStringData = Regex.Split(jSA.Replace("{", "").Replace("}", ""), ",");
                    foreach (string ColumnsNameData in jsonStringData)
                    {
                        try
                        {
                            int idx = ColumnsNameData.IndexOf(":");
                            string ColumnsNameString = ColumnsNameData.Substring(0, idx - 1).Replace("\"", "");
                            if (!ColumnsName.Contains(ColumnsNameString))
                            {
                                ColumnsName.Add(ColumnsNameString);
                            }
                        }
                        catch (Exception ex)
                        {
                            throw new Exception(string.Format("Error Parsing Column Name : {0}", ColumnsNameData));
                        }
                    }
                    break; // TODO: might not be correct. Was : Exit For
                }
                foreach (string AddColumnName in ColumnsName)
                {
                    dt.Columns.Add(AddColumnName);
                }
                foreach (string jSA in jsonStringArray)
                {
                    string[] RowData__1 = Regex.Split(jSA.Replace("{", "").Replace("}", ""), ",");
                    DataRow nr = dt.NewRow();
                    foreach (string rowData__2 in RowData__1)
                    {
                        try
                        {
                            int idx = rowData__2.IndexOf(":");
                            string RowColumns = rowData__2.Substring(0, idx - 1).Replace("\"", "");
                            string RowDataString = rowData__2.Substring(idx + 1).Replace("\"", "");
                            nr[RowColumns] = RowDataString;

                        }
                        catch (Exception ex)
                        {

                        }
                    }
                    dt.Rows.Add(nr);
                }
                return dt;
            }
            catch
            {
                return dt;
            }
        }

        public static List<ScheduleClassModels> MyScheduleClassList(int UserID)
        {
            List<ScheduleClassModels> _List = new List<ScheduleClassModels>();
            SqlParameter[] pr = new SqlParameter[] {
            new SqlParameter("@UserID",UserID),
            new SqlParameter("@Mode","GetScheduleClassListStudent")};
            DataSet ds = SqlHelper.ExecuteDataset(SqlHelper.ConnectionStr(), CommandType.StoredProcedure, "sp_CreateScheduleClass", pr);
            if (ds != null && ds.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in ds.Tables[0].Rows)
                {
                    _List.Add(new ScheduleClassModels
                    {
                        ClassDate = dr["SessionDate"].ToString(),
                        TeacherName = dr["TeacherName"].ToString(),
                        StartTime = dr["SessionStartTime"].ToString(),
                        EndTime = dr["SessionEndTime"].ToString(),
                        LessionName = dr["LessionName"].ToString(),
                        ClassID = Convert.ToInt32(dr["ClassID"].ToString()),
                        SessionDateTime = Convert.ToDateTime(dr["SessionDateTime"])

                    });
                }

            }
            return _List;

        }
        public static List<TestPaperModels> GetMyAssignPaperList(int StudentID)
        {
            List<TestPaperModels> _List = new List<TestPaperModels>();
            SqlParameter[] pr = new SqlParameter[] {
            new SqlParameter("@StudentID",StudentID),
            new SqlParameter("@Mode","GetStudentCommingTestPaperList")};
            DataSet ds = SqlHelper.ExecuteDataset(SqlHelper.ConnectionStr(), CommandType.StoredProcedure, "sp_GetStudentPapareList", pr);
            if (ds != null && ds.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in ds.Tables[0].Rows)
                {
                    _List.Add(new TestPaperModels
                    {
                        EncodedStudentID = UrlEncode(StudentID),
                        EncodedPaperID = UrlEncode(dr["Paper_ID"].ToString()),
                        PaperTitle = dr["Paper_Name"].ToString(),
                        TotalQuestion = Convert.ToInt32(dr["Total_Questions"].ToString()),
                        TimeDuration = dr["Duration"].ToString(),
                        PassingMarks = Convert.ToInt32(dr["Passing_Marks"].ToString()),
                        TestStatus = Convert.ToInt32(dr["TestStatus"].ToString()),
                        //TestStatus
                        _PaperDate = Convert.ToDateTime(dr["PaperDate"].ToString()),
                        PaperStartTime = Convert.ToDateTime(dr["StartTime"].ToString()).ToString("hh:mm tt"),
                        PaperEndTime = Convert.ToDateTime(dr["PaperEndDate"].ToString()).ToString("dd/MM/yy") + " " + Convert.ToDateTime(dr["EndTime"].ToString()).ToString("hh:mm tt"),
                        PaperID = Convert.ToInt32(dr["Paper_ID"].ToString()),
                        IsStarted = Convert.ToInt32(dr["IsStarted"].ToString()),
                        IsExpired = Convert.ToInt32(dr["IsExpired"].ToString()),
                        IsComming = Convert.ToInt32(dr["IsComming"].ToString())


                    });
                }
            }
            return _List;

        }


        public static List<TestPaperModels> GetCompletedPaperList(int StudentID)
        {
            List<TestPaperModels> _List = new List<TestPaperModels>();
            SqlParameter[] pr = new SqlParameter[] {
            new SqlParameter("@StudentID",StudentID),
            new SqlParameter("@Mode","GetStudentCompletedTestPaperList")};
            DataSet ds = SqlHelper.ExecuteDataset(SqlHelper.ConnectionStr(), CommandType.StoredProcedure, "sp_GetStudentPapareList", pr);
            if (ds != null && ds.Tables[0].Rows.Count > 0)
            {
                foreach (DataRow dr in ds.Tables[0].Rows)
                {
                    _List.Add(new TestPaperModels
                    {
                        EncodedStudentID = UrlEncode(StudentID),
                        EncodedPaperID = UrlEncode(dr["Paper_ID"].ToString()),
                        PaperTitle = dr["Paper_Name"].ToString(),
                        TotalQuestion = Convert.ToInt32(dr["Total_Questions"].ToString()),
                        TimeDuration = dr["Duration"].ToString(),
                        PassingMarks = Convert.ToInt32(dr["Passing_Marks"].ToString()),
                        TestStatus = Convert.ToInt32(dr["TestStatus"].ToString()),

                        //TestStatus
                        _PaperDate = Convert.ToDateTime(dr["PaperDate"].ToString()),
                        PaperStartTime = Convert.ToDateTime(dr["StartTime"].ToString()).ToString("hh:mm tt"),
                        PaperEndTime = Convert.ToDateTime(dr["PaperEndDate"].ToString()).ToString("dd/MM/yy") + " " + Convert.ToDateTime(dr["EndTime"].ToString()).ToString("hh:mm tt"),
                        PaperID = Convert.ToInt32(dr["Paper_ID"].ToString()),
                        IsShowReport = Convert.ToInt32(dr["IsShowReport"].ToString())
                    });
                }

            }
            return _List;

        }
        public static ScoreBoardModels GetStudentScoreBoard(string PaperID, string StudentID)
        {
            ScoreBoardModels models = new ScoreBoardModels();
            SqlParameter[] pr = new SqlParameter[] {
            new SqlParameter("@StudentID",StudentID),
              new SqlParameter("@PaperID",PaperID),
            new SqlParameter("@Mode","GetScoreBoard")};
            DataSet ds = SqlHelper.ExecuteDataset(SqlHelper.ConnectionStr(), CommandType.StoredProcedure, "sp_GetStudentPapareList", pr);
            if (ds != null && ds.Tables[0].Rows.Count > 0)
            {
                models.PaperName = ds.Tables[0].Rows[0]["Paper_Name"].ToString();
                models.Obtain_Marks = ds.Tables[0].Rows[0]["Obtain_Marks"].ToString();
                models.TotalQuestion = Convert.ToInt32(ds.Tables[0].Rows[0]["Total_Questions"].ToString());
                models.correctQuestions = Convert.ToInt32(ds.Tables[0].Rows[0]["Right_Questions"].ToString());
                models.wrongQuestions = Convert.ToInt32(ds.Tables[0].Rows[0]["Wrong_Questions"].ToString());
                models.leftQuestions = Convert.ToInt32(ds.Tables[0].Rows[0]["Left_Questions"].ToString());
                models.TimeTaken = 50; //Convert.ToInt32(ds.Tables[0].Rows[0]["Duration"].ToString());
                models.Duration = 15;// Convert.ToInt32(ds.Tables[0].Rows[0][""].ToString());
                models.leftTime = 20; //Convert.ToInt32(ds.Tables[0].Rows[0][""].ToString());
            }
            return models;
        }

        public static DataSet GetQuestionReportDS(int PaperID, int StudentID)
        {
            SqlParameter[] pr = new SqlParameter[]
            {
                new SqlParameter("@PaperID",PaperID),
                new SqlParameter("@StudentID",StudentID),



              };
            return SqlHelper.ExecuteDataset(SqlHelper.ConnectionStr(), CommandType.StoredProcedure, "sp_GetTestPaperReport", pr);
        }



        //public static int CreateScheduleClass(ScheduleClassModels model)
        //{
        //    SqlParameter[] pr = new SqlParameter[] {
        //    new SqlParameter("@TeacherID",model.TeacherID),
        //    new SqlParameter("@ClassID",model.ClassID),
        //    new SqlParameter("@SessionDate",model.ClassDate),
        //    new SqlParameter("@SessionStartTime",model.StartTime),
        //    new SqlParameter("@SessionEndTime",model.EndTime),
        //    new SqlParameter("@UserID",model.UserID),
        //    new SqlParameter("@LessionName",model.LessionName),
        //    new SqlParameter("@CourseName",model.LessionName),
        //    new SqlParameter("@Mode","Create")};
        //    SqlHelper.ExecuteDataset(SqlHelper.ConnectionStr(), CommandType.Text, "Sel");
        //    return SqlHelper.ExecuteNonQuery(SqlHelper.ConnectionStr(), CommandType.StoredProcedure, "sp_CreateScheduleClass", pr);

        //}
    }
}