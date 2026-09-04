import { BasePage } from "./basepage";

export class ScheduleInterviewPage extends BasePage {

    private readonly interviewTab =
        this.page.getByText("Interviews", { exact: true }).first();

    // First Schedule Interview button - opens the form
    private readonly scheduleInterviewButton =
        this.page.getByRole("button", {
            name: /Schedule Interview/i
        }).first();

    private readonly interviewTitle =
        this.page.locator(
            "//input[@placeholder='e.g., Senior Developer Technical Interview']"
        );

    private readonly interviewDate =
        this.page.locator("//input[@type='date']");

    private readonly interviewTime =
        this.page.locator("//input[@type='time']");

    // Candidate custom dropdown
    private readonly candidateDropdown =
        this.page.getByText("Select candidate", {
            exact: true
        });

    private readonly candidateSearch =
        this.page.locator(
            "//input[@placeholder='Search candidate...']"
        );

    // Interviewer custom dropdown
    private readonly interviewerDropdown =
        this.page.getByText("Select interviewer", {
            exact: true
        });

    private readonly interviewerSearch =
        this.page.locator(
            "//input[@placeholder='Search interviewer...']"
        );

    private readonly meetingType =
        this.page.locator(
            "//label[contains(normalize-space(),'Meeting Type')]/following::select[1]"
        );

    private readonly interviewType =
        this.page.locator(
            "//label[contains(normalize-space(),'Interview Type')]/following::select[1]"
        );

    private readonly duration =
        this.page.locator(
            "//label[contains(normalize-space(),'Duration')]/following::select[1]"
        );

    private readonly notes =
        this.page.locator(
            "//textarea[@placeholder='Optional notes about this interview...']"
        );

    // Final submit button
    private readonly saveInterviewButton =
        this.page.getByRole("button", {
            name: /Schedule Interview/i
        }).last();


    async clickInterviewTab() {

        await this.click(this.interviewTab);

        console.log("Interviews tab clicked");
    }


    async clickScheduleInterviewButton() {

        await this.click(this.scheduleInterviewButton);

        console.log("Schedule Interview page opened");
    }


    // Convert DD-MM-YYYY to YYYY-MM-DD
    private convertDate(date: string): string {

        if (!date || date.trim() === "") {
            return "";
        }

        const [day, month, year] = date.split("-");

        return `${year}-${month}-${day}`;
    }


    async enterInterviewDetails(
        title: string,
        date: string,
        candidate: string,
        time: string,
        interviewer: string,
        meetingType: string,
        interviewType: string,
        duration: string,
        notes: string
    ) {

        // Interview Title
        if (title.trim() !== "") {

            await this.fill(
                this.interviewTitle,
                title
            );
        }

        // Interview Date
        if (date.trim() !== "") {

            const formattedDate =
                this.convertDate(date);

            console.log(
                `Interview Date: ${date}`
            );

            console.log(
                `Formatted Date: ${formattedDate}`
            );

            await this.fill(
                this.interviewDate,
                formattedDate
            );
        }

        // Interview Time
        if (time.trim() !== "") {

            await this.fill(
                this.interviewTime,
                time
            );
        }

        // Candidate
        if (candidate.trim() !== "") {

            await this.click(
                this.candidateDropdown
            );

            await this.fill(
                this.candidateSearch,
                candidate
            );

            await this.page
                .getByText(candidate, {
                    exact: true
                })
                .click();

            console.log(
                `Candidate selected: ${candidate}`
            );
        }

        // Interviewer
        if (interviewer.trim() !== "") {

            await this.click(
                this.interviewerDropdown
            );

            await this.fill(
                this.interviewerSearch,
                interviewer
            );

            await this.page
                .getByText(interviewer, {
                    exact: true
                })
                .click();

            console.log(
                `Interviewer selected: ${interviewer}`
            );
        }

        // Meeting Type
        if (meetingType.trim() !== "") {

            await this.meetingType.selectOption({
                label: meetingType
            });
        }

        // Interview Type
        if (interviewType.trim() !== "") {

            await this.interviewType.selectOption({
                label: interviewType
            });
        }

        // Duration
        if (duration.trim() !== "") {

            await this.duration.selectOption({
                label: duration
            });
        }

        // Notes
        if (notes.trim() !== "") {

            await this.fill(
                this.notes,
                notes
            );
        }

        console.log(
            "Interview details entered"
        );
    }


    async clickFinalScheduleInterview() {

        await this.saveInterviewButton
            .scrollIntoViewIfNeeded();

        const disabled =
            await this.saveInterviewButton.isDisabled();

        if (disabled) {

            console.log(
                "Schedule Interview button is disabled"
            );

            return false;
        }

        await this.saveInterviewButton.click();

        console.log(
            "Final Schedule Interview button clicked"
        );

        return true;
    }


    async verifyInterviewScheduled() {

        await this.page.waitForTimeout(1500);

        const successMessage =
            this.page.getByText(
                /Interview scheduled successfully|Interview scheduled|successfully scheduled/i
            ).first();

        if (
            await successMessage
                .isVisible()
                .catch(() => false)
        ) {

            console.log(
                "Interview scheduled successfully"
            );

            return;
        }

        throw new Error(
            "Interview was not scheduled successfully"
        );
    }


    async verifyValidationMessage() {

        // Check HTML5 validation
        const invalidFields = this.page.locator(
            "input:invalid, select:invalid, textarea:invalid"
        );

        if (await invalidFields.count() > 0) {

            const message =
                await invalidFields
                    .first()
                    .evaluate(
                        (element: HTMLInputElement) =>
                            element.validationMessage
                    );

            console.log(
                `Validation message: ${message}`
            );

            return;
        }

        // Check if submit button is disabled
        const disabled =
            await this.saveInterviewButton.isDisabled();

        if (disabled) {

            console.log(
                "Validation handled - Schedule Interview button is disabled"
            );

            return;
        }

        // Application error message
        const errorMessage =
            this.page.locator(
                "text=/required|please select|please enter|invalid|error/i"
            ).first();

        if (
            await errorMessage
                .isVisible()
                .catch(() => false)
        ) {

            console.log(
                `Application validation: ${
                    await errorMessage.innerText()
                }`
            );

            return;
        }

        throw new Error(
            "No validation error was found"
        );
    }
}