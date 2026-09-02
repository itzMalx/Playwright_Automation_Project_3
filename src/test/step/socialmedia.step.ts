import { When,Then } from "@cucumber/cucumber";
import { lmsworld } from "../world/customworld";
import { expect } from "@playwright/test";

let newPagePromise : any
let newPage : any

When('the learner navigates to the profile page', async function (this: lmsworld) {
    await this.dashboardPage.clickProfile()
});

When('the learner clicks the social media link edit button', async function (this: lmsworld) {
    await this.profilePage.clickEditButton()
});

When('the learner sets the following social media links:', async function (dataTable) {
    const links = dataTable.rowsHash();

    await this.profilePage.setLinks(links);
});

When('the learner clicks the Save button', async function (this: lmsworld) {
    await this.profilePage.clickSave()
});

When('the learner clicks the {string} link',async function (this: lmsworld, media: string) {

        newPagePromise=this.page.context().waitForEvent('page');
        await this.profilePage.clickLink(media);

        newPage=await newPagePromise;
        await newPage.waitForLoadState();
    }
);

Then('the learner should be navigated to the {string} site',async function (this: lmsworld, expectedUrl: string) {
        await expect(newPage).toHaveURL(new RegExp(expectedUrl));
    }
);