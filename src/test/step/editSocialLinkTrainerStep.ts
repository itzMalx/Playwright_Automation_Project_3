import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { lmsworld } from "../world/customworld";


When(
    "trainer clicks the Edit button for social links",
    async function (this: lmsworld) {

        await this.editSocialLinkTrainerPage
            .clickEditSocialLinks();

    }
);


When(
    "trainer updates the LinkedIn URL as {string}",
    async function (
        this: lmsworld,
        url: string
    ) {

        await this.editSocialLinkTrainerPage
            .enterLinkedInUrl(url);

    }
);


When(
    "trainer updates the GitHub URL as {string}",
    async function (
        this: lmsworld,
        url: string
    ) {

        await this.editSocialLinkTrainerPage
            .enterGithubUrl(url);

    }
);


When(
    "trainer updates the Twitter URL as {string}",
    async function (
        this: lmsworld,
        url: string
    ) {

        await this.editSocialLinkTrainerPage
            .enterTwitterUrl(url);

    }
);


When(
    "trainer updates the Portfolio URL as {string}",
    async function (
        this: lmsworld,
        url: string
    ) {

        await this.editSocialLinkTrainerPage
            .enterPortfolioUrl(url);

    }
);


When(
    "trainer updates the Personal Website URL as {string}",
    async function (
        this: lmsworld,
        url: string
    ) {

        await this.editSocialLinkTrainerPage
            .enterPersonalWebsite(url);

    }
);


When(
    "trainer clicks the Save button for social links",
    async function (this: lmsworld) {

        await this.editSocialLinkTrainerPage
            .saveSocialLinks();

    }
);


Then(
    "the LinkedIn URL should be updated as {string}",
    async function (
        this: lmsworld,
        url: string
    ) {

        const actualUrl =
            await this.editSocialLinkTrainerPage
                .getLinkedInUrl();

        expect(actualUrl).toBe(url);

    }
);


Then(
    "the GitHub URL should be updated as {string}",
    async function (
        this: lmsworld,
        url: string
    ) {

        const actualUrl =
            await this.editSocialLinkTrainerPage
                .getGithubUrl();

        expect(actualUrl).toBe(url);

    }
);


Then(
    "the Twitter URL should be updated as {string}",
    async function (
        this: lmsworld,
        url: string
    ) {

        const actualUrl =
            await this.editSocialLinkTrainerPage
                .getTwitterUrl();

        expect(actualUrl).toBe(url);

    }
);


Then(
    "the Portfolio URL should be updated as {string}",
    async function (
        this: lmsworld,
        url: string
    ) {

        const actualUrl =
            await this.editSocialLinkTrainerPage
                .getPortfolioUrl();

        expect(actualUrl).toBe(url);

    }
);


Then(
    "the Personal Website URL should be updated as {string}",
    async function (
        this: lmsworld,
        url: string
    ) {

        const actualUrl =
            await this.editSocialLinkTrainerPage
                .getPersonalWebsiteUrl();

        expect(actualUrl).toBe(url);

    }
);