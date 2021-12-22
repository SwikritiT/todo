const {Given, When, Then} = require('@cucumber/cucumber')

Given('a user has navigated to the homepage', function () {
    await page.goto("http://localhost:3000")
});

When('the user adds {string} to the todo list using the webUI', function (item) {
    
});

Then('card {string} should be displayed on the webUI', function (item) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
