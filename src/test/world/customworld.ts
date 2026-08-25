import { trainerLoginPage } from "./../page/trainerLoginPage";
import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";

import { adminLoginPage } from "../page/adminLoginPage";
import { learnerLoginPage } from "../page/learnerLoginPage";
import { DashboardPage } from "../page/dashboardPage";
import { CoursePage } from "../page/coursePage";
import { ForgotPasswordPage } from "../page/forgotPasswordPage";
import { MailosaurService } from "../../services/mailosaurService";
import {SignupPage} from '../page/signupPage'

export class lmsworld extends World {

    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    adminLoginPage!: adminLoginPage;
    learnerLoginPage!: learnerLoginPage;
    trainerLoginPage!: trainerLoginPage;

    dashboardPage!: DashboardPage;
    coursePage!: CoursePage;
    signupPage!:SignupPage;
    forgotPasswordPage!: ForgotPasswordPage;

    mailosaurService!: MailosaurService;

    otp!: string;
    emailStartTime!: Date;
}

setWorldConstructor(lmsworld);