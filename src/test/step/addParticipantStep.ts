// import { Given, When, Then } from "@cucumber/cucumber";
// import { lmsworld } from "../world/customworld";
// import { ExcelReader } from "../../utilities/excelReader";

// Given("user clicks on the participants tab",async function (this: lmsworld) {
//         await this.addParticipantPage.clickparticipanttab();
//         console.log("Participants tab clicked");
//     }
// );

// Given("user clicks on the add participant button",async function (this: lmsworld) {
//         await this.addParticipantPage.clickaddparti();
//         console.log("Add Participant button clicked");
//     }
// );

// Given('user enters participant details {string}',async function (this: lmsworld, testCase: string) {
//         const data = ExcelReader.getRow("AddParticipant.xlsx","Sheet1",testCase);
//         const fullName = data.FullName ?? "";
//         const email = data.Email ?? "";
//         const phone = data.Phone ?? "";
//         const password = data.Password ?? "";
//         const status = data.Status ?? "";

//         console.log(`Participant Name: ${fullName}`);
//         console.log(`Participant Email: ${email}`);
//         console.log(`Participant Phone: ${phone}`);
//         console.log(`Participant Status: ${status}`);

        
//         let uniqueEmail = email;
//         if (email.trim() !== "") {
//             const [name, domain] = email.split("@");
//             uniqueEmail =`${name}${Date.now()}@${domain}`;
//         }
//         console.log(`Unique Email: ${uniqueEmail}`);
//         this.participantName = String(fullName).trim();
//         this.participantEmail = String(uniqueEmail);
//         await this.addParticipantPage.enterdet(String(fullName),String(uniqueEmail),String(phone),String(password),String(status));
//         console.log("Participant details entered");
//     }
// );

// When("user clicks the submit add participant button",async function (this: lmsworld) {
//         await this.addParticipantPage.clickaddpartbtn();
//         console.log("Submit Add Participant button clicked");
//     }
// );

// Then('participant operation should be completed {string}',async function (this: lmsworld, testCase: string) {
//         const validTestCases = ["TC001", "TC004", "TC005"];
//         if (validTestCases.includes(testCase)) {
//             await this.addParticipantPage.verifyParticipantCreatedByEmail(this.participantEmail);
//             console.log(`Participant "${this.participantName}" created successfully`);
//         } 
//         else {
//             await this.addParticipantPage.verifyValidationMessage();
//             console.log(`${testCase} - Validation handled successfully`);
//         }
//     }
// );

import { Given, When, Then } from "@cucumber/cucumber";
import { lmsworld } from "../world/customworld";
import { ExcelReader } from "../../utilities/excelReader";

Given(
    "user clicks on the participants tab",
    async function (this: lmsworld) {

        await this.addParticipantPage.clickparticipanttab();

        console.log("Participants tab clicked");
    }
);


Given(
    "user clicks on the add participant button",
    async function (this: lmsworld) {

        await this.addParticipantPage.clickaddparti();

        console.log("Add Participant button clicked");
    }
);


Given(
    'user enters participant details {string}',
    async function (this: lmsworld, testCase: string) {

        const data = ExcelReader.getRow(
            "AddParticipant.xlsx",
            "Sheet1",
            testCase
        );

        const fullName = String(data.FullName ?? "");
        const email = String(data.Email ?? "");
        const phone = String(data.Phone ?? "");
        const password = String(data.Password ?? "");
        const status = String(data.Status ?? "");

        console.log(`Participant Name: ${fullName}`);
        console.log(`Participant Email: ${email}`);
        console.log(`Participant Phone: ${phone}`);
        console.log(`Participant Status: ${status}`);

        // Generate unique email only when email is provided
        let uniqueEmail = email;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (emailRegex.test(email.trim())) {

    const [name, domain] = email.split("@");

    uniqueEmail = `${name}${Date.now()}@${domain}`;
}

        console.log(`Unique Email: ${uniqueEmail}`);

        this.participantName = fullName.trim();
        this.participantEmail = uniqueEmail;

        await this.addParticipantPage.enterdet(
            fullName,
            uniqueEmail,
            phone,
            password,
            status
        );

        console.log("Participant details entered");
    }
);


When(
    "user clicks the submit add participant button",
    async function (this: lmsworld) {

        await this.addParticipantPage.clickaddpartbtn();

        console.log("Submit Add Participant button clicked");
    }
);

Then(
    'participant operation should be completed {string}',
    async function (this: lmsworld, testCase: string) {

        if (testCase === "TC001") {

            await this.addParticipantPage.verifyParticipantCreatedByEmail(
                this.participantEmail
            );

            console.log(
                `Participant "${this.participantName}" created successfully`
            );

        } else {

            await this.addParticipantPage.verifyValidationMessage();

            console.log(
                `${testCase} - Validation handled successfully`
            );
        }
    }
);