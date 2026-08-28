import { AdminAddTrainerPage } from './../page/adminAddTrainerPage';
import { Given, When, Then } from "@cucumber/cucumber";
import { lmsworld } from "../world/customworld";
import { expect } from "@playwright/test";

Given('clicks on the Trainer side pannel button', async function (this: lmsworld) {
  await this.adminAddTrainerPage.clickTrainerBtn();
});

Given('clicks on the Add trainer button', async function (this: lmsworld) {
  await this.adminAddTrainerPage.clickAddTrainer();
});

When('the admin enters {string} in the Full Name field', async function (this: lmsworld, name: string) {
  await this.adminAddTrainerPage.enterFullname(name)
});

When('the admin enters {string} in the Email Address field', async function (this: lmsworld, email: string) {
  await this.adminAddTrainerPage.enteremail(email)
});

When('the admin enters {string} in the Password field', async function (this: lmsworld, password: string) {
  await this.adminAddTrainerPage.enterPassword(password)
});

When('the admin enters {string} in the Confirm Password field', async function (this: lmsworld, confirmPasword: string) {
  await this.adminAddTrainerPage.enterConfirmPassword(confirmPasword)
});

When('the admin clicks the Create Trainer button', async function (this: lmsworld) {
  await this.adminAddTrainerPage.clickCreateTrainer()
});

Then('the {string} validation message should be displayed for {string}', async function (this: lmsworld, errorMsg: string, type: string) {
  await this.adminAddTrainerPage.validateError(type, errorMsg)
});
