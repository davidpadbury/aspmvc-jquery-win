using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StuffToDo.Web.Models
{
    public class TodoItem
    {
        public int Id { get; set; }
        public TodoList TodoList { get; set; }
        public string Description { get; set; }
        public DateTime DoBy { get; set; }
        public bool Completed { get; set; }
    }
}