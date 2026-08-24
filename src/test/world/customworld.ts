import { setWorldConstructor,World } from "@cucumber/cucumber";
import { Browser,BrowserContext,Page } from "@playwright/test";
import { adminLoginPage } from "../page/adminLoginPage";

export class lmsworld extends World{
    browser!:Browser
    context!:BrowserContext
    page!:Page
    adminLoginPage!:adminLoginPage
    
}

setWorldConstructor(lmsworld)