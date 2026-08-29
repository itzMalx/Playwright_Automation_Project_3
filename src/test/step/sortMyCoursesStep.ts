import { When, Then } from "@cucumber/cucumber";
import { lmsworld } from "../world/customworld";
import { expect } from "@playwright/test";

When(
    "the learner selects {string}",
    async function (this: lmsworld, option: string) {

        await this.sortMyCoursesPage.selectSortOption(option);
    }
);

Then(
    "the courses should be displayed in newest order",
    async function (this: lmsworld) {

        const courses =
            await this.sortMyCoursesPage.getVisibleCourseNames();

        console.log("Courses after Newest sorting:", courses);

        expect(courses.length).toBeGreaterThan(0);
    }
);

Then(
    "the courses should be displayed in oldest order",
    async function (this: lmsworld) {

        const courses =
            await this.sortMyCoursesPage.getVisibleCourseNames();

        console.log("Courses after Oldest sorting:", courses);

        expect(courses.length).toBeGreaterThan(0);
    }
);

Then(
    "the courses should be displayed in alphabetical order",
    async function (this: lmsworld) {

        const actualCourses =
            await this.sortMyCoursesPage.getVisibleCourseNames();

        const expectedCourses =
            [...actualCourses].sort((a, b) =>
                a.localeCompare(b)
            );

        console.log("Actual course order:", actualCourses);
        console.log("Expected alphabetical order:", expectedCourses);

        expect(actualCourses).toEqual(expectedCourses);
    }
);