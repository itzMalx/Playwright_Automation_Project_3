import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";

import { SortMyCoursesPage } from "../page/SortMyCoursesPage";
import { adminLoginPage } from "../page/adminLoginPage";
import { trainerLoginPage } from "./../page/trainerLoginPage";
import { learnerLoginPage } from "../page/learnerLoginPage";
import { DashboardPage } from "../page/dashboardPage";
import { CoursePage } from "../page/coursePage";
import { ForgotPasswordPage } from "../page/forgotPasswordPage";
import { MailosaurService } from "../../services/mailosaurService";
import { LearnerMyCoursePage } from "../page/learnerMyCoursePage";
import {SignupPage} from '../page/signupPage'
import { editTrainerProfilePage } from './../page/editTrainerProfilePage';
import { LearnerExploreTrainingPage } from "../page/learnerExploreTrainingPage";
import { AddTrainingPage } from "../page/addTrainingPage";
import { AddParticipantPage } from "../page/addParticipantPage";
import { AdminAddTrainerPage } from "../page/adminAddTrainerPage";
import { editSocialLinkTrainerPage } from "../page/editSocialLinkTrainerPage";
import { AdminSearchTrainerPage } from "../page/adminSearchTrainerPage";
import { ScheduleInterviewPage } from "../page/scheduleInterviewPage";

import { searchParticipantPage } from "../page/searchParticipantPage";
import { AdminModuleNavigationPage } from "../page/adminModuleNavigationPage";
export class lmsworld extends World {

    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    adminLoginPage!: adminLoginPage;
    learnerLoginPage!: learnerLoginPage;
    trainerLoginPage!: trainerLoginPage;
    adminModuleNavigationPage!: AdminModuleNavigationPage
    dashboardPage!: DashboardPage;
    coursePage!: CoursePage;
    learnerMyCoursePage!: LearnerMyCoursePage;
    signupPage!:SignupPage;
    forgotPasswordPage!: ForgotPasswordPage;
    editTrainerProfilePage!: editTrainerProfilePage;
    mailosaurService!: MailosaurService;
    addTrainingPage!:AddTrainingPage
    addParticipantPage!:AddParticipantPage
    otp!: string;
    resetEmail!: string;
    emailStartTime!: Date;
    trainerPassword!: string
    participantName!: string;
    participantEmail!: string;
    learnerExploreTrainingPage!: LearnerExploreTrainingPage;
    adminAddTrainerPage!: AdminAddTrainerPage;
    editSocialLinkTrainerPage!: editSocialLinkTrainerPage;
    sortMyCoursesPage!:SortMyCoursesPage
    adminSearchTrainerPage!: AdminSearchTrainerPage

    scheduleInterviewPage!:ScheduleInterviewPage
     searchParticipantPage!: searchParticipantPage;
}

setWorldConstructor(lmsworld);
