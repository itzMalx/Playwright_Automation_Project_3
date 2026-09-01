import { BasePage } from "./basepage";
import { expect } from "@playwright/test";

export class CoursePage extends BasePage{

    private readonly searchField=this.page.locator("//input[@placeholder='Search trainings...']")
    private readonly courseResult=this.page.locator("//*[@id='main-content']/div/div/div/div/div[2]/article")
    private readonly noMatchMessage=this.page.locator("//h3[@class='empty-state__title']")

    async enterKeyword(keyword : string){
        await this.searchField.fill(keyword)
    }

    async isCourseExists(keyword: string) {
        const result=(await this.courseResult.textContent()).toLowerCase();
        await expect(result).toContain(keyword.trim().toLowerCase());
    }

    async noMatchVisible(){
        await expect(this.noMatchMessage).toBeVisible()
    }

}