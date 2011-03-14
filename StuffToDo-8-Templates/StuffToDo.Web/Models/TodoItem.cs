using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using StuffToDo.Web.Validation;
using System.Web.Script.Serialization;

namespace StuffToDo.Web.Models
{
    public class TodoItem
    {
        public int Id { get; set; }
        
        [ScriptIgnore]
        public TodoList TodoList { get; set; }
        
        [Required]
        public string Description { get; set; }

        [Required, DataType(DataType.Date)]
        [TodayOrLater]
        public DateTime DoBy { get; set; }

        public bool Completed { get; set; }
    }
}