import { BasePage } from "./basepage";
import { expect } from "@playwright/test";

export class LearnerMyCoursePage extends BasePage {

    private readonly searchBar = this.page.getByPlaceholder("Search courses by title...");
    private readonly courseNames = this.page.locator("//td[1]//h3");
    private readonly noCourse = this.page.getByText("No courses found matching your criteria");

    async enterText(text: string) {
        await this.searchBar.fill(text);
    }

    async verifySearchResult(expectedCourse: string) {
        const expectedCourseLocator = this.courseNames.filter({ hasText: expectedCourse });
        await expect(expectedCourseLocator.first()).toBeVisible();
        return true;
    }

    async noCourseResult(){
        await expect(this.noCourse).toBeVisible();
    }
}