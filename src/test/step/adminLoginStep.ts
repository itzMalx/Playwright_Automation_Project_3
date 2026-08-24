import { Given, When, Then } from "@cucumber/cucumber";
import { lmsworld } from "../world/customworld";
import { expect } from "@playwright/test";

Given('user is on the login page of the waveinit lms site',async function (this: lmsworld) {
    // Write code here that turns the phrase above into concrete actions
        await this.adminLoginPage.goto();
    }
);
Given('user clicks on the admin role', async function () {
  // Write code here that turns the phrase above into concrete actions
  await this.adminLoginPage.clickadmin();
});

Given('user enters the email {string}',async function (this: lmsworld, email: string) {
    // Write code here that turns the phrase above into concrete actions
        await this.adminLoginPage.enterEmail(email);
    }
);

Given('user enters the password {string}',async function (this: lmsworld, password: string) {
    // Write code here that turns the phrase above into concrete actions
        await this.adminLoginPage.enterPassword(password);
    }
);

When('user clicks on the signin button',async function (this: lmsworld) {
    // Write code here that turns the phrase above into concrete actions
        await this.adminLoginPage.clickSignin();
    }
);

Then('user should receive the {string}',async function (this: lmsworld, result: string) {
    // Write code here that turns the phrase above into concrete actions
        if (result === "success") {
            await this.adminLoginPage.verifyLoginSuccess();
            return;
        }

        if (await this.adminLoginPage.isEmailInvalid()) {
            
            const message =await this.adminLoginPage.getEmailValidationMessage();
            expect(message).toBe("Please fill out this field.");
            return;
        }

        if (await this.adminLoginPage.isPasswordInvalid()) {
            const message =await this.adminLoginPage.getPasswordValidationMessage();
            expect(message).toBe("Please fill out this field.");
            return;
        }
        await this.adminLoginPage.verifyInvalidCredentials();
    }
);