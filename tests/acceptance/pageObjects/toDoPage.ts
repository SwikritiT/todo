export class ToDoPage{
    todoInput:string;
    todoButton:string;
    todoItem:string;
    private page: any;

    constructor(){
        //locators
        this.todoInput = '.todo-input';
        this.todoButton = '.todo-button';
        this.todoItem = '.todo .todo-item ';
    }

    async navigate():Promise<void>{
        await this.page.goto('http://localhost:3000');
    }

}
