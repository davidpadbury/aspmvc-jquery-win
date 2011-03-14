
(function (lab, $) {

    $.widget('lab.todoItem', {

        _create: function () {
            this.id = this.element.attr('data-todo-id');

            this.element.find("a.delete").click($.proxy(this._delete, this));

        },

        _delete: function (e) {
            e.preventDefault();

            lab.pubsub.pub(lab.topics.todo.remove, this.id);
        }

    });

})(window.lab = window.lab || {}, window.jQuery);