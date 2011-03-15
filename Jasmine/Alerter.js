
(function ($) {


    $.widget('lab.alerter', {

        _create: function () {
            this.textbox = this.element.find('input[type=text]');

            this.element.find('input[type=button]').click($.proxy(this._alert, this));
        },

        _alert: function () {
            window.alert(this.textbox.val());
            this.textbox.val('');
        }

    });


})(window.jQuery);