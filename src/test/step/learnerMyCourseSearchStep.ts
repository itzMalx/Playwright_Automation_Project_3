import { Given, When, Then } from "@cucumber/cucumber";
import { lmsworld } from "../world/customworld";
import { expect } from "@playwright/test";

Given("learner clicks on my course button", async function (this: lmsworld) {
    await this.dashboardPage.clickMyCourse();
});

When("the user enters {string} in the course search field", async function (this: lmsworld, search: string) {
    await this.learnerMyCoursePage.enterText(search);
});

Then("the course {string} should be displayed", async function (this: lmsworld, expectedCourse: string) {
    const result = await this.learnerMyCoursePage.verifySearchResult(expectedCourse);
    expect(result).toBe(true);
});

Then('no courses should be displayed', async function () {
  await this.learnerMyCoursePage.noCourseResult();
});
