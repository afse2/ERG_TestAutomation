import { World, IWorldOptions, setWorldConstructor } from "@cucumber/cucumber";
import { ManagementPage } from "../pages/ManagementPage";
import { Page } from "playwright";
import { BrandsPage } from "../pages/BrandPage";


export class CustomWorld extends World{
    page:Page;
    recoveryMail:string;
    userName: string;
    managementPage: ManagementPage;
    brandsPage: BrandsPage;
    



    constructor(options: IWorldOptions){
        super(options);
        
        this.recoveryMail = "";
        this.userName = "";
        this.managementPage = null;
        this.brandsPage = null;
    }

}

setWorldConstructor(CustomWorld);