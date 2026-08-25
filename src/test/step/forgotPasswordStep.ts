import { When, Then } from "@cucumber/cucumber";
import { lmsworld } from "../world/customworld";
import { expect } from "@playwright/test";

When("user clicks on the forgot password link",async function (this: lmsworld) {
        await this.forgotPasswordPage.clicktrainer();
        await this.forgotPasswordPage.clickforgotlink();
    }
);

When("user enters the registered email {string}",async function (this: lmsworld, email: string) {
        await this.forgotPasswordPage.entermail(email);
    }
);

When("user clicks on the send verification code button",async function (this: lmsworld) {
        this.emailStartTime = new Date();
        await this.forgotPasswordPage.sendverifycode();
    }
);

When("user retrieves the verification code from the email",async function (this: lmsworld) {
        this.otp = await this.mailosaurService.getOTP(
            process.env.MAILOSAUR_EMAIL!,
            this.emailStartTime
        );
        console.log(`OTP received: ${this.otp}`);
    }
);

When("user enters the verification code",async function (this: lmsworld) {
        console.log(`OTP received: ${this.otp}`);
        await this.forgotPasswordPage.enterOTP(this.otp);
        console.log("OTP entered");
        await this.forgotPasswordPage.clickVerifyContinue();
        console.log("Verify & Continue clicked");
    }
);
When("user enters the new password {string}",async function (this: lmsworld, password: string) {
        await this.forgotPasswordPage.enternewpass(password);
    }
);

When("user confirms the new password {string}",async function (this: lmsworld, password: string) {
        await this.forgotPasswordPage.reenterpass(password);
    }
);

When("user clicks on the reset password button",async function (this: lmsworld) {
        await this.forgotPasswordPage.clickresetbtn();
    }
);

Then("user should receive the password reset {string}",async function (this: lmsworld, result: string) {
        if (result === "success") {
            await this.forgotPasswordPage.verifymessage();
        }
    }
);

Then(
    "user should receive the forgot password validation {string}",
    async function (this: lmsworld, result: string) {

        if (result === "fail") {
            await this.forgotPasswordPage.verifyForgotPasswordValidation();
        }
    }
);

Then("user should receive the email required validation {string}",async function (this: lmsworld, result: string) {
        if (result === "fail") {
            const validationMessage =await this.forgotPasswordPage.getEmailValidationMessage();
            expect(validationMessage).toBe("Please fill out this field.");
        }
    }
);


Then(
    "user should remain on the forgot password page",
    async function (this: lmsworld) {

        await expect(this.page).toHaveURL(/forgot-password/);

        console.log(
            "Invalid email test passed - remained on forgot password page"
        );
    }
);