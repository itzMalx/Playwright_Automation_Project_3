import { Given, When, Then } from "@cucumber/cucumber";
import { lmsworld } from "../world/customworld";

Given('user navigates to the LMS login page', async function (this: lmsworld) {
    await this.lmsLoginPage.goto();
});

When('user selects the {string} role', async function (this: lmsworld, role: string) {
    await this.lmsLoginPage.selectRole(role);
});

When('user inputs email {string} and password {string}', async function (this: lmsworld, email: string, password: string) {
    await this.lmsLoginPage.enterCredentials(email, password);
});

When('user clicks the submit button', async function (this: lmsworld) {
    await this.lmsLoginPage.clickSubmit();
});

Then('user should see the dashboard welcome page', async function (this: lmsworld) {
    await this.lmsLoginPage.verifyLoginSuccess();
});

Then('user should see the {string} error toast message', async function (this: lmsworld, expectedMessage: string) {
    await this.lmsLoginPage.verifyInvalidCredentialsToast();
});

Then('email input field should trigger validation error', async function (this: lmsworld) {
    await this.lmsLoginPage.verifyEmailValidation();
});

Then('email input field should show required validation message', async function (this: lmsworld) {
    await this.lmsLoginPage.verifyEmailValidation();
});

Then('password input field should show required validation message', async function (this: lmsworld) {
    await this.lmsLoginPage.verifyPasswordValidation();
});
