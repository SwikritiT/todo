class HomePage{
    constructor(){
        //locators
        this.todoInput = '.todo-input';
        this.todoButton = '.todo-button';
        this.todoItem = '.todo .todo-item ';
    }

    async navigate() {
        await page.goto('http://localhost:3000');
    }

    async addItemTodoList(item){
        await page.fill(this.todoInput , item);
        await page.click(this.todoButton);
    }
    async itemShouldBeDisplayedInWebUI(item){
        const text = await page.innerText(this.todoItem);
        expect(text).toBe(item);
    }
}

module.exports = {HomePage};
