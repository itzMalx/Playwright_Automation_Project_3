import { When, Then } from "@cucumber/cucumber";
import { lmsworld } from "../world/customworld";

When(
    "admin opens the {string} module",
    async function (this: lmsworld, moduleName: string) {

        await this.adminModuleNavigationPage.openModule(moduleName);
    }
);

Then(
    "admin should see the {string} module page",
    async function (this: lmsworld, moduleName: string) {

        await this.adminModuleNavigationPage.verifyModulePage(moduleName);
    }
);