import { Given,When,Then } from "@cucumber/cucumber";
import { lmsworld } from "../world/customworld";
import { ExcelReader } from "../../utilities/excelReader";

let Keyword : string

When('the user clicks the Explore Courses button', async function (this: lmsworld) {
    await this.dashboardPage.clickExploreCourse();
});

Given('enters {string} in search field', async function (this: lmsworld,keyword : string) {
    Keyword=keyword
    await this.coursePage.enterKeyword(keyword)
});

Given('enters keywords with {string} in search field', async function (this: lmsworld, sheetName: string) {
    const data=ExcelReader.getData('./src/test/test-data/SearchWithSpaceData.xlsx',sheetName);
    await this.coursePage.enterKeyword(data[0].keywordWithSpace);
});


Then('appropriate course should be shown', async function (this: lmsworld) {
    await this.coursePage.isCourseExists(Keyword)
});

Then('No match message should be shown', async function (this: lmsworld) {
    await this.coursePage.noMatchVisible()
});

When('the user enters only spaces in the search field', async function (this: lmsworld) {
    await this.coursePage.enterKeyword("    ")
});