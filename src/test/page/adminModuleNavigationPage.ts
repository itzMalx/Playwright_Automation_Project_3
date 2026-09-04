import { expect } from "@playwright/test";
import { BasePage } from "./basepage";

export class AdminModuleNavigationPage extends BasePage {

    private moduleTab(moduleName: string) {
        return this.page.getByText(moduleName, { exact: true }).first();
    }

    async openModule(moduleName: string) {
        await this.click(this.moduleTab(moduleName));
        await this.page.waitForLoadState("networkidle");
        console.log(`${moduleName} module opened`);
    }

    async verifyModulePage(moduleName: string) {

        switch (moduleName.toLowerCase()) {

            case "dashboard":
                await expect(
                    this.page.locator("//h1[contains(@class,'adb-welcome-title')]")
                ).toBeVisible();
                break;

            case "training programs":
                await expect(
                    this.page.getByRole("button", { name: /^Add Training$/ })
                ).toBeVisible();
                break;

            case "participants":
                await expect(
                    this.page.getByPlaceholder("Search participants...")
                ).toBeVisible();
                break;

            case "trainers":
                await expect(
                    this.page.getByRole("button", { name: /Add Trainer/i })
                ).toBeVisible();
                break;

            case "interviews":
                await expect(
                    this.page.getByRole("button", { name: /Schedule Interview/i }).first()
                ).toBeVisible();
                break;

            default:
                throw new Error(`Invalid module name: ${moduleName}`);
        }

        console.log(`${moduleName} module page verified`);
    }
}