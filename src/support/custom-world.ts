import { World, IWorldOptions, setWorldConstructor } from "@cucumber/cucumber";
import { ManagementPage } from "../pages/ManagementPage";
import { APIRequestContext, BrowserContext, Page } from "playwright";
import { BrandsPage } from "../pages/BrandPage";
import { ReportPage } from "../pages/ReportPage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";
import { DevicePage } from "../pages/DevicePage";
import { UsersPage } from "../pages/UsersPage";
import { BasePage } from "../pages/BasePage";
import { LicencesPage } from "../pages/LicencesPage";






export class CustomWorld extends World {
    page?: Page;
    context: BrowserContext;
    apiContext: APIRequestContext;
    recoveryMail:string;
    userName: string;
    loginPage: LoginPage;
    profilePage: ProfilePage;
    managementPage: ManagementPage;
    brandsPage: BrandsPage;
    reportPage: ReportPage;
    complianceRate: string;
    dateOptionNumber: number;
    devicePage: DevicePage;
    usersPage: UsersPage;
    roleName: string;
    userMail: string;
    searchUser: string;
    searchDevice: string;
    currentPage: string;
    licencePage: LicencesPage;
    
    
    constructor(options: IWorldOptions){
        super(options);
        
        this.page = options.parameters.page;
        this.recoveryMail = "";
        this.userName = "";
        this.complianceRate = null;
        this.dateOptionNumber = null;
        this.roleName = "";
        this.userMail = "";
        this.loginPage = null;
        this.profilePage = null;
        this.managementPage = null;
        this.brandsPage = null;
        this.reportPage = null;
        this.devicePage = null;
        this.usersPage = null;
        this.searchUser = null;
        this.searchDevice = null;
        this.currentPage = null;
        this.licencePage = null;
    }

}

setWorldConstructor(CustomWorld);