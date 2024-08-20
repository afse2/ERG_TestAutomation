import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";
import { expect } from "playwright/test";



export class ManagementPage extends BasePage {
    page: Page;
    navbarItems: Locator;
    brandHeader: Locator;
    reportHeader: Locator;
    activeItem: Locator;
    columnNames: Locator;



    constructor(page: Page) {
        super(page);
        this.navbarItems = page.locator("div.tabs div");
        this.brandHeader = page.locator("brands-text");
        this.reportHeader = page.locator("h1");
        this.activeItem = page.locator(".item-active");
        this.columnNames = page.locator("div.n-data-table-th__title");
    }


    async checkNavbarItem (navbarItems:Locator, itemsName: Array<string>){
        
        const optionsCount = await navbarItems.count();
        const actualItemNames: Array<string> = [];
        for(let i = 0; i<optionsCount; i++){
            actualItemNames.push(await navbarItems.nth(i).textContent()); 
        }

        return JSON.stringify(actualItemNames) == JSON.stringify(itemsName);
    }

    
}

module.exports = { ManagementPage };