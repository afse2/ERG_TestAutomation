import { Page } from "playwright";
import { LoginPage } from "./LoginPage";
import { ProfilePage } from "./ProfilePage";



export class PageManager {
    page: Page;
    private loginPage: LoginPage;
    private profilePage: ProfilePage;


    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.profilePage = new ProfilePage(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getProfilePage() {
        return this.profilePage;
    }
}

module.exports = { PageManager };
