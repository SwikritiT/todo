import { Before, BeforeAll, AfterAll, After } from "@cucumber/cucumber";
import { chromium, Browser } from "playwright";
import { expect } from "@playwright/test";
import { World } from "./tests/acceptance/types";

export let browser: Browser;

BeforeAll(async function () {
    // Browsers are expensive in Playwright so only create 1
    browser = await chromium.launch({
        // Not headless so we can watch test runs
        headless: false,
        // Slow so we can see things happening
        // slowMo: 50,
    });
});

AfterAll(async function () {
    await browser.close();
});

// Create a new browser context and page per scenario
Before(async function (this: World) {
    // assertion lib
    this.expect = expect;

    this.context = await browser.newContext();
    this.page = await this.context.newPage();
});

// Cleanup after each scenario
After(async function (this: World) {
    await this.page.close();
    await this.context.close();
});
