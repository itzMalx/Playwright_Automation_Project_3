import { BasePage } from "./basepage";
import { expect } from "@playwright/test";

export class SignupPage extends BasePage{

    private readonly name=this.page.locator("//input[@id='reg-name']")
    private readonly email=this.page.locator("//input[@id='reg-email']")
    private readonly phone=this.page.locator("//input[@id='reg-phone']")
    private readonly password=this.page.locator("//input[@id='reg-pw']")
    private readonly confirmPassword=this.page.locator("//input[@id='reg-confirm']")
    private readonly termsAndCondition=this.page.locator("//input[@type='checkbox']")
    private readonly createAccount=this.page.locator("//button[@type='submit']")
    private readonly success=this.page.locator("//span[contains(text(),'Registration submitted successfully! Your account ')]")
    private readonly warningMessage=this.page.locator("//span[@class='auth-error-text']")

    async enterDetails(credentials:any){
        await this.name.fill(credentials.fullName)
        await this.email.fill(this.makeUnique(credentials.email));
        await this.phone.fill(credentials.phone)
        await this.password.fill(credentials.password)
        await this.confirmPassword.fill(credentials.confirmPassword)
    }

    private makeUnique(email: string):string{
        if(!email) {
            return email;
        }
        if(!email.includes("@")) {
            return `${email}${Date.now()}`;
        }
        const [username, domain] = email.split("@");
        return `${username}${Date.now()}@${domain}`;
}

    async checkTermsAndCondition(){
        await this.termsAndCondition.click()
    }

    async enterName(name:string){
        await this.name.fill(name)
    }

    async enterEmail(email: string) {
        await this.email.fill(this.makeUnique(email));
    }

    async enterPhone(phone:string){
        await this.phone.fill(phone)
    }

    async enterPassword(password:string){
        await this.password.fill(password)
    }

    async enterConfirmPassword(password:string){
        await this.confirmPassword.fill(password)
    }

    async clickCreateAccount(){
        await this.createAccount.click()
    }

    async isSuccess(){
        await expect(this.success).toBeVisible()
    }

    async isMessageVisible(field : string, warningMessage : string){

        let emptyField:any 

        if(field==="fullName"){
            emptyField=this.name
        }
        else if(field==="email"){
            emptyField=this.email
        }
        else if(field==="phone"){
            emptyField=this.phone
        }
        else if(field==="password"){
            emptyField=this.password
        }
        else if(field==="confirmPassword"){
            emptyField=this.confirmPassword
        }

        const message=await emptyField.evaluate((element: HTMLInputElement) => element.validationMessage);

        expect(message).toContain(warningMessage);
    }

    async isWarningVisible(message : string){
        await expect(this.warningMessage).toContainText(message);
    }

}