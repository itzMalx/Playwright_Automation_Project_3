import report from "multiple-cucumber-html-reporter";
import os from "os";
import path from "path";
import fs from "fs";
import { logger } from "./logger";

const jsonDir = path.resolve(__dirname, "../../reports");
const reportPath = path.resolve(__dirname, "../../reports/html-report");

function main(): void {
    const jsonReportFile = path.join(jsonDir, "cucumber-report.json");

    if (!fs.existsSync(jsonReportFile)) {
        logger.error(
            `Cucumber JSON report not found at ${jsonReportFile}. ` +
                `Make sure the test run includes "--format json:reports/cucumber-report.json".`
        );
        process.exitCode = 1;
        return;
    }

    report.generate({
        jsonDir,
        reportPath,
        openReportInBrowser: false,
        reportName: "WaveInit LMS - Cucumber Test Report",
        pageTitle: "WaveInit LMS Automation Report",
        displayDuration: true,
        metadata: {
            browser: {
                name: process.env.BROWSER ?? "chromium",
                version: "latest"
            },
            device: os.hostname(),
            platform: {
                name: os.platform(),
                version: os.release()
            }
        },
        customData: {
            title: "Run Info",
            data: [
                { label: "Project", value: "WaveInit LMS Playwright Automation" },
                { label: "Base URL", value: process.env.BASE_URL ?? "N/A" },
                { label: "Execution Start Time", value: new Date().toLocaleString() }
            ]
        }
    });

    logger.info(`HTML report generated at ${reportPath}`);
}

main();