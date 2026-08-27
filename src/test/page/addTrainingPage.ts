import { BasePage } from "./basepage";

export class AddTrainingPage extends BasePage {

    private readonly addtrainbutton =
        this.page.getByRole("button", { name: /^Add Training$/ });

    private readonly trainingtitle =
        this.page.locator("//input[@placeholder='e.g. React Fundamentals']");

    private readonly trainertab =
        this.page.getByRole("button", { name: /^Training Programs$/ });

    private readonly description =
        this.page.locator("//textarea[@placeholder='Training objectives and content overview...']");

    private readonly startDateTime =
        this.page.locator("//input[@type='datetime-local']").nth(0);

    private readonly endDateTime =
        this.page.locator("//input[@type='datetime-local']").nth(1);

    private readonly capacity =
        this.page.locator("//input[@placeholder='e.g. 30']");

    private readonly createtrainsession =
        this.page.locator(
            "//button[contains(@class,'reg-admin-btn--primary') and contains(normalize-space(.),'Create Training Session')]"
        );

    private readonly checksession =
        this.page.locator("//div[@class='reg-admin']");


    async clickaddtrainbutton() {
        await this.clicktrainertab();
        await this.click(this.addtrainbutton);
    }
    async clicktrainertab(){
        await this.click(this.trainertab);
    }

    async enterDetails(
        title: string,
        description: string,
        startDateTime: string,
        endDateTime: string,
        capacity: string
    ) {

        await this.fill(this.trainingtitle, title);

        await this.fill(this.description, description);

        await this.fill(this.startDateTime, startDateTime);

        await this.fill(this.endDateTime, endDateTime);

        await this.fill(this.capacity, capacity);
    }


    async clickCreateTrainingSession() {
        await this.click(this.createtrainsession);
    }


    async verifyTrainingSessionCreated() {
        await this.checksession.waitFor({
            state: "visible"
        });
    }
    async verifyTrainingSessionNotCreated() {

        await this.trainingtitle.waitFor({
            state: "visible"
        });

        console.log("Training session was not created");
    }
}
