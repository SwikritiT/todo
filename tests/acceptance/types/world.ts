import { World as CucumberWorld } from "@cucumber/cucumber";
import { BrowserContext, Page } from "playwright";
import { Expect } from "@playwright/test";

export interface World extends CucumberWorld {
    context: BrowserContext;
    page: Page;
    expect: Expect;
}
