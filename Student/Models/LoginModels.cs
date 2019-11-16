using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
namespace Student.Models
{
    public class LoginModels
    {
        [Required(ErrorMessage = "Please Enter Email")]
        [EmailAddress(ErrorMessage = "Please Enter Valid Email")]
        public string EmailID { get; set; }
        [Required(ErrorMessage = "Please Enter Password")]
        public string Password { get; set; }

    }
}