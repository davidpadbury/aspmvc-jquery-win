
(function (lab, $) {

    var defaultAjaxOptions = {
        cache: false
    };

    function ajax(options) {
        var callOptions = $.extend({}, defaultAjaxOptions, options);

        $.ajax(callOptions);
    }

    function TodoRepository(list) {
        this.list = list;
    }

    TodoRepository.prototype = {

        add: function (item, completed) {
            ajax({
                url: this.list + '/create',
                type: 'POST',
                data: item,
                success: completed
            });
        },

        listAll: function (completed) {
            ajax({
                url: this.list + '/list',
                type: 'GET',
                success: completed
            });
        },

        remove: function (id, completed) {
            ajax({
                url: this.list + '/delete',
                type: 'POST',
                data: { id: id },
                success: completed
            });
        }

    };

    lab.TodoRepository = TodoRepository;

})(window.lab = window.lab || {}, window.jQuery);