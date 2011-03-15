
describe('alerter', function () {

    var alerter;

    beforeEach(function () {
        loadFixtures('fixture.html');
        alerter = $('#alerter-fixture').alerter();

        spyOn(window, 'alert');
    });

    describe('when we enter something in the textbox', function () {
        var value = 'testing';

        beforeEach(function () {
            $('input[type=text]').val(value);
        });

        describe('then press the button', function () {

            beforeEach(function () {
                $('input[type=button]').click();
            });

            it('should alert the textbox value', function () {

                expect(window.alert).toHaveBeenCalledWith(value);

            });

            it('should empty the textbox', function () {
                expect($('input[type=text]').val()).toEqual('');
            });

        });

    });
});