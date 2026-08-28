import { BasePage } from "./basepage";

export class editSocialLinkTrainerPage extends BasePage {

    private readonly socialLinksSection =
        this.page.getByText("Social Links", { exact: true })
            .locator("..")
            .locator("..");

    private readonly editSocialLinksButton =
        this.socialLinksSection.getByRole("button", {
            name: "Edit",
            exact: true
        });

    private readonly linkedInUrl =
        this.page.getByPlaceholder("https://linkedin.com/in/...");

    private readonly githubUrl =
        this.page.getByPlaceholder("https://github.com/...");

    private readonly twitterUrl =
        this.page.getByPlaceholder("https://twitter.com/...");

    private readonly portfolioWebsite =
        this.page.getByPlaceholder("https://myportfolio.dev");

    private readonly personalWebsite =
        this.page.getByPlaceholder("https://mywebsite.com");

    private readonly saveLinksButton =
        this.page.getByRole("button", {
            name: "Save Links",
            exact: true
        });


    async clickEditSocialLinks() {
        await this.editSocialLinksButton.click();
    }


    async enterLinkedInUrl(url: string) {
        await this.linkedInUrl.fill(url);
    }


    async enterGithubUrl(url: string) {
        await this.githubUrl.fill(url);
    }


    async enterTwitterUrl(url: string) {
        await this.twitterUrl.fill(url);
    }


    async enterPortfolioUrl(url: string) {
        await this.portfolioWebsite.fill(url);
    }


    async enterPersonalWebsite(url: string) {
        await this.personalWebsite.fill(url);
    }


    async saveSocialLinks() {
        await this.saveLinksButton.click();
    }


    async getLinkedInUrl() {
        await this.clickEditSocialLinks();
        return await this.linkedInUrl.inputValue();
    }


    async getGithubUrl() {
        await this.clickEditSocialLinks();
        return await this.githubUrl.inputValue();
    }


    async getTwitterUrl() {
        await this.clickEditSocialLinks();
        return await this.twitterUrl.inputValue();
    }


    async getPortfolioUrl() {
        await this.clickEditSocialLinks();
        return await this.portfolioWebsite.inputValue();
    }


    async getPersonalWebsiteUrl() {
        await this.clickEditSocialLinks();
        return await this.personalWebsite.inputValue();
    }

}