import { BasePage } from "./basepage";
import { expect } from "@playwright/test";

export class LearnerExploreTrainingPage extends BasePage {

    // Explore Courses button from learner dashboard
    private readonly exploreCourses =
        this.page.locator("//button[@class='tdb-create-btn']");

    // Explore Trainings page title
    private readonly exploreTrainingsTitle =
        this.page.getByText("Explore Trainings", { exact: true });

    // Open tab
    private readonly openTab =
        this.page.getByRole("button", { name: "Open", exact: true });

    // Joined tab
    private readonly joinedTab =
        this.page.getByRole("button", { name: "Joined", exact: true });

    // Join Training button
    private readonly joinTrainingButton =
        this.page.locator(
            "//button[@class='btn-enterprise btn-enterprise--primary w-full']"
        );

    // Enrollment success message
    private readonly enrolledMessage =
        this.page.getByText("Enrolled successfully.", { exact: true });


    // Click Explore Courses
    async clickExploreCourses() {
        await this.exploreCourses.click();
    }


    // Verify Explore Trainings page
    async verifyExploreTrainingsPage() {
        await expect(this.exploreTrainingsTitle).toBeVisible({
            timeout: 10000
        });
    }


    // Click Open tab
    async clickOpenTab() {
        await this.openTab.click();
    }


    // Verify Open trainings are available
    async verifyOpenTrainingsDisplayed() {
        await expect(this.joinTrainingButton.first()).toBeVisible({
            timeout: 10000
        });
    }


    // Verify Join Training button
    async verifyJoinTrainingButtonDisplayed() {
        await expect(this.joinTrainingButton.first()).toBeVisible({
            timeout: 10000
        });
    }


    // Click Join Training
    async clickJoinTraining() {
        await this.joinTrainingButton.first().click();
    }


    // Verify successful enrollment
    async verifyEnrolledSuccessfully() {
        await expect(this.enrolledMessage).toBeVisible({
            timeout: 10000
        });
    }


    // Click Joined tab
    async clickJoinedTab() {
        await this.joinedTab.click();
    }


    // Verify joined trainings are displayed
    async verifyJoinedTrainingsDisplayed() {

        // A joined training should be present.
        // We use the page content instead of the generic "article" locator.
        await expect(
            this.page.locator("text=Joined").first()
        ).toBeVisible({
            timeout: 10000
        });
    }
}