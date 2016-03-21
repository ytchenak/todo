var my;
(function (my) {
    var todoList;
    (function (todoList) {
        var Task = (function () {
            function Task(content) {
                if (content === void 0) { content = ''; }
                this.id = Math.random().toString();
                this.content = content;
                this.completed = false;
                this.createdDate = new Date();
            }
            return Task;
        }());
        todoList.Task = Task;
    })(todoList = my.todoList || (my.todoList = {}));
})(my || (my = {}));
//# sourceMappingURL=task.js.map