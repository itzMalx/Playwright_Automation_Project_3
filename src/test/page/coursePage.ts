import { BasePage } from "./basepage";
import { expect } from "@playwright/test";

export class CoursePage extends BasePage{

    private readonly searchField=this.page.locator("//input[@placeholder='Search trainings...']")
    private readonly courseResult=this.page.locator("//*[@id='main-content']/div/div/div/div/div[2]/article")

    async enterKeyword(keyword : string){
        await this.searchField.fill(keyword)
    }

    async  isCourseExists(keyword : string){
        await expect(this.courseResult).toContainText(keyword)
    }

}