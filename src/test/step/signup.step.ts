import { Given,When,Then } from "@cucumber/cucumber";
import { lmsworld } from "../world/customworld";


let emptyField:string

Given('user clicks signup as learner', async function (this: lmsworld) {
    await this.learnerLoginPage.clickSignup()
});

When('the user enters credentials', async function (this: lmsworld,dataTable) {
    const credentials = dataTable.rowsHash();
    await this.signupPage.enterDetails(credentials)
});

Then('The user should be redirected to the login page', async function (this: lmsworld) {
    await this.learnerLoginPage.isSigninVisible()
});

When('{string} left empty', async function (this: lmsworld,field:string) {
    switch(field){
        case "fullName":
            emptyField=field
            await this.signupPage.enterName("")
            break;
        case "email":
            await this.signupPage.enterEmail("")
            emptyField=field
            break;
        case "phone":
            await this.signupPage.enterPhone("")
            emptyField=field
            break;
        case "password":
            await this.signupPage.enterPassword("")
            emptyField=field
            break;
        case "confirmPassword":
            await this.signupPage.enterConfirmPassword("")
            emptyField=field
            break
    }
});

When('the user clicks create account', async function (this: lmsworld) {
    await this.signupPage.clickCreateAccount()
});

Then('the appropriate {string} message should be shown to the user', async function (this: lmsworld,warningMessage:string) {
    await this.signupPage.isMessageVisible(emptyField,warningMessage)
});