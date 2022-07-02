const {Given, When, Then} = require('@cucumber/cucumber')
const {client} = require('nightwatch-api')

//css selectors
const todoInputField = '.todo-input'
const todoCreateButton = '.todo-button'
const todoListItem = '.todo .todo-item'

Given('a user has navigated to the homepage', function () {
    return client.url("http://localhost:3000");
});


When('the user adds {string} to the todo list using the webUI', async function (item) {
    await client.waitForElementVisible(todoInputField)
        .click(todoInputField)
        .setValue(todoInputField, item)
        .click(todoCreateButton)
    return client
});

Then('card {string} should be displayed on the webUI', function (item) {
    return client.getText(todoListItem, function (result) {
        this.assert.equal(result.value, item)
    })
});
