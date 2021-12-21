import { Given, When, Then } from '@cucumber/cucumber';
import {expect,Page } from '@playwright/test';
import { World } from "../types";

Given('a user has navigated to the homepage',async function(this: World){
    await this.page.goto('http://localhost:3000');
    const test = await  this.page.locator('.borderTodo')
    await expect(test).toBeVisible();
    return
})

When ('the user adds {string} to the todo list using the webUI',async function(this: World, todoItem: string){
    await expect( this.page.locator('.todo-input')).toBeVisible();
    await this.page.fill('.todo-input',todoItem);
    await expect( this.page.locator('.todo-button')).toBeVisible();
    await this.page.click('.todo-button');
})

Then ('card {string} should be displayed on the webUI', async function(this: World, addedItem:string){
    await expect( this.page.locator('.todo .todo-item ')).toContainText(addedItem);
})
