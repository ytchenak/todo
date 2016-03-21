namespace app.todoList {

    import ILocalStorage = app.service.ILocalStorage;
    import Task = my.todoList.Task;
    import todoAppl = my.app.todoAppl;

    class TodoList {
        public tasks: Task[];
        public filterTask:string;
        public newTask:Task;
        vm: TodoList;

        constructor(private localStorage: ILocalStorage<Task[]>) {
            this.tasks = [];
            this.filterTask = '';
        }

        clearTask(): void {
            this.tasks = [];
            this.localStorage.save(this.tasks);
        }

        addTask(): void {
            let task = new Task();
            task.content = this.newTask.content;
            this.tasks.unshift(task);
            this.newTask.content = '';
        }

        saveTasks(): void {
            this.localStorage.save(this.tasks);
        }

        loadTasks(): void {
            let tasks = this.localStorage.load();
            if(tasks)
                this.tasks = tasks;
            else
                this.tasks = [];
        }

    }


    todoAppl.component('myTodoList', {
        controller: TodoList,
        controllerAs: 'vm',
        templateUrl: 'src/todoList/todoList.html'
    });
}