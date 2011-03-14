using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace StuffToDo.Web.Validation
{
    public class TodayOrLaterAttribute : ValidationAttribute, IClientValidatable
    {
        public override string FormatErrorMessage(string name)
        {
            return string.Format("{0} must be today or later.", name);
        }

        public override bool IsValid(object value)
        {
            if (!(value is DateTime))
                return false;

            var date = (DateTime)value;

            return date >= DateTime.Today;
        }


        #region IClientValidatable Members

        public IEnumerable<ModelClientValidationRule> GetClientValidationRules(ModelMetadata metadata, ControllerContext context)
        {
            var name = metadata.GetDisplayName();
            var message = FormatErrorMessage(name);

            yield return new TodayOrLaterClientValidationRule(message);
        }

        #endregion
    }
}