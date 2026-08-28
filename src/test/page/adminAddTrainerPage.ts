import { BasePage } from "./basepage";
import { expect } from "@playwright/test";
import { logger } from "../../utilities/logger";


export class AdminAddTrainerPage extends BasePage {

    private readonly trainerBtn = this.page.locator("//button[@class='wl-sidebar-item ']//span[text()='Trainers']")
    private readonly addTrainerBtn = this.page.locator("button[class='reg-admin-btn reg-admin-btn--primary']");
    private readonly fullName = this.page.locator("input[class='reg-input'][placeholder='e.g. Sarah Johnson']");
    private readonly email = this.page.locator("input[class='reg-input'][placeholder='trainer@company.com']");
    private readonly phoneNum = this.page.locator("input[class='reg-input'][placeholder='e.g. +91 98765 43210']");
    private readonly password = this.page.locator("input[class='reg-input'][placeholder='Min. 8 characters']");
    private readonly confirmPassword = this.page.locator("input[class='reg-input'][placeholder='Re-enter password']");
    private readonly createTrainerBtn = this.page.locator("button[type='submit']");
    private readonly nameRequired = this.page.getByText("Full name is required");
    private readonly emailValid = this.page.getByText("Enter a valid email address");
    private readonly phoneNumValid = this.page.getByText("Enter a valid phone number");
    private readonly passwordRequired = this.page.getByText("Password is required");
    private readonly confirmPasswordRequired = this.page.getByText("Please confirm the password");

    async clickTrainerBtn() {
        await this.click(this.trainerBtn);
    }
    async clickAddTrainer() {
        await this.click(this.addTrainerBtn);
    }

    async enterFullname(name: string) {
        await this.fill(this.fullName, name)
    }

    async enteremail(email: string) {
        await this.fill(this.email, email)
    }

    async enterPhonenum(phoneNum: string) {
        await this.fill(this.phoneNum, phoneNum)
    }

    async enterPassword(password: string) {
        await this.fill(this.password, password)
    }

    async enterConfirmPassword(confirmPassword: string) {
        await this.fill(this.confirmPassword, confirmPassword)
    }

    async clickCreateTrainer() {
        await this.click(this.createTrainerBtn)
    }

    async nameRequiredMsg(errorMsg: string) {
        const message = await this.nameRequired.textContent();
        logger.info(`Name validation: ${message}`);
        await expect(this.nameRequired).toContainText(errorMsg);
    }

    async emailRequiredMsg(errorMsg: string) {
        const message = await this.emailValid.textContent();
        logger.info(`Email validation: ${message}`);
        await expect(this.emailValid).toContainText(errorMsg);
    }

    async passwordRequiredMsg(errorMsg: string) {
        const message = await this.passwordRequired.textContent();
        logger.info(`Password validation: ${message}`);
        await expect(this.passwordRequired).toContainText(errorMsg);
    }

    async confirmPasswordRequiredMsg(errorMsg: string) {
        const message = await this.confirmPasswordRequired.textContent();
        logger.info(`Confirm password validation: ${message}`);
        await expect(this.confirmPasswordRequired).toContainText(errorMsg);
    }
    async validateError(type: string, errorMsg: string) {

        switch (type.toLowerCase()) {

            case "name":
                await this.nameRequiredMsg(errorMsg);
                break;

            case "email":
                await this.emailRequiredMsg(errorMsg);
                break;

            case "password":
                await this.passwordRequiredMsg(errorMsg);
                break;

            case "confirmpassword":
                await this.confirmPasswordRequiredMsg(errorMsg);
                break;

            default:
                throw new Error(`Invalid validation type: ${type}`);
        }
    }
}