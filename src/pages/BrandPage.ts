import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";



export class BrandsPage extends BasePage {
    page: Page;
    brandHeader: Locator;
    brandNameInputbox: Locator;
    brandsName: Locator;
    errorToast: Locator;
    statusSwitcher: Locator;
    penIcons: Locator;
    xSignButton: Locator;
    addBrand: Locator;
    addButtonOnPopup: Locator;
    updateButton: Locator;
    deleteButton: Locator;
    confirmButton: Locator;
    rejectButton: Locator;
    warningToast: Locator;
    editBrandName: Locator;


    constructor(page: Page) {
        super(page);

        this.brandHeader = page.locator(".brands-text");
        this.brandNameInputbox = page.getByPlaceholder("Lütfen marka adı giriniz");
        this.editBrandName = page.getByPlaceholder("Lütfen tesis adı giriniz");
        this.brandsName = page.locator("div[class='brandName']");
        this.errorToast = page.locator("div.n-message__content:text-is('Marka halihazırda var')");
        this.statusSwitcher = page.locator("div.n-switch__checked");
        this.penIcons = page.locator(".brand-item button");
        this.xSignButton = page.locator("button.n-base-close");
        this.addBrand = page.getByRole("button", {name: " Marka Ekle "});
        this.addButtonOnPopup = page.locator("button span.n-button__content:text-is('Ekle')");
        this.updateButton = page.getByRole("button", {name: "Güncelle"});
        this.deleteButton = page.getByRole("button", {name: " Sil"});
        this.confirmButton = page.getByRole("button", {name: "Evet"});
        this.rejectButton = page.getByRole("button", {name: "Hayır"});
        this.warningToast = page.locator("div.n-message__content:text-is('Aynı isimde marka halihazırda var')"); 


    }

    async checkBrandName(brandName: string) {
        const brandCount = await this.brandsName.count();
        
        for (let i = 0; i < brandCount; i++) {
            
            const brandText = (await this.brandsName.nth(i).evaluate(el => el.firstChild.textContent)).trim();
            
            if (brandText == brandName) {
                
                return {element : this.brandsName.nth(i), index: i}
            }
        }
        return {element : null, index : -1};
    }

    async checkBrand(brandName: string) {
        const result = await this.checkBrandName(brandName);
        const brandElement = result.element;
        
        if(brandElement){
            return await brandElement.isVisible();
         }
            
        return false;
    }

    async clickBrandPenIcon(brandName: string) {
        const result = await this.checkBrandName(brandName);
        const brandElement = result.element;
        
        
        if(brandElement){
           await this.penIcons.nth(result.index).click();
        }
    }


    async checkStatusWithBrandName(brandName: string) {

        const result = await this.checkBrandName(brandName);
        const brandElement = result.element;
        if(brandElement){
            return await brandElement.locator("span").textContent();
        }


    }



}

module.exports = { BrandsPage };