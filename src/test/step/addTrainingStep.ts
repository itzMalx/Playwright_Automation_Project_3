import { When, Then } from "@cucumber/cucumber";
import { lmsworld } from "../world/customworld";


When(
    "user clicks the add training button",
    async function (this: lmsworld) {

        await this.addTrainingPage.clickaddtrainbutton();

    }
);


When(
    "user enters the credentials",
    async function (this: lmsworld) {

        await this.addTrainingPage.enterDetails(
            process.env.TRAINING_TITLE!,
            process.env.TRAINING_DESCRIPTION!,
            process.env.TRAINING_START!,
            process.env.TRAINING_END!,
            process.env.TRAINING_CAPACITY!
        );

    }
);


When(
    "user enters training details {string} {string} {string} {string} {string}",
    async function (
        this: lmsworld,
        title: string,
        description: string,
        startDateTime: string,
        endDateTime: string,
        capacity: string
    ) {

        await this.addTrainingPage.enterDetails(
            title,
            description,
            startDateTime,
            endDateTime,
            capacity
        );

    }
);


When(
    "user clicks the create training session button",
    async function (this: lmsworld) {

        await this.addTrainingPage.clickCreateTrainingSession();

    }
);


Then(
    "training session will be created",
    async function (this: lmsworld) {

        await this.addTrainingPage.verifyTrainingSessionCreated();

        console.log("Training session created successfully");

    }
);


Then(
    "training session should not be created",
    async function (this: lmsworld) {

        await this.addTrainingPage.verifyTrainingSessionNotCreated();

        console.log("Invalid training data validation passed");

    }
);