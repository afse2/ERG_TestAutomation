import { Page } from "playwright";
import { LoginPage } from "./LoginPage";
import { ProfilePage } from "./ProfilePage";
import { ManagementPage } from "./ManagementPage";
import { BrandsPage } from "./BrandPage";
import { ReportPage } from "./ReportPage";



export class PageManager {
    page: Page;
    private loginPage: LoginPage;
    private profilePage: ProfilePage;
    private managementPage: ManagementPage;
    private brandsPage : BrandsPage;
    private reportPage : ReportPage;


    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.profilePage = new ProfilePage(this.page);
        this.managementPage = new ManagementPage(this.page);
        this.brandsPage = new BrandsPage(this.page);
        this.reportPage = new ReportPage(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getProfilePage() {
        return this.profilePage;
    }

    getManagementPage() {
        return this.managementPage;
    }
    
    getBrandsPage() {
        return this.brandsPage;
    }

    getReportPage(){
        return this.reportPage;
    }

}

module.exports = { PageManager };
