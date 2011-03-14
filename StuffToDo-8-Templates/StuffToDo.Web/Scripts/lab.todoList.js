
(function (lab, $) {

    function TodoList(element) {
        this.element = element;
    }

    TodoList.prototype = {

        loadList: function (list) {

            var todoItemTmpl = $('#todo-item-tmpl'),
                self = this;

            $.each(list, function (i, item) {

                todoItemTmpl.tmpl(item).appendTo(self.element);

            });

        }

    };

    lab.TodoList = TodoList;

})(window.lab = window.lab || {}, window.jQuery);