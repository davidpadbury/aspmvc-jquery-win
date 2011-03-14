
(function (lab, $) {

    function TodoApp(list) {
        this.list = list;
        this.todoRepository = new lab.TodoRepository(list);

        $($.proxy(this._load, this));
    }

    TodoApp.prototype = {

        _load: function () {
            // Initialize Controls
            this.addTodo = $('#todo-create').addTodo({
                todoRepository: this.todoRepository
            });
            this.todoList = new lab.TodoList($('#todo-list'));

            this.todoRepository.listAll($.proxy(this._listLoaded, this));
        },

        _listLoaded: function (result) {
            this.todoList.loadList(result);
        }

    };

    lab.TodoApp = TodoApp;

})(window.lab = window.lab || {}, window.jQuery);