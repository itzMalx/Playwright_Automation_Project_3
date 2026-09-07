import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { lmsworld } from "../world/customworld";


Given(
    "admin is logged in to the WaveInit LMS site",
    async function (this: lmsworld) {

        await this.adminLoginPage.goto();

        await this.adminLoginPage.clickadmin();

        await this.adminLoginPage.login(
            "admin@test.com",
            "admin123"
        );

        await this.adminLoginPage.verifyLoginSuccess();

    }
);


Given(
    "admin navigates to the Participants page",
    async function (this: lmsworld) {

        await this.searchParticipantPage
            .navigateToParticipantsPage();

    }
);


When(
    "admin searches for participant name {string}",
    async function (
        this: lmsworld,
        participantName: string
    ) {

        await this.searchParticipantPage
            .searchParticipant(participantName);

    }
);


When(
    "admin searches for participant email {string}",
    async function (
        this: lmsworld,
        email: string
    ) {

        await this.searchParticipantPage
            .searchParticipant(email);

    }
);


Then(
    "the matching participant {string} should be displayed",
    async function (
        this: lmsworld,
        participantName: string
    ) {

        const isDisplayed =
            await this.searchParticipantPage
                .isParticipantNameDisplayed(participantName);

        expect(isDisplayed).toBeTruthy();

    }
);


Then(
    "the matching participant with email {string} should be displayed",
    async function (
        this: lmsworld,
        email: string
    ) {

        const isDisplayed =
            await this.searchParticipantPage
                .isParticipantEmailDisplayed(email);

        expect(isDisplayed).toBeTruthy();

    }
);


Then(
    'the "No Participants Found" message should be displayed',
    async function (this: lmsworld) {

        const isDisplayed =
            await this.searchParticipantPage
                .isNoParticipantsFoundDisplayed();

        expect(isDisplayed).toBeTruthy();

    }
);


When(
    "admin clears the participant search field",
    async function (this: lmsworld) {

        await this.searchParticipantPage
            .clearParticipantSearch();

    }
);


Then(
    "the participant list should be displayed",
    async function (this: lmsworld) {

        const isDisplayed =
            await this.searchParticipantPage
                .isParticipantListDisplayed();

        expect(isDisplayed).toBeTruthy();

    }
);