
describe('lab.todoItem', function () {

    var todoItem;

    beforeEach(function () {
        loadFixtures('fixture.html');

        todoItem = $('.todo-item').todoItem({
            list: 'test'
        });
    });

    describe('when clicking delete', function () {

        beforeEach(function () {
            spyOn($, 'ajax');

            todoItem.find('a.delete').click();
        });

        it('should make delete call', function () {

            expect($.ajax).toHaveBeenCalled();

        });

        describe('when delete completes', function () {

            beforeEach(function () {
                var ajaxArgs = $.ajax.mostRecentCall.args[0];
                ajaxArgs.complete();
            });

            it('should remove item', function () {
                expect( $('#todo-item-fixture').children().length ).toEqual(0);
            });

        });

    });

});