
(function (lab, $) {

    $.widget('lab.addTodo', {

        _create: function () {
            this.$doBy = this.element.find('input[name=doby]');
            this.$description = this.element.find('input[name=description]');

            this.element.find('form').submit($.proxy(this._add, this));
        },

        _add: function (e) {
            e.preventDefault();

            var item = {
                doby: this.$doBy.val(),
                description: this.$description.val()
            };

            lab.pubsub.pub(lab.topics.todo.add, item);

            this.$doBy.val('');
            this.$description.val('');
        }

    });


})(window.lab = window.lab || {}, window.jQuery);