import {Before,BeforeAll,After,AfterAll,setDefaultTimeout,Status} from "@cucumber/cucumber";
import { Browser, chromium } from "@playwright/test";
import { lmsworld } from "../world/customworld";
import { logger } from "../../utilities/logger";
import { adminLoginPage } from "../page/adminLoginPage";
import { trainerLoginPage } from './../page/trainerLoginPage';

setDefaultTimeout(90 * 1000);

let browser: Browser;

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    logger.info("Browser launched");
});

Before(async function (this: lmsworld) {
    this.browser = browser;
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.adminLoginPage = new adminLoginPage(this.page)
    this.trainerLoginPage = new trainerLoginPage(this.page)
});

After(async function (this: lmsworld, scenario) {
    if (scenario.result?.status === Status.FAILED) {
        if (this.page && !this.page.isClosed()) {
            const path = `reports/screenshots/${scenario.pickle.name}-${Date.now()}.png`;
            await this.page.screenshot({ path });
        }

        logger.error(`Scenario Failed: ${scenario.pickle.name}`);
    }

    if (this.page && !this.page.isClosed()) {
        await this.page.close();
    }

    if (this.context) {
        await this.context.close();
    }
});

AfterAll(async () => {
    logger.info("Browser Closed");
    await browser.close();
});