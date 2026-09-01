import { BasePage } from "./basepage";
import { expect } from "@playwright/test";

export class SortMyCoursesPage extends BasePage {

    private readonly sortDropdown = this.page.locator("//select[@class='tmt-select']");

    private readonly courseRows = this.page.locator("//tbody/tr");

    async selectSortOption(option: string) {

        await this.sortDropdown.selectOption({ label: option });

        console.log(`Selected sort option: ${option}`);

        await this.page.waitForTimeout(1000);
    }

    async getCourseNames(): Promise<string[]> {

        await this.courseRows.first().waitFor({ state: "visible" });

        const count = await this.courseRows.count();

        console.log(`Number of course rows found: ${count}`);

        const courseNames: string[] = [];

        for (let i = 0; i < count; i++) {

            const row = this.courseRows.nth(i);

            const text = await row.locator("td").first().innerText();

            courseNames.push(text.trim());
        }

        console.log("Course rows:", courseNames);

        return courseNames;
    }

    async getVisibleCourseNames(): Promise<string[]> {

        const rows = this.page.locator("//tbody/tr");
        const count = await rows.count();

        const courseNames: string[] = [];

        for (let i = 0; i < count; i++) {

            const firstColumn = rows.nth(i).locator("td").first();

            const text = await firstColumn.innerText();

            courseNames.push(text.trim());
        }

        return courseNames;
    }
}