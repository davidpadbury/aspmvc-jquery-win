
(function (lab, $) {

    $.widget('lab.todoItem', {

        _create: function () {
            this.id = this.element.attr('data-todo-id');

            this.element.find("a.delete").click($.proxy(this._delete, this));

        },

        _delete: function (e) {
            e.preventDefault();

            $.ajax({
                url: this.options.list + '/delete/' + this.id,
                type: 'POST',
                complete: $.proxy(this._deleted, this)
            });
        },

        _deleted: function () {
            this.element.parents('li').remove();
            this.destroy();
        }

    });

})(window.lab = window.lab || {}, window.jQuery);