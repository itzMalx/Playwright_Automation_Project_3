import { Given, When, Then } from "@cucumber/cucumber";
import { lmsworld } from "../world/customworld";


When(
    "learner clicks on the Explore Courses button",
    async function (this: lmsworld) {

        await this.learnerExploreTrainingPage.clickExploreCourses();
    }
);


Then(
    "learner should be navigated to the Explore Trainings page",
    async function (this: lmsworld) {

        await this.learnerExploreTrainingPage.verifyExploreTrainingsPage();
    }
);


Given(
    "learner is on the Explore Trainings page",
    async function (this: lmsworld) {

        await this.learnerExploreTrainingPage.clickExploreCourses();

        await this.learnerExploreTrainingPage.verifyExploreTrainingsPage();
    }
);


When(
    "learner clicks on the Open tab",
    async function (this: lmsworld) {

        await this.learnerExploreTrainingPage.clickOpenTab();
    }
);


Then(
    "available trainings should be displayed",
    async function (this: lmsworld) {

        await this.learnerExploreTrainingPage
            .verifyOpenTrainingsDisplayed();
    }
);


Then(
    "Join Training button should be displayed",
    async function (this: lmsworld) {

        await this.learnerExploreTrainingPage
            .verifyJoinTrainingButtonDisplayed();
    }
);


When(
    "learner clicks on the Join Training button",
    async function (this: lmsworld) {

        await this.learnerExploreTrainingPage
            .clickJoinTraining();
    }
);


Then(
    'learner should see the "Enrolled successfully." message',
    async function (this: lmsworld) {

        await this.learnerExploreTrainingPage
            .verifyEnrolledSuccessfully();
    }
);


When(
    "learner clicks on the Joined tab",
    async function (this: lmsworld) {

        await this.learnerExploreTrainingPage
            .clickJoinedTab();
    }
);


Then(
    "joined trainings should be displayed",
    async function (this: lmsworld) {

        await this.learnerExploreTrainingPage
            .verifyJoinedTrainingsDisplayed();
    }
);