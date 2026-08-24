import { BasePage } from "./basepage";

export class DashboardPage extends BasePage{

    private readonly exploreCourse=this.page.locator("//button[@class='tdb-create-btn']")

    async clickExploreCourse(){
        await this.exploreCourse.click()
    }

}