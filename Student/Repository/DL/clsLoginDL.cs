using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Student.Models;
using System.Data;
using System.Data.SqlClient;
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
            new SqlParameter("@Password",models.Password),
            new SqlParameter("@Mode","StudentLogin")
               
            };
            ds = SqlHelper.ExecuteDataset(SqlHelper.ConnectionStr(), CommandType.StoredProcedure, "sp_Login", pr);
            if (ds != null && ds.Tables[0].Rows.Count > 0)
            {
                result.Email = ds.Tables[0].Rows[0]["Email"].ToString();
                result.UserID = Convert.ToInt32(ds.Tables[0].Rows[0]["id"].ToString());
                result.FirstName = ds.Tables[0].Rows[0]["Name"].ToString();
                //result.LastName = ds.Tables[0].Rows[0]["StudentLastName"].ToString();
                result.OrgID = Convert.ToInt32(ds.Tables[0].Rows[0]["ORG_ID"].ToString());
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
                result.OrgID = Convert.ToInt32(ds.Tables[0].Rows[0]["ORGID"].ToString());
                result.Response = MethodResponse.Success;
            }
            else
            {
                result.Response = MethodResponse.Invalid_Email_And_Password;
            }
            return result;
        }
    }
}