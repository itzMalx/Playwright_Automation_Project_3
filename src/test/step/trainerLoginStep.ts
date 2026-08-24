import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { lmsworld } from "../world/customworld";
Given(
    'user is on the login page of the WaveInit LMS site',
    async function (this: lmsworld) {
        await this.trainerLoginPage.goto();
    }
);
Given(
    'user clicks on the trainer role',
    async function (this: lmsworld) {
        await this.trainerLoginPage.clickTrainer();
    }
);

Given(
    'trainer enters the email {string}',
    async function (this: lmsworld, email: string) {
        await this.trainerLoginPage.enterEmail(email);
    }
);

Given(
    'trainer enters the password {string}',
    async function (this: lmsworld, password: string) {
        await this.trainerLoginPage.enterPassword(password);
    }
);

When(
    'trainer clicks on the signin button',
    async function (this: lmsworld) {
        await this.trainerLoginPage.clickSignin();
    }
);

Then(
    'trainer should receive the {string}',
    async function (this: lmsworld, result: string) {

        if (result === "success") {
            await this.trainerLoginPage.verifyLoginSuccess();
            return;
        }

        if (await this.trainerLoginPage.isEmailInvalid()) {
            const message =
                await this.trainerLoginPage.getEmailValidationMessage();

            expect(message).toBe("Please fill out this field.");
            return;
        }

        if (await this.trainerLoginPage.isPasswordInvalid()) {
            const message =
                await this.trainerLoginPage.getPasswordValidationMessage();

            expect(message).toBe("Please fill out this field.");
            return;
        }

        await this.trainerLoginPage.verifyInvalidCredentials();
    }
);