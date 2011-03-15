
describe('lab.todoItem', function () {

    var todoItem;

    beforeEach(function () {
        loadFixtures('fixture.html');

        todoItem = $('.todo-item').todoItem({
            list: 'test'
        });
    });

});