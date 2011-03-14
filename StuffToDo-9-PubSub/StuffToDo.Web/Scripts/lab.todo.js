
(function (lab, $) {

    function TodoApp(list) {
        this.list = list;
        this.todoRepository = new lab.TodoRepository(list);

        lab.pubsub.sub(lab.topics.todo.add, this._addTodo, this);
        lab.pubsub.sub(lab.topics.todo.remove, this._removeTodo, this);

        $($.proxy(this._load, this));
    }

    TodoApp.prototype = {

        _load: function () {
            // Initialize Controls
            this.addTodo = $('#todo-create').addTodo({
                todoRepository: this.todoRepository
            });
            this.todoList = new lab.TodoList($('#todo-list'), $('#todo-item-tmpl'));

            this.todoRepository.listAll($.proxy(this._listLoaded, this));
        },

        _listLoaded: function (result) {
            this.todoList.loadList(result);
        },

        _addTodo: function (item) {
            this.todoRepository.add(item, $.proxy(this._addedTodo, this));
        },

        _addedTodo: function (item) {
            lab.pubsub.pub(lab.topics.todo.added, item);
        },

        _removeTodo: function (id) {
            this.todoRepository.remove(id, function () {
                lab.pubsub.pub(lab.topics.todo.removed, id);
            });
        }
    };

    lab.TodoApp = TodoApp;

})(window.lab = window.lab || {}, window.jQuery);