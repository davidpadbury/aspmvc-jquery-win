using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace StuffToDo.Web.Models
{
    public class TodoList
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual ICollection<TodoItem> Items { get; set; }
    }
}