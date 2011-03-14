
(function ($) {

    $.validator.addMethod('todayorlater', function (value, element, param) {
        if (!value)
            return true;

        try {
            var date = $.datepicker.parseDate('yy-mm-dd', value);
        }
        catch (e) {
            return false;
        }

        var today = new Date();

        today = new Date(today.getFullYear(), today.getMonth(), today.getDate());

        return date >= today;
    });

    $.validator.unobtrusive.adapters.add('todayorlater', function (options) {

        options.rules['todayorlater'] = true;

        if (options.message) {
            options.messages['todayorlater'] = options.message;
        }
    });

})(window.jQuery);