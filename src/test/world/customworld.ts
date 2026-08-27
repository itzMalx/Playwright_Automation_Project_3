import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";

import { adminLoginPage } from "../page/adminLoginPage";
import { trainerLoginPage } from "./../page/trainerLoginPage";
import { learnerLoginPage } from "../page/learnerLoginPage";
import { DashboardPage } from "../page/dashboardPage";
import { CoursePage } from "../page/coursePage";
import { ForgotPasswordPage } from "../page/forgotPasswordPage";
import { MailosaurService } from "../../services/mailosaurService";
import { LearnerMyCoursePage } from "../page/learnerMyCoursePage";
import {SignupPage} from '../page/signupPage'
import { AddTrainingPage } from "../page/addTrainingPage";
import { editTrainerProfilePage } from './../page/editTrainerProfilePage';
import { LearnerExploreTrainingPage } from "../page/learnerExploreTrainingPage";

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
    editTrainerProfilePage!: editTrainerProfilePage;
    mailosaurService!: MailosaurService;
    addTrainingPage!:AddTrainingPage

    otp!: string;
    resetEmail!: string;
    emailStartTime!: Date;
    learnerExploreTrainingPage!: LearnerExploreTrainingPage;
}

setWorldConstructor(lmsworld);
