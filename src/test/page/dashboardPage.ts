import { BasePage } from "./basepage";

export class DashboardPage extends BasePage{

    private readonly exploreCourse=this.page.locator("//button[@class='tdb-create-btn']")
    private readonly myCourseBtn = this.page.locator("//button//span[text()='My Courses']")
    private readonly profile=this.page.locator("//span[normalize-space()='Profile']")

    async clickExploreCourse(){
        await this.exploreCourse.click()
    }

    async clickMyCourse(){
        await this.click(this.myCourseBtn)
    }

    async clickProfile(){
        await this.click(this.profile)
    }

}