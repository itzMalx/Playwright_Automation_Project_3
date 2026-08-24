import { Given,When,Then } from "@cucumber/cucumber";
import { lmsworld } from "../world/customworld";

let Keyword : string

Given('clicks Explore courses button', async function (this: lmsworld) {
    await this.dashboardPage.clickExploreCourse();
});

Given('enters {string} in search field', async function (this: lmsworld,keyword : string) {
    Keyword=keyword
    await this.coursePage.enterKeyword(keyword)
});

Then('appropriate course should be shown', async function (this: lmsworld) {
    await this.coursePage.isCourseExists(Keyword)
});