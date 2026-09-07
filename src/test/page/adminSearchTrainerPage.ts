import { BasePage } from "./basepage";
import { expect } from "@playwright/test";
import { logger } from "../../utilities/logger";

export class AdminSearchTrainerPage extends BasePage {

    private readonly searchBox = this.page.getByPlaceholder("Search trainers...");
    private readonly trainerNameCol = this.page.locator("tbody tr td:nth-child(2)");
    private readonly empIdCol = this.page.locator("tbody tr td:nth-child(3)");
    private readonly emailCol = this.page.locator("tbody tr td:nth-child(4)");
    private readonly phoneNumCol = this.page.locator("tbody tr td:nth-child(5)");
    private readonly nextPageBtn = this.page.locator("//button[@title='Next Page']");

    async searchTrainer(searchText: string) {

        logger.info(`Searching trainer with text: "${searchText}"`);
        await this.searchBox.fill(searchText);
        await this.page.waitForLoadState("networkidle");
        logger.info(`Search completed for "${searchText}"`);
    }

    async verifyTrainerSearchResult(searchText: string, parameter: string) {

        const searchWord = searchText.trim().toLowerCase();
        logger.info(`Verifying "${searchText}" under "${parameter}" column`);
        let column;

        switch (parameter.toLowerCase()) {

            case "trainer":
                column = this.trainerNameCol;
                break;

            case "empid":
                column = this.empIdCol;
                break;

            case "email":
                column = this.emailCol;
                break;

            case "phone":
                column = this.phoneNumCol;
                break;

            default:
                throw new Error(
                    `Invalid search parameter: "${parameter}"`);
        }

        // Check current page and subsequent pages
        while (true) {

            const rowCount = await column.count();
            logger.info(`Checking ${rowCount} result(s) under "${parameter}" column`);

            for (let i = 0; i < rowCount; i++) {
                const cellValue = (await column.nth(i).innerText()).trim();
                logger.info(`${parameter} value: "${cellValue}"`);

                if (cellValue.toLowerCase().includes(searchWord)) {
                    logger.info(`PASS: "${searchText}" found under ` + `"${parameter}"`);
                    return;
                }
            }

            logger.info(`"${searchText}" not found under "${parameter}" on current page`);

            if (this.nextPageBtn.isEnabled()) {
                await this.nextPageBtn.click();

            }

        }
    }
}