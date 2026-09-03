import { Given, When, Then } from "@cucumber/cucumber";
import { lmsworld } from "../world/customworld";
import { ExcelReader } from "../../utilities/excelReader";


Given(
    "user clicks on the interview tab",
    async function (this: lmsworld) {

        await this.scheduleInterviewPage
            .clickInterviewTab();

        console.log(
            "Interviews tab clicked"
        );
    }
);


Given(
    "user clicks on the schedule interview button",
    async function (this: lmsworld) {

        await this.scheduleInterviewPage
            .clickScheduleInterviewButton();

        console.log(
            "Schedule Interview page opened"
        );
    }
);


Given(
    "user enters interview details {string}",
    async function (
        this: lmsworld,
        testCase: string
    ) {

        const data =
            ExcelReader.getRow(
                "ScheduleInterview.xlsx",
                "Sheet1",
                testCase
            );

        console.log(
            "-----------------------------------"
        );

        console.log(
            `Test Case: ${testCase}`
        );

        console.log(
            `Interview Title: ${data.InterviewTitle}`
        );

        console.log(
            `Interview Date: ${data.InterviewDate}`
        );

        console.log(
            `Candidate: ${data.Candidate}`
        );

        console.log(
            `Interview Time: ${data.InterviewTime}`
        );

        console.log(
            `Interviewer: ${data.Interviewer}`
        );

        console.log(
            `Meeting Type: ${data.MeetingType}`
        );

        console.log(
            `Interview Type: ${data.InterviewType}`
        );

        console.log(
            `Duration: ${data.Duration}`
        );

        console.log(
            `Notes: ${data.Notes}`
        );

        console.log(
            "-----------------------------------"
        );


        await this.scheduleInterviewPage
            .enterInterviewDetails(

                String(
                    data.InterviewTitle ?? ""
                ),

                String(
                    data.InterviewDate ?? ""
                ),

                String(
                    data.Candidate ?? ""
                ),

                String(
                    data.InterviewTime ?? ""
                ),

                String(
                    data.Interviewer ?? ""
                ),

                String(
                    data.MeetingType ?? ""
                ),

                String(
                    data.InterviewType ?? ""
                ),

                String(
                    data.Duration ?? ""
                ),

                String(
                    data.Notes ?? ""
                )
            );

        console.log(
            `${testCase} - Interview details entered`
        );
    }
);


When(
    "user clicks on the schedule interview",
    async function (this: lmsworld) {

        const submitted =
            await this.scheduleInterviewPage
                .clickFinalScheduleInterview();

        if (submitted) {

            console.log(
                "Schedule Interview submitted"
            );

        } else {

            console.log(
                "Schedule Interview not submitted because button is disabled"
            );
        }
    }
);


Then(
    "interview operation should be completed {string}",
    async function (
        this: lmsworld,
        testCase: string
    ) {

        if (testCase === "TC001") {

            await this.scheduleInterviewPage
                .verifyInterviewScheduled();

            console.log(
                "TC001 - Interview scheduled successfully"
            );

        } else {

            await this.scheduleInterviewPage
                .verifyValidationMessage();

            console.log(
                `${testCase} - Validation handled successfully`
            );
        }
    }
);