import { BasePage } from "./basepage";
import { expect } from "@playwright/test";

export class ProfilePage extends BasePage {

    private readonly editButton = this.page.locator("//*[@id='main-content']/div/div/div[4]/div[2]/div[3]/div[1]/button")
    private readonly saveButton = this.page.locator("//button[normalize-space()='Save Links']")

    private readonly linkedinLink = this.page.locator("//div[normalize-space()='LinkedIn']/following-sibling::a")
    private readonly githubLink = this.page.locator("//div[normalize-space()='GitHub']/following-sibling::a")
    private readonly twitterLink = this.page.locator("//div[normalize-space()='Twitter / X']/following-sibling::a")
    private readonly instaLink = this.page.locator("//div[normalize-space()='Instagram']/following-sibling::a")
    private readonly portfolioLink = this.page.locator("//div[normalize-space()='Website']/following-sibling::a")

    private readonly linkedinInput = this.page.locator("//input[@placeholder='https://linkedin.com/in/...']")
    private readonly githubInput = this.page.locator("//input[@placeholder='https://github.com/...']")
    private readonly twitterInput = this.page.locator("//input[@placeholder='https://twitter.com/...']")
    private readonly instaInput = this.page.locator("//input[@placeholder='https://instagram.com/...']")
    private readonly portfolioInput = this.page.locator("//input[@placeholder='https://myportfolio.dev']")

    async clickEditButton() {
        await this.editButton.click()
    }

    async setLinks(dataTable) {
        await this.linkedinInput.fill(dataTable.LinkedIn);
        await this.githubInput.fill(dataTable.GitHub);
        await this.twitterInput.fill(dataTable.Twitter);
        await this.instaInput.fill(dataTable.Instagram);
        await this.portfolioInput.fill(dataTable.Portfolio);
    }

    async clickSave() {
        await this.saveButton.click()
        await this.saveButton.waitFor({ state: "hidden" }).catch(() => {})
    }

    async clickLink(media: string) {
        switch (media) {
            case "Instagram":
                await this.instaLink.click()
                break;
            case "Twitter":
                await this.twitterLink.click()
                break;
            case "GitHub":
                await this.githubLink.click()
                break;
            case "LinkedIn":
                await this.linkedinLink.click()
                break;
            case "Portfolio":
                await this.portfolioLink.click()
                break;
        }
    }

    async verifySocialMediaLink(expectedUrl: string) {
        const link = this.page.locator(`a[href="${expectedUrl}"]`);

        await expect(link).toBeVisible();
        await expect(link).toHaveAttribute('href', expectedUrl);
    }
}