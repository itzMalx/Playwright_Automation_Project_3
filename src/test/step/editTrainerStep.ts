import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { lmsworld } from "../world/customworld";


Given(
    "trainer is logged in to the WaveInit LMS site",
    async function (this: lmsworld) {

        await this.trainerLoginPage.goto();

        await this.trainerLoginPage.clickTrainer();

        await this.trainerLoginPage.enterEmail("riya@gmail.com");

        await this.trainerLoginPage.enterPassword("riya1234");

        await this.trainerLoginPage.clickSignin();
    }
);


Given(
    "trainer navigates to the My Profile page",
    async function (this: lmsworld) {

        await this.editTrainerProfilePage.navigateToMyProfile();
    }
);


Given(
    "trainer clicks on the Edit Profile button",
    async function (this: lmsworld) {

        await this.editTrainerProfilePage.clickEditProfile();
    }
);


When(
    "trainer updates the professional headline with {string}",
    async function (this: lmsworld, headline: string) {

        await this.editTrainerProfilePage
            .enterProfessionalHeadline(headline);
    }
);


When(
    "trainer updates the about bio with {string}",
    async function (this: lmsworld, bio: string) {

        await this.editTrainerProfilePage
            .enterAboutBio(bio);
    }
);


When(
    "trainer updates the full name with {string}",
    async function (this: lmsworld, name: string) {

        await this.editTrainerProfilePage
            .enterFullName(name);
    }
);


When(
    "trainer clicks on the Save Changes button",
    async function (this: lmsworld) {

        await this.editTrainerProfilePage.saveChanges();
    }
);


When(
    "trainer clicks on the Cancel button",
    async function (this: lmsworld) {

        await this.editTrainerProfilePage.cancelChanges();
    }
);


Then(
    "the trainer profile should be updated successfully",
    async function (this: lmsworld) {

        await expect(
            this.editTrainerProfilePage.page.getByRole("button", {
                name: "Edit Profile"
            })
        ).toBeVisible();
    }
);


Then(
    "the updated full name {string} should be displayed in the profile",
    async function (this: lmsworld, name: string) {

        const actualName =
            await this.editTrainerProfilePage.getFullName();

        expect(actualName).toBe(name);
    }
);


Then(
    "the profile changes should not be saved",
    async function (this: lmsworld) {

        await expect(
            this.editTrainerProfilePage.page.getByRole("button", {
                name: "Edit Profile"
            })
        ).toBeVisible();
    }
);