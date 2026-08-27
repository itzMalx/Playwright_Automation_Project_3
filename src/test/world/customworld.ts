import { trainerLoginPage } from "./../page/trainerLoginPage";
import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";

import { adminLoginPage } from "../page/adminLoginPage";
import { learnerLoginPage } from "../page/learnerLoginPage";
import { DashboardPage } from "../page/dashboardPage";
import { CoursePage } from "../page/coursePage";
import { ForgotPasswordPage } from "../page/forgotPasswordPage";
import { MailosaurService } from "../../services/mailosaurService";
import { LearnerMyCoursePage } from "../page/learnerMyCoursePage";
import {SignupPage} from '../page/signupPage'
import { AddTrainingPage } from "../page/addTrainingPage";

export class lmsworld extends World {

    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    adminLoginPage!: adminLoginPage;
    learnerLoginPage!: learnerLoginPage;
    trainerLoginPage!: trainerLoginPage;

    dashboardPage!: DashboardPage;
    coursePage!: CoursePage;
    learnerMyCoursePage!: LearnerMyCoursePage;
    signupPage!:SignupPage;
    forgotPasswordPage!: ForgotPasswordPage;

    mailosaurService!: MailosaurService;
    addTrainingPage!:AddTrainingPage

    otp!: string;
    emailStartTime!: Date;
}

setWorldConstructor(lmsworld);