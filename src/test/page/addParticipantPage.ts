import { BasePage } from "./basepage";
import { expect } from "@playwright/test";
export class AddParticipantPage extends BasePage {

    private readonly participanttab =this.page.locator("//span[text()='Participants']");
    private readonly addpart =this.page.locator("//button[contains(.,'Add Participant')]").first();
    private readonly fullname =this.page.locator("//input[@placeholder='e.g. Rahul Sharma']");
    private readonly email =this.page.locator("//input[@type='email']");
    private readonly phone =this.page.locator("//input[@type='tel']");
    private readonly accstatus =this.page.locator("//select[@class='reg-select']");
    private readonly password =this.page.locator("//input[@placeholder='Enter password (min 6 chars)']");
    private readonly addpartbtn =this.page.locator("//button[@type='submit']").last();

    async clickparticipanttab() {
        await this.click(this.participanttab);
        console.log("Participants tab clicked");
    }

    async clickaddparti() {
        await this.click(this.addpart);
        console.log("Add Participant button clicked");
    }

    async enterdet(fname: string,mail: string,tel: string | number,pass: string,status: string) {
    await this.fill(this.fullname, String(fname));
    await this.fill(this.email, String(mail));
    await this.fill(this.phone, String(tel));
    await this.accstatus.selectOption({label: String(status)});
    await this.fill(this.password, String(pass));
}
    async clickaddpartbtn() {
        await this.click(this.addpartbtn);
        console.log("Add Participant submitted");
    }

async verifyParticipantCreated(fname: string) {
    await this.page.getByText(fname, { exact: true }).first().waitFor({ state: "visible" });
    console.log("Participant created successfully");
}
async verifyParticipantCreatedByEmail(email: string) {
    await this.page.getByText(email, { exact: true }).first().waitFor({ state: "visible" });
    console.log("Participant created successfully");
}
    async verifyEmailRequiredValidation() {
    const message = await this.email.evaluate(
        (element: HTMLInputElement) => element.validationMessage
    );

     expect(message).toBe("Please fill out this field.");
    }
    async getValidationMessage(locator: any) {
    return await locator.evaluate(
        (element: HTMLInputElement) => element.validationMessage
    );
}

async verifyValidationMessage() {
    const fields = [this.fullname,this.email,this.phone,this.password];
    for (const field of fields) {
        const isInvalid = await field.evaluate(
            (element: HTMLInputElement) => !element.checkValidity()
        );
        if (isInvalid) {
            const message = await field.evaluate((element: HTMLInputElement) =>element.validationMessage);
            console.log(`Validation message: ${message}`)
            expect(message).toBe("Please fill out this field.");
            return;
        }
    }
    throw new Error("No validation error was found");
}}
