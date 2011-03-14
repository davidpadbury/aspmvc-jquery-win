using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using StuffToDo.Web.Models;

namespace StuffToDo.Web.Controllers
{
    public class TodoController : Controller
    {
        private TodoContext _todoContext = new TodoContext();

        public ActionResult Index(string listName)
        {
            // If we don't yet have a listName, generate a crazy one and redirect
            if (listName == null)
            {
                var newName = Guid.NewGuid().ToString();
                return RedirectToAction("Index", new { listName = newName });
            }

            // List the items of this list
            var list = GetList(listName);
            var items = (list.Items ?? Enumerable.Empty<TodoItem>())
                .OrderBy(l => l.DoBy)
                .OrderBy(l => l.Description)
                .ToArray();

            return View(items);
        }

        [HttpGet]
        public ActionResult Create(string listName)
        {
            var newItem = new TodoItem
            {
                DoBy = DateTime.Today.AddDays(1)
            };

            return View(newItem);
        }

        [HttpPost]
        public ActionResult Create(string listName, TodoItem todoItem)
        {
            if (!ModelState.IsValid)
                return View(todoItem);

            var list = GetList(listName);

            list.Items.Add(todoItem);
            _todoContext.SaveChanges();

            return RedirectToAction("Index");
        }

        [HttpPost]
        public ActionResult Complete(string listName, int id)
        {
            return UpdateComplete(listName, id, true);
        }

        [HttpPost]
        public ActionResult Uncomplete(string listName, int id)
        {
            return UpdateComplete(listName, id, false);
        }

        private ActionResult UpdateComplete(string listName, int id, bool completed)
        {
            var list = GetList(listName);
            var item = list.Items.First(x => x.Id == id);

            item.Completed = completed;
            _todoContext.SaveChanges();

            return RedirectToAction("Index");
        }

        [HttpPost]
        public ActionResult Delete(string listName, int id)
        {
            var list = GetList(listName);
            var item = list.Items.First(x => x.Id == id);

            list.Items.Remove(item);
            _todoContext.SaveChanges();

            return RedirectToAction("Index");
        }

        private TodoList GetList(string name)
        {
            // Try to pull out a list
            var list = _todoContext.TodoLists
                .Where(l => l.Name.Equals(name, StringComparison.OrdinalIgnoreCase))
                .FirstOrDefault();

            // If we don't have one yet create it
            if (list == null)
            {
                list = new TodoList
                {
                    Name = name
                };

                _todoContext.TodoLists.Add(list);
                _todoContext.SaveChanges();
            }

            return list;
        }
    }
}