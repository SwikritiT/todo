const {Given, When, Then} = require('@cucumber/cucumber')
const {HomePage} = require('../pageObjects/HomePage')

const homePage = new HomePage();

Given('a user has navigated to the homepage', async function () {
    //const homePage = new HomePage(page);
    await homePage.navigate();
});

When('the user adds {string} to the todo list using the webUI',async function (item) {
   //const homePage = new HomePage(page);
   await homePage.addItemTodoList(item)
});

Then('card {string} should be displayed on the webUI', async function (item) {
  // const homePage = new HomePage(page);
    await homePage.itemShouldBeDisplayedInWebUI(item);
});
