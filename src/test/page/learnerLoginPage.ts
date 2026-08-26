import { BasePage } from "./basepage";
import { expect } from "@playwright/test";

export class learnerLoginPage extends BasePage {

    private readonly learnertab =
        this.page.locator("//span[normalize-space()='Learner']");

    private readonly email =
        this.page.locator("//input[@id='login-email']");

    private readonly password =
        this.page.locator("//input[@id='login-password']");

    private readonly signinbtn =
        this.page.locator("//button[@type='submit']");

    private readonly success =
        this.page.getByText("Welcome back, sriram!");

    private readonly wrongemailorpass =
        this.page.getByText("Invalid email or password");

    private readonly signup=this.page.locator("//a[@class='auth-footer-link']")


    async isSigninVisible(){
        await expect(this.signinbtn).toBeVisible()
    }

    async clickSignup(){
        await this.signup.click()
    }

    async clicklearner() {
        await this.click(this.learnertab);
    }

    async enterEmail(email: string) {
        await this.email.fill(email);
    }

    async enterPassword(password: string) {
        await this.password.fill(password);
    }

    async clickSignin() {
        await this.signinbtn.click();
    }

    async verifyLoginSuccess() {
        await this.success.waitFor({ state: "visible" });
    }

    async verifyInvalidCredentials() {
        await this.wrongemailorpass.waitFor({ state: "visible" });
    }

    async isInvalidCredentialsDisplayed() {
        return await this.wrongemailorpass.isVisible();
    }

    async getEmailValidationMessage() {
        return await this.email.evaluate(
            (element: HTMLInputElement) => element.validationMessage
        );
    }

    async getPasswordValidationMessage() {
        return await this.password.evaluate(
            (element: HTMLInputElement) => element.validationMessage
        );
    }

    async isEmailInvalid() {
        return await this.email.evaluate(
            (element: HTMLInputElement) => !element.checkValidity()
        );
    }

    async isPasswordInvalid() {
        return await this.password.evaluate(
            (element: HTMLInputElement) => !element.checkValidity()
        );
    }

    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickSignin();
    }
}