using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Student.Models;
using System.Data;
using System.Data.SqlClient;
using System.Web.Mvc;
namespace Student.Repository.DL
{
    public class clsLoginDL
    {
        public static ResponseModels Login(LoginModels models)
        {
            ResponseModels result = new ResponseModels();
            result.Response = MethodResponse.Success;
            DataSet ds = new DataSet();
            SqlParameter[] pr = new SqlParameter[]
            {
            new SqlParameter("@Email",models.EmailID),
            new SqlParameter("@ORG_ID",models.ORG_ID),
            new SqlParameter("@Password",models.Password),
            new SqlParameter("@Mode","StudentLogin")

            };
            ds = SqlHelper.ExecuteDataset(SqlHelper.ConnectionStr(), CommandType.StoredProcedure, "sp_Login", pr);
            if (ds != null && ds.Tables[0].Rows.Count > 0)
            {
                result.Email = ds.Tables[0].Rows[0]["Email"].ToString();
                result.UserID = Convert.ToInt32(ds.Tables[0].Rows[0]["id"].ToString());
                result.FirstName = ds.Tables[0].Rows[0]["First_Name"].ToString();
                result.LastName = ds.Tables[0].Rows[0]["Last_Name"].ToString();
                result.MobilePhone = ds.Tables[0].Rows[0]["Mobile1"].ToString();
                result.Address = ds.Tables[0].Rows[0]["Address"].ToString();
                result.Twitter = ds.Tables[0].Rows[0]["Twitter"].ToString();
                result.Facebook = ds.Tables[0].Rows[0]["Facebook"].ToString();
                result.LinkedIn = ds.Tables[0].Rows[0]["LinkedIn"].ToString();
                result.Skyup = ds.Tables[0].Rows[0]["Skyup"].ToString();
                result.Gender = ds.Tables[0].Rows[0]["Gender"].ToString();
                result.Discription = ds.Tables[0].Rows[0]["Discription"].ToString();
                result.InstituteName = ds.Tables[0].Rows[0]["Institute"].ToString();
                result.ORG_ID = Convert.ToInt32(ds.Tables[0].Rows[0]["ORG_ID"].ToString());
                result.Response = MethodResponse.Success;
            }
            else
            {
                result.Response = MethodResponse.Invalid_Email_And_Password;
            }
            return result;

        }
        public static ResponseModels ForgotPassword(ForgotPasswordModels models)
        {
            ResponseModels result = new ResponseModels();
            result.Response = MethodResponse.Success;
            DataSet ds = new DataSet();
            SqlParameter[] pr = new SqlParameter[]
            {
            new SqlParameter("@Email",models.Email),
            new SqlParameter("@Password",models.Password),
            new SqlParameter("@Mode","ForgotPassword")
            };
            ds = SqlHelper.ExecuteDataset(SqlHelper.ConnectionStr(), CommandType.StoredProcedure, "sp_Login", pr);
            if (ds != null && ds.Tables[0].Rows.Count > 0)
            {
                result.Email = ds.Tables[0].Rows[0]["Email"].ToString();
                result.UserID = Convert.ToInt32(ds.Tables[0].Rows[0]["id"].ToString());
                result.FirstName = ds.Tables[0].Rows[0]["StudentFirstName"].ToString();
                result.LastName = ds.Tables[0].Rows[0]["StudentLastName"].ToString();
                result.ORG_ID = Convert.ToInt32(ds.Tables[0].Rows[0]["ORGID"].ToString());
                result.Response = MethodResponse.Success;
            }
            else
            {
                result.Response = MethodResponse.Invalid_Email_And_Password;
            }
            return result;
        }



        public static List<SelectListItem> GetInstituteList()
        {
            string _Qry = "select CompanyName,ORG_ID,UserID from tbl_UserDetails Where CompanyName is not null and CompanyName<>''";
            DataSet ds = SqlHelper.ExecuteDataset(SqlHelper.ConnectionStr(), CommandType.Text, _Qry);

            List<SelectListItem> _List = new List<SelectListItem>();
            if (ds != null && ds.Tables[0].Rows.Count > 0)
            {

                foreach (DataRow dr in ds.Tables[0].Rows)
                {
                    _List.Add(new SelectListItem
                    {
                        Text = dr["CompanyName"].ToString(),
                        Value = dr["ORG_ID"].ToString(),
                    }); ;
                }
            }

            return _List;
        }
        public static int UpdateStudentInfo(string Fname, string Lname, string institute, string gender, string id)
        {
            ResponseModels result = new ResponseModels();
            result.Response = MethodResponse.Success;
            DataSet ds = new DataSet();
            SqlParameter[] pr = new SqlParameter[]
            {
            new SqlParameter("@Fname",Fname),
            new SqlParameter("@Lname",Lname),
            new SqlParameter("@institute",institute),
            new SqlParameter("@gender",gender),
            new SqlParameter("@id",id),
            new SqlParameter("@Mode","UpdateStudentinfo")

            };
            ds = SqlHelper.ExecuteDataset(SqlHelper.ConnectionStr(), CommandType.StoredProcedure, "sp_UpdateStudent", pr);
            
            return 0;
        }
        public static int UpdateDiscription(string diss, string id)
        {
            ResponseModels result = new ResponseModels();
            result.Response = MethodResponse.Success;
            DataSet ds = new DataSet();
            SqlParameter[] pr = new SqlParameter[]
            {
            new SqlParameter("@Diss",diss),
            new SqlParameter("@id",id),
            new SqlParameter("@Mode","UpdateDiss")

            };
            ds = SqlHelper.ExecuteDataset(SqlHelper.ConnectionStr(), CommandType.StoredProcedure, "sp_UpdateStudent", pr);
            
            return 0;
        }
        public static int UpdateContactInfo(string Mobile, string Email, string Location, string Linkdin, string Facebook, string Twitter, string Skype, string id)
        {
            ResponseModels result = new ResponseModels();
            result.Response = MethodResponse.Success;
            DataSet ds = new DataSet();
            SqlParameter[] pr = new SqlParameter[]
            {
            new SqlParameter("@Mobile1",Mobile),
            new SqlParameter("@Email",Email),
            new SqlParameter("@Address",Location),
            new SqlParameter("@LinkedIn",Linkdin),
            new SqlParameter("@Facebook",Facebook),
            new SqlParameter("@Twitter",Twitter),
            new SqlParameter("@Skyup",Skype),
            new SqlParameter("@id",id),
            new SqlParameter("@Mode","UpdateContactinfo")

            };
            ds = SqlHelper.ExecuteDataset(SqlHelper.ConnectionStr(), CommandType.StoredProcedure, "sp_UpdateStudent", pr);

            return 0;
        }
    }
}