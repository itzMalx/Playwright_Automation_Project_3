import { BasePage } from "./basepage";

export class editTrainerProfilePage extends BasePage {

    private readonly myProfile =
        this.page.getByText("My Profile", { exact: true });

    private readonly editProfileButton =
        this.page.getByRole("button", { name: "Edit Profile" });

    private readonly fullNameInput =
        this.page.locator("//label[contains(text(),'Full Name')]/following::input[1]");

    private readonly phoneNumber =
        this.page.locator("//label[contains(text(),'Phone Number')]/following::input[1]");

    private readonly professionalHeadline =
        this.page.locator("textarea").nth(0);

    private readonly aboutBio =
        this.page.locator("textarea").nth(1);

    private readonly saveChangesButton =
        this.page.getByRole("button", { name: "Save Changes" });

    private readonly cancelButton =
        this.page.getByRole("button", { name: "Cancel" });


    async navigateToMyProfile() {
        await this.click(this.myProfile);
    }

    async clickEditProfile() {
        await this.click(this.editProfileButton);
    }

    async enterFullName(name: string) {
        await this.fill(this.fullNameInput, name);
    }

    async enterProfessionalHeadline(headline: string) {
        await this.fill(this.professionalHeadline, headline);
    }

    async enterAboutBio(bio: string) {
        await this.fill(this.aboutBio, bio);
    }

    async saveChanges() {
        await this.click(this.saveChangesButton);
    }

    async cancelChanges() {
        await this.click(this.cancelButton);
    }

    async getFullName() {
        return await this.fullNameInput.inputValue();
    }

    async getProfessionalHeadline() {
        return await this.professionalHeadline.inputValue();
    }
}