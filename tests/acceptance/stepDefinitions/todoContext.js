const {Given, When, Then} = require('@cucumber/cucumber')
const {HomePage} = require('../pageObjects/HomePage')

const homePage = new HomePage();

Given('a user has navigated to the homepage', async function () {
    await homePage.navigate();
});

Given('the user has added {string} to the todo list', async function (item) {
    await homePage.addItemTodoList(item);
    return homePage.itemShouldBeDisplayedInWebUI(item);
});


When('the user adds {string} to the todo list using the webUI',function (item) {
    return homePage.addItemTodoList(item)
});

Then('card {string} should be displayed on the webUI',function (item) {
    return homePage.itemShouldBeDisplayedInWebUI(item);
});

When('the user removes the item from the list', function () {
    return homePage.removeItemFromTodoList();
});

Then('there should be no item displayed on the webUI', function () {
    
});
