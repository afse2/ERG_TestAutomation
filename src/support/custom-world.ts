import { World, IWorldOptions, setWorldConstructor } from "@cucumber/cucumber";
import { ManagementPage } from "../pages/ManagementPage";
import { Page } from "playwright";
import { BrandsPage } from "../pages/BrandPage";
import { ReportPage } from "../pages/ReportPage";


export class CustomWorld extends World{
    page:Page;
    recoveryMail:string;
    userName: string;
    managementPage: ManagementPage;
    brandsPage: BrandsPage;
    reportPage: ReportPage;
    complianceRate: string;
    dateOptionNumber: number;
    



    constructor(options: IWorldOptions){
        super(options);
        
        this.recoveryMail = "";
        this.userName = "";
        this.managementPage = null;
        this.brandsPage = null;
        this.reportPage = null;
        this.complianceRate = null;
        this.dateOptionNumber = null;
    }

}

setWorldConstructor(CustomWorld);