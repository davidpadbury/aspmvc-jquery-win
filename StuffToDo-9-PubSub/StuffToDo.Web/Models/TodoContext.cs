using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace StuffToDo.Web.Models
{
    public class TodoContext : DbContext
    {
        public DbSet<TodoList> TodoLists { get; set; }
    }
}