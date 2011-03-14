using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StuffToDo.Web.Validation
{
    public class TodayOrLaterClientValidationRule : ModelClientValidationRule
    {
        public TodayOrLaterClientValidationRule(string errorMessage)
        {
            ErrorMessage = errorMessage;
            ValidationType = "todayorlater";
        }
    }
}