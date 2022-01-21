const { Before, BeforeAll, AfterAll, After } = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const { expect } = require("@playwright/test");

// playwright expect to global
global.expect = expect;

BeforeAll(async function () {
    // Browsers are expensive in Playwright so only create 1
    global.browser = await chromium.launch({
        // Not headless so we can watch test runs
        headless: false,
        // Slow so we can see things happening
        // slowMo: 50,
    });

});

AfterAll(async function () {

    await global.browser.close();
});

// Create a new browser context and page per scenario
Before(async function () {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
});

// Cleanup after each scenario
After(async function () {
    await global.page.close();
    await global.context.close();
});
