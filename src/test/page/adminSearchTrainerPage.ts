import { BasePage } from "./basepage";
import { expect } from "@playwright/test";
import { logger } from "../../utilities/logger";

export class AdminSearchTrainerPage extends BasePage {

    private readonly searchBox = this.page.getByPlaceholder("Search trainers...");
    private readonly trainerNameRows = this.page.locator("tbody tr td:nth-child(2)");
    private readonly nextPageBtn = this.page.locator("//button[@title='Next Page']");

    async searchTrainer(searchText: string) {
        logger.info(`Searching trainer with text: "${searchText}"`);
        await this.searchBox.fill(searchText);
        await this.trainerNameRows.first().waitFor({ state: "visible" });
        logger.info("Trainer table loaded after search");
    }

    async verifyTrainerContainsSearchText(searchText: string) {
        const searchWord = searchText.trim().toLowerCase();

        while (true) {
            const trainerCount = await this.trainerNameRows.count();

            logger.info(`Checking ${trainerCount} trainer name(s) on current page`);
            for (let i = 0; i < trainerCount; i++) {
                const trainerName = (await this.trainerNameRows.nth(i).innerText()).trim();
                logger.info(`Trainer name: "${trainerName}"`);

                if (trainerName.toLowerCase().includes(searchWord)) {
                    logger.info(`PASS: "${searchText}" found in trainer "${trainerName}"`);
                    return;
                }
            }

            logger.info(`"${searchText}" not found on current page`);
            const nextPageEnabled = await this.nextPageBtn.isEnabled();

            if(!nextPageEnabled) {
                throw new Error(`No trainer name contains "${searchText}" in the available pages`);
            }

            const firstTrainerBefore = await this.trainerNameRows.first().innerText();
            logger.info("Next Page is enabled. Navigating to next page");
            await this.nextPageBtn.click();
            await expect(this.trainerNameRows.first()).not.toHaveText(firstTrainerBefore);
            logger.info("Next page table loaded successfully");
        }
    }
}