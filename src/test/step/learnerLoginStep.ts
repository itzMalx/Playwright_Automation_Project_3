import { Given, When, Then } from "@cucumber/cucumber";
import { lmsworld } from "../world/customworld";
import { expect } from "@playwright/test";


Given(
    'learner is on the login page of the waveinit lms site',
    async function (this: lmsworld) {

        await this.learnerLoginPage.goto();
    }
);


Given(
    'learner clicks on the learner role',
    async function (this: lmsworld) {

        await this.learnerLoginPage.clicklearner();
    }
);


Given(
    'learner enters the email {string}',
    async function (this: lmsworld, email: string) {

        await this.learnerLoginPage.enterEmail(email);
    }
);


Given(
    'learner enters the password {string}',
    async function (this: lmsworld, password: string) {

        await this.learnerLoginPage.enterPassword(password);
    }
);


When(
    'learner clicks on the signin button',
    async function (this: lmsworld) {

        await this.learnerLoginPage.clickSignin();
    }
);


Then(
    'learner should receive the {string}',
    async function (this: lmsworld, result: string) {

        if (result === "success") {

            await this.learnerLoginPage.verifyLoginSuccess();

            return;
        }

        if (await this.learnerLoginPage.isEmailInvalid()) {

            const message =
                await this.learnerLoginPage.getEmailValidationMessage();

            expect(message).toBe("Please fill out this field.");

            return;
        }

        if (await this.learnerLoginPage.isPasswordInvalid()) {

            const message =
                await this.learnerLoginPage.getPasswordValidationMessage();

            expect(message).toBe("Please fill out this field.");

            return;
        }

        await this.learnerLoginPage.verifyInvalidCredentials();
    }
);