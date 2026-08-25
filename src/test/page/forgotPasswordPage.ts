import { expect } from "@playwright/test";
import { BasePage } from "./basepage";

export class ForgotPasswordPage extends BasePage {
    private readonly trainertab = this.page.locator("//div[@class='auth-role-selector']/child::button[2]");
    private readonly forgotlink = this.page.locator("//button[@class='auth-forgot-link']");
    private readonly email = this.page.locator("//input[@id='forgot-email']");
    private readonly sendverify = this.page.locator("//button[@class='auth-submit-btn']/child::span");
    private readonly otpInputs = this.page.locator("input[autocomplete='one-time-code']");
    private readonly verifyContinue = this.page.locator("//button[@type='submit']").filter({ hasText: "Verify & Continue" });
    private readonly newpass = this.page.locator("//input[@id='new-pw']");
    private readonly conpass = this.page.locator("//input[@id='confirm-pw']");
    private readonly resetbtn =this.page.locator("//button[@class='auth-submit-btn']");
    private readonly successreset =this.page.locator("//h2[@class='auth-card-title']");
    private readonly forgotPasswordValidation = this.page.locator("//span[text()='Email not registered. Please check the address or register first.']")

    async clicktrainer() {
        await this.click(this.trainertab);
        console.log("Trainer tab clicked");
    }

    async clickforgotlink() {
        await this.click(this.forgotlink);
        console.log("Forgot Password clicked");
    }

    async entermail(mail: string) {
        await this.fill(this.email, mail);
    }

    async sendverifycode() {
        await this.click(this.sendverify);
    }

    async enterOTP(otp: string) {
        if (otp.length !== 6) {
            throw new Error(`Invalid OTP: ${otp}`);
        }
        console.log(`Entering OTP: ${otp}`);
        for (let i = 0; i < 6; i++) {
            await this.otpInputs
                .nth(i)
                .fill(otp[i]);
        }
    }

    async clickVerifyContinue() {
        await this.verifyContinue.waitFor({ state: "visible" });
        await this.verifyContinue.waitFor({ state: "attached" });
        await expect(this.verifyContinue).toBeEnabled({timeout: 10000});
        await this.verifyContinue.click();
    }

    async enternewpass(password: string) {
        await this.fill(this.newpass, password);
    }

    async reenterpass(repassword: string) {
        await this.fill(this.conpass, repassword);
    }


    async clickresetbtn() {
        await this.click(this.resetbtn);
    }

    async verifymessage() {
        await expect(this.successreset).toBeVisible();
    }
    async verifyForgotPasswordValidation() {
    await expect(this.forgotPasswordValidation).toBeVisible();
}
async getEmailValidationMessage() {
    return await this.email.evaluate(
        (element: HTMLInputElement) => element.validationMessage
    );
}
}