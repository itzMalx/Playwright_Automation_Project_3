import { Given, When, Then } from "@cucumber/cucumber";
import { lmsworld } from "../world/customworld";
import { logger } from "../../utilities/logger";

When('the admin enters {string} in the trainer search field', async function (this: lmsworld,searchText: string) {
   await this.adminSearchTrainerPage.searchTrainer(searchText);
});

Then('the trainer should be displayed the searched {string}', async function (this: lmsworld, trainerName: string) {
      await this.adminSearchTrainerPage.verifyTrainerContainsSearchText(trainerName);
});