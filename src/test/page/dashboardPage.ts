import { BasePage } from "./basepage";

export class DashboardPage extends BasePage{

    private readonly exploreCourse=this.page.locator("//button[@class='tdb-create-btn']")
    private readonly myCourseBtn = this.page.locator("//button//span[text()='My Courses']")

    async clickExploreCourse(){
        await this.exploreCourse.click()
    }

    async clickMyCourse(){
        await this.click(this.myCourseBtn)
    }

}