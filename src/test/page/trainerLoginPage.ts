import { BasePage } from "./basepage";

export class trainerLoginPage extends BasePage {

    private readonly trainerTab = this.page.locator("//div[@class='auth-role-selector']/child::button[2]");

    private readonly email = this.page.locator("//input[@id='login-email']");

    private readonly password = this.page.locator("//input[@id='login-password']");

    private readonly signinbtn = this.page.locator("//button[@type='submit']");

    private readonly success = this.page.locator("//h1[@class='tdb-header-title']");

    private readonly wrongemailorpass = this.page.getByText("Invalid email or password");


    async clickTrainer() {
        await this.click(this.trainerTab);
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
}