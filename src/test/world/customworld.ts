import { trainerLoginPage } from './../page/trainerLoginPage';
import { setWorldConstructor,World } from "@cucumber/cucumber";
import { Browser,BrowserContext,Page } from "@playwright/test";
import { adminLoginPage } from "../page/adminLoginPage";
import { editTrainerProfilePage } from "../page/editTrainerProfilePage";

export class lmsworld extends World{
    browser!:Browser
    context!:BrowserContext
    page!:Page
    adminLoginPage!:adminLoginPage
    trainerLoginPage!:trainerLoginPage
    editTrainerProfilePage!: editTrainerProfilePage;
}

setWorldConstructor(lmsworld)