import { Given,When,Then } from "@cucumber/cucumber";
import { lmsworld } from "../world/customworld";


Given('user clicks signup as learner', async function (this: lmsworld) {
    await this.learnerLoginPage.clickSignup()
});

When('the user enters credentials', async function (this: lmsworld,dataTable) {
    const credentials = dataTable.rowsHash();
    await this.signupPage.enterDetails(credentials)
    await this.signupPage.checkTermsAndCondition()
});

Then('The user should be redirected to the login page', async function (this: lmsworld) {
    await this.learnerLoginPage.isSigninVisible()
});

When('{string} left empty', async function (this: lmsworld,field:string) {
    switch(field){
        case "fullName":
            await this.signupPage.enterName("")
            break;
        case "email":
            await this.signupPage.enterEmail("")
            break;
        case "phone":
            await this.signupPage.enterPhone("")
            break;
        case "password":
            await this.signupPage.enterPassword("")
            break;
        case "confirmPassword":
            await this.signupPage.enterConfirmPassword("")
            break
    }
});

When('the user clicks create account', async function (this: lmsworld) {
    await this.signupPage.clickCreateAccount()
});

Then('the appropriate {string} message should be shown to the user near {string}', async function (this: lmsworld,warningMessage:string,field : string) {
    await this.signupPage.isMessageVisible(field,warningMessage)
});

When('left the checkbox unchecked', async function (this: lmsworld) {
    await this.signupPage.checkTermsAndCondition()
});

Then('warning message {string} should be shown to the user', async function (this: lmsworld,warningMessage:string) {
    await this.signupPage.isWarningVisible(warningMessage)
});