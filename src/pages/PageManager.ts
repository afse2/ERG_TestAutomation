import { Page } from "playwright";
import { LoginPage } from "./LoginPage";



export class PageManager {
    page: Page;
    private loginPage:LoginPage


    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
      
    }

    getLoginPage(){
        return this.loginPage;
    }
}

module.exports={PageManager};
