import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";
import { stringify } from "querystring";
import { expect, Expect } from "playwright/test";
import { warn } from "console";

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


    constructor(page: Page) {
        super(page);

        this.brandHeader = page.locator(".brands-text");
        this.brandNameInputbox = page.locator("input.n-input__input-el");
        this.brandsName = page.locator("div.brandName");
        this.errorToast = page.locator("div.n-message__content:text-is('Marka halihazırda var')");
        this.statusSwitcher = page.locator("div.n-switch__checked");
        this.penIcons = page.locator(".brand-item button");
        this.xSignButton = page.locator("button.n-base-close");
        this.addBrand = page.locator("button span.n-button__content");
        this.addButtonOnPopup = page.locator("button span.n-button__content:text-is('Ekle')");
        this.updateButton = page.getByRole("button", {name: "Güncelle"});
        this.deleteButton = page.getByRole("button", {name: " Sil"});
        this.confirmButton = page.getByRole("button", {name: "Evet"});
        this.rejectButton = page.getByRole("button", {name: "Hayır"});
        this.warningToast = page.locator("div.n-message__content:text-is('Aynı isimde marka halihazırda var')"); 


    }

    async brandNameWithoutStatus(brandName: string) {
        const brandCount = await this.brandsName.count();
        
        for (let i = 0; i < brandCount; i++) {
            
            const brandWithStatus = await this.brandsName.nth(i).textContent();
            const arr = brandWithStatus.split(" ");
            arr.pop();
            const actualBrandName = this.arrayToString(arr);
            
            if (actualBrandName.trim() == brandName) {
                
                return {element : this.brandsName.nth(i), index: i}
            }
        }
        return {element : null, index : -1};
    }

    async checkBrand(brandName: string) {
        const result = await this.brandNameWithoutStatus(brandName);
        const brandElement = result.element;
        
        if(brandElement){
            return await brandElement.isVisible();
         }
            
        return false;
    }

    async clickBrandPenIcon(brandName: string) {
        const result = await this.brandNameWithoutStatus(brandName);
        const brandElement = result.element;
        
        if(brandElement){
           await this.penIcons.nth(result.index).click();
        }
    }


    async checkStatusWithBrandName(brandName: string) {

        const result = await this.brandNameWithoutStatus(brandName);
        const brandElement = result.element;
        if(brandElement){
            return await brandElement.locator("span").textContent();
        }


    }



}

module.exports = { BrandsPage };