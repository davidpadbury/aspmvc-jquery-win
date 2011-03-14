
(function (lab, $) {

    function TodoList(element, todoTmpl) {
        this.element = element;
        this.todoItemTmpl = todoTmpl;

        lab.pubsub.sub(lab.topics.todo.added, this._addItem, this);
        lab.pubsub.sub(lab.topics.todo.removed, this._removeItem, this);
    }

    TodoList.prototype = {

        loadList: function (list) {

            var self = this;

            $.each(list, function (i, item) {

                self._addItem(item);

            });

        },

        _addItem: function (item) {
            this.todoItemTmpl
                .tmpl(item)
                .appendTo(this.element)
                .todoItem();
        },

        _removeItem: function (id) {
            var elementToRemove = this.element.find('li[data-todo-id=' + id + ']');

            elementToRemove.todoItem('destory').remove();
        }

    };

    lab.TodoList = TodoList;

})(window.lab = window.lab || {}, window.jQuery);