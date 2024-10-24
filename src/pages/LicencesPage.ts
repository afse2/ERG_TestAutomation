import { BasePage } from "./BasePage";
import { Locator, Page } from "playwright";



export class LicencesPage extends BasePage {
    page: Page;
    licenceTab: Locator;
    addLicenceButton: Locator;
    


    constructor(page: Page){
        super(page);

        this.licenceTab = page.locator("div.item:has-text('Lisanslar')");
        this.addLicenceButton = page.getByRole("button", {name: " Lisans Ekle "});
        
    }
}

module.exports = {LicencesPage};