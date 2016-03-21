namespace my.todoList {
    export class Task {
        id: string;
        content: string;
        completed: boolean;
        createdDate: Date;

        constructor(content: string = '') {
            this.id = Math.random().toString();
            this.content = content;
            this.completed = false;
            this.createdDate = new Date();
        }
    }
}