import { BasePage } from "./BasePage";
import { Locator, Page } from "playwright";



export class LicencesPage extends BasePage {
    page: Page;
    


    constructor(page: Page){
        super(page);
    }
}

module.exports = {LicencesPage};