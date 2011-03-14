
(function (lab, $) {

    $(function () {

        $('.todo-item').todoItem({
            list: window.location.pathname
        });

    });

})(window.lab = window.lab || {}, window.jQuery);