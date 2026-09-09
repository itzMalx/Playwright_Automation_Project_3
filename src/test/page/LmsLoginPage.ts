import { BasePage } from "./basepage";
import { Locator, Page, expect } from "@playwright/test";

export class LmsLoginPage extends BasePage {
    private readonly adminRoleTab: Locator;
    private readonly trainerRoleTab: Locator;
    private readonly learnerRoleTab: Locator;
    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly submitBtn: Locator;
    private readonly invalidCredentialsToast: Locator;
    private readonly welcomeHeader: Locator;

    constructor(page: Page) {
        super(page);
        this.adminRoleTab = this.page.locator("//div[contains(@class,'auth-role-selector')]/button[contains(text(),'Admin')] | //button[contains(@class,'auth-role-btn') and contains(text(),'Admin')]");
        this.trainerRoleTab = this.page.locator("//div[contains(@class,'auth-role-selector')]/button[contains(text(),'Trainer')] | //button[contains(@class,'auth-role-btn') and contains(text(),'Trainer')]");
        this.learnerRoleTab = this.page.locator("//div[contains(@class,'auth-role-selector')]/button[contains(text(),'Learner')] | //button[contains(@class,'auth-role-btn') and contains(text(),'Learner')]");
        this.emailInput = this.page.locator("#login-email");
        this.passwordInput = this.page.locator("#login-password");
        this.submitBtn = this.page.locator("button.auth-submit-btn, button[type='submit']");
        this.invalidCredentialsToast = this.page.getByText("Invalid email or password");
        this.welcomeHeader = this.page.locator(".adb-welcome-title, h1:has-text('Welcome')");
    }

    async selectRole(role: string): Promise<void> {
        const lowerRole = role.toLowerCase();
        if (lowerRole === "admin") {
            await this.click(this.adminRoleTab);
        } else if (lowerRole === "trainer") {
            await this.click(this.trainerRoleTab);
        } else if (lowerRole === "learner") {
            await this.click(this.learnerRoleTab);
        } else {
            throw new Error(`Unknown role: ${role}`);
        }
    }

    async enterEmail(email: string): Promise<void> {
        await this.fill(this.emailInput, email);
    }

    async enterPassword(password: string): Promise<void> {
        await this.fill(this.passwordInput, password);
    }

    async enterCredentials(email: string, password: string): Promise<void> {
        await this.enterEmail(email);
        await this.enterPassword(password);
    }

    async clickSubmit(): Promise<void> {
        await this.click(this.submitBtn);
    }

    async login(role: string, email: string, password: string): Promise<void> {
        await this.goto();
        await this.selectRole(role);
        await this.enterCredentials(email, password);
        await this.clickSubmit();
    }

    async verifyLoginSuccess(): Promise<void> {
        await this.welcomeHeader.waitFor({ state: "visible", timeout: 7000 });
        expect(await this.welcomeHeader.isVisible()).toBeTruthy();
    }

    async verifyInvalidCredentialsToast(): Promise<void> {
        await this.invalidCredentialsToast.waitFor({ state: "visible", timeout: 5000 });
        expect(await this.invalidCredentialsToast.isVisible()).toBeTruthy();
    }

    async getEmailValidationMessage(): Promise<string> {
        return await this.emailInput.evaluate((el: HTMLInputElement) => el.validationMessage);
    }

    async getPasswordValidationMessage(): Promise<string> {
        return await this.passwordInput.evaluate((el: HTMLInputElement) => el.validationMessage);
    }

    async isEmailValid(): Promise<boolean> {
        return await this.emailInput.evaluate((el: HTMLInputElement) => el.checkValidity());
    }

    async isPasswordValid(): Promise<boolean> {
        return await this.passwordInput.evaluate((el: HTMLInputElement) => el.checkValidity());
    }

    async verifyEmailValidation(): Promise<void> {
        const isValid = await this.isEmailValid();
        expect(isValid).toBeFalsy();
        const msg = await this.getEmailValidationMessage();
        expect(msg.length).toBeGreaterThan(0);
    }

    async verifyPasswordValidation(): Promise<void> {
        const isValid = await this.isPasswordValid();
        expect(isValid).toBeFalsy();
        const msg = await this.getPasswordValidationMessage();
        expect(msg.length).toBeGreaterThan(0);
    }
}
