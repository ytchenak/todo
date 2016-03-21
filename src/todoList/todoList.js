var app;
(function (app) {
    var todoList;
    (function (todoList) {
        var Task = my.todoList.Task;
        var todoAppl = my.app.todoAppl;
        var TodoList = (function () {
            function TodoList(localStorage) {
                this.localStorage = localStorage;
                this.tasks = [];
                this.filterTask = '';
            }
            TodoList.prototype.clearTask = function () {
                this.tasks = [];
                this.localStorage.save(this.tasks);
            };
            TodoList.prototype.addTask = function () {
                var task = new Task();
                task.content = this.newTask.content;
                this.tasks.unshift(task);
                this.newTask.content = '';
            };
            TodoList.prototype.saveTasks = function () {
                this.localStorage.save(this.tasks);
            };
            TodoList.prototype.loadTasks = function () {
                var tasks = this.localStorage.load();
                if (tasks)
                    this.tasks = tasks;
                else
                    this.tasks = [];
            };
            return TodoList;
        }());
        todoAppl.component('myTodoList', {
            controller: TodoList,
            controllerAs: 'vm',
            templateUrl: 'src/todoList/todoList.html'
        });
    })(todoList = app.todoList || (app.todoList = {}));
})(app || (app = {}));
//# sourceMappingURL=todoList.js.map