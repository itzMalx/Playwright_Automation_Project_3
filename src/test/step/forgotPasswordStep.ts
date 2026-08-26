import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { lmsworld } from "../world/customworld";


When(
    "user clicks on the forgot password link",
    async function (this: lmsworld) {

        await this.forgotPasswordPage.clicktrainer();

        await this.forgotPasswordPage.clickforgotlink();
    }
);


When(
    "user enters the registered email {string}",
    async function (this: lmsworld, email: string) {

        await this.forgotPasswordPage.entermail(email);
    }
);


When(
    "user clicks on the send verification code button",
    async function (this: lmsworld) {

        this.emailStartTime = new Date();

        await this.forgotPasswordPage.sendverifycode();
    }
);


When(
    "user retrieves the verification code from the email",
    async function (this: lmsworld) {

        this.otp = await this.mailosaurService.getOTP(
            process.env.MAILOSAUR_EMAIL!,
            this.emailStartTime
        );

        console.log(`OTP received: ${this.otp}`);
    }
);


When(
    "user enters the verification code",
    async function (this: lmsworld) {

        await this.forgotPasswordPage.enterOTP(this.otp);
    }
);

When(
    "user clicks on the verify and continue button",
    async function (this: lmsworld) {
        await this.forgotPasswordPage.clickVerifyContinue();
    }
);
When(
    "user enters the new password {string}",
    async function (this: lmsworld, password: string) {

        await this.forgotPasswordPage.enternewpass(password);
    }
);


When(
    "user confirms the new password {string}",
    async function (this: lmsworld, password: string) {

        await this.forgotPasswordPage.reenterpass(password);
    }
);


When(
    "user clicks on the reset password button",
    async function (this: lmsworld) {

        await this.forgotPasswordPage.clickresetbtn();
    }
);


Then(
    "user should receive the password reset {string}",
    async function (this: lmsworld, result: string) {

        if (result === "success") {

            await this.forgotPasswordPage.verifymessage();

        } else {

            await this.forgotPasswordPage.verifyResetButtonDisabled();
        }
    }
);


Then(
    "reset password button should be disabled",
    async function (this: lmsworld) {

        await this.forgotPasswordPage.verifyResetButtonDisabled();
    }
);


Then(
    "user should remain on the forgot password page",
    async function (this: lmsworld) {

        await this.forgotPasswordPage.verifyForgotPasswordValidation();

        console.log(
            "Invalid email validation message displayed successfully"
        );
    }
);