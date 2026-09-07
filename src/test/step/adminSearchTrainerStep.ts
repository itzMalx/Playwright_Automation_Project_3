import { Given, When, Then } from "@cucumber/cucumber";
import { lmsworld } from "../world/customworld";
import { logger } from "../../utilities/logger";

When('the admin enters {string} in the trainer search field', async function (this: lmsworld,searchText: string) {
   await this.adminSearchTrainerPage.searchTrainer(searchText);
});

Then('the searched {string} dispalyed under {string}', async function (this: lmsworld, data: string, parameter: string) {
  await this.adminSearchTrainerPage.verifyTrainerSearchResult(data,parameter);
});
