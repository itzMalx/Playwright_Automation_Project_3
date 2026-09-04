import {Before,BeforeAll,After,AfterAll,setDefaultTimeout,Status} from "@cucumber/cucumber";
import { Browser, chromium } from "@playwright/test";
import { lmsworld } from "../world/customworld";
import { logger } from "../../utilities/logger";
import { adminLoginPage } from "../page/adminLoginPage";
import { learnerLoginPage } from "../page/learnerLoginPage";
import { trainerLoginPage } from "../page/trainerLoginPage";
import { DashboardPage } from "../page/dashboardPage";
import { CoursePage } from "../page/coursePage";
import { SignupPage } from "../page/signupPage";
import { ForgotPasswordPage } from "../page/forgotPasswordPage";
import { MailosaurService } from "../../services/mailosaurService";
import { LearnerMyCoursePage } from "../page/learnerMyCoursePage";
import { AddTrainingPage } from "../page/addTrainingPage";
import { editTrainerProfilePage } from "../page/editTrainerProfilePage";
import { LearnerExploreTrainingPage } from "../page/learnerExploreTrainingPage";
import { AddParticipantPage } from "../page/addParticipantPage";
import { AdminAddTrainerPage } from "../page/adminAddTrainerPage";
import { editSocialLinkTrainerPage } from "../page/editSocialLinkTrainerPage";
import { SortMyCoursesPage } from "../page/SortMyCoursesPage";
import { ScheduleInterviewPage } from "../page/scheduleInterviewPage";
import { AdminModuleNavigationPage } from "../page/adminModuleNavigationPage";
import { searchParticipantPage } from "../page/searchParticipantPage";

setDefaultTimeout(90 * 1000);

let browser: Browser;


BeforeAll(async () => {

    browser = await chromium.launch({headless: false});
    logger.info("Browser launched");
});


Before(async function (this: lmsworld) {

    this.browser = browser;
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.adminLoginPage = new adminLoginPage(this.page)
    this.learnerLoginPage = new learnerLoginPage(this.page);
    this.trainerLoginPage = new trainerLoginPage(this.page)
    this.dashboardPage=new DashboardPage(this.page)
    this.coursePage=new CoursePage(this.page)
    this.signupPage=new SignupPage(this.page)
    this.adminLoginPage = new adminLoginPage(this.page);
    this.trainerLoginPage = new trainerLoginPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.coursePage = new CoursePage(this.page);
    this.addTrainingPage = new AddTrainingPage(this.page)
    this.addParticipantPage = new AddParticipantPage(this.page)
    this.forgotPasswordPage = new ForgotPasswordPage(this.page);
    this.mailosaurService = new MailosaurService();
    this.learnerMyCoursePage = new LearnerMyCoursePage(this.page);

    this.editTrainerProfilePage =new editTrainerProfilePage(this.page);
    this.learnerExploreTrainingPage =new LearnerExploreTrainingPage(this.page);
   
    this.editTrainerProfilePage =new editTrainerProfilePage(this.page);
    
    this.learnerExploreTrainingPage =new LearnerExploreTrainingPage(this.page);
    this.adminAddTrainerPage = new AdminAddTrainerPage(this.page);
    this.editSocialLinkTrainerPage=new editSocialLinkTrainerPage(this.page);
    this.sortMyCoursesPage = new SortMyCoursesPage(this.page);
    this.adminModuleNavigationPage = new AdminModuleNavigationPage(this.page);
    
    this.scheduleInterviewPage = new ScheduleInterviewPage(this.page)
    this.searchParticipantPage = new searchParticipantPage(this.page);


    console.log("ForgotPasswordPage initialized");
    console.log("MailosaurService initialized");

});
After(async function (this: lmsworld, scenario) {

    if (scenario.result?.status === Status.FAILED) {

        if (this.page && !this.page.isClosed()) {

            const path =
                `reports/screenshots/${scenario.pickle.name}-${Date.now()}.png`;

            await this.page.screenshot({
                path
            });
        }

        logger.error(
            `Scenario Failed: ${scenario.pickle.name}`
        );
    }


    if (this.page && !this.page.isClosed()) {
        await this.page.close();
    }


    if (this.context) {
        await this.context.close();
    }
});


AfterAll(async () => {

    logger.info("Browser Closed");

    await browser.close();
});