import { BasePage } from "./basepage";

export class searchParticipantPage extends BasePage {

    private readonly searchParticipantInput =
        this.page.getByPlaceholder("Search participants...");

    private readonly noParticipantsFoundMessage =
        this.page.getByText("No Participants Found", {
            exact: true
        });


    async navigateToParticipantsPage() {

        await this.page.goto(
            "https://www.waveinitlms.online/admin?tab=participants"
        );

        await this.searchParticipantInput.waitFor({
            state: "visible"
        });

    }


    async searchParticipant(value: string) {

        await this.searchParticipantInput.fill(value);

        await this.page.waitForTimeout(1000);

    }


    async clearParticipantSearch() {

        await this.searchParticipantInput.clear();

        await this.page.waitForTimeout(1000);

    }


    async isParticipantNameDisplayed(
        name: string
    ): Promise<boolean> {

        const participantName =
            this.page.getByText(name, {
                exact: true
            }).first();

        try {

            await participantName.waitFor({
                state: "visible",
                timeout: 5000
            });

            return true;

        } catch {

            return false;

        }

    }


    async isParticipantEmailDisplayed(
        email: string
    ): Promise<boolean> {

        const participantEmail =
            this.page.getByText(email, {
                exact: true
            }).first();

        try {

            await participantEmail.waitFor({
                state: "visible",
                timeout: 5000
            });

            return true;

        } catch {

            return false;

        }

    }


    async isNoParticipantsFoundDisplayed(): Promise<boolean> {

        try {

            await this.noParticipantsFoundMessage.waitFor({
                state: "visible",
                timeout: 5000
            });

            return true;

        } catch {

            return false;

        }

    }


    async isParticipantListDisplayed(): Promise<boolean> {

        const participantRows =
            this.page.locator("tbody tr");

        try {

            await participantRows.first().waitFor({
                state: "visible",
                timeout: 5000
            });

            return true;

        } catch {

            return false;

        }

    }

}