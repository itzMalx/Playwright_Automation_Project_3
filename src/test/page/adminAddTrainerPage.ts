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
    //private readonly trainerCreatedMsg = this.page.getByText("Trainer created successfully");
    private readonly trainerCreatedMsg = this.page.getByText("Trainer created successfully", { exact: true });
    private readonly creatingTrainerBtn = this.page.getByText("Creating Trainer...", { exact: true });
    private readonly employeeId = this.page.locator("input[placeholder='e.g. EMP-1006']");
    private readonly department = this.page.locator("select.reg-select").nth(0);
    private readonly designation = this.page.locator("select.reg-select").nth(1);
    private readonly experience = this.page.locator("select.reg-select").nth(2);
    private readonly accountStatus = this.page.locator("button[role='switch'][aria-label='Toggle account status']");
    private readonly profilePhoto = this.page.locator("input[type='file']");

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

    async trainerCreated() {
        await expect(this.creatingTrainerBtn).toBeHidden({ timeout: 30000 });
        await expect(this.trainerCreatedMsg).toHaveText("Trainer created successfully");
        const message = await this.trainerCreatedMsg.textContent();
        logger.info(`Trainer created message: ${message}`);
        //console.log(await this.page.locator("body").innerText());
    }

    async nameRequiredMsg(errorMsg: string) {
        await expect(this.nameRequired).toContainText(errorMsg);
        const message = await this.nameRequired.textContent();
        logger.info(`Name validation: ${message}`);
    }

    async emailRequiredMsg(errorMsg: string) {
        await expect(this.emailValid).toContainText(errorMsg);
        const message = await this.emailValid.textContent();
        logger.info(`Email validation: ${message}`);
    }

    async passwordRequiredMsg(errorMsg: string) {
        await expect(this.passwordRequired).toContainText(errorMsg);
        const message = await this.passwordRequired.textContent();
        logger.info(`Password validation: ${message}`);
    }

    async confirmPasswordRequiredMsg(errorMsg: string) {
        await expect(this.confirmPasswordRequired).toContainText(errorMsg);
        const message = await this.confirmPasswordRequired.textContent();
        logger.info(`Confirm password validation: ${message}`);
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


    async verifyAutoGeneratedEmployeeId() {
        const employeeId = await this.employeeId.inputValue();
        expect(employeeId).toMatch(/^EMP-\d+$/);
        logger.info(`Auto-generated Employee ID: ${employeeId}`);
    }

    async selectDepartment(department: string) {
        await this.department.selectOption({ label: department });
    }

    async selectDesignation(designation: string) {
        await this.designation.selectOption({ label: designation });
    }

    async selectExperience(experience: string) {
        await this.experience.selectOption({ label: experience });
    }

    async verifyAccountStatusChecked() {
        await expect(this.accountStatus).toHaveAttribute("aria-checked", "true");
    }

    async uploadProfilePhoto(filePath: string) {

        await this.profilePhoto.setInputFiles(filePath);
        //const fileChooserPromise = this.page.waitForEvent('filechooser');
        //await this.profilePhoto.click();
        //const fileChooser = await fileChooserPromise;
        //await fileChooser.setFiles(filePath);

    }
}  