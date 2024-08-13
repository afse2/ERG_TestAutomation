import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";

export class BrandsPage extends BasePage{
    page: Page;
    brandHeader: Locator;
    brandNameInputbox: Locator;
    brandsName: Locator;
    errorToast: Locator;
    statusSwitcher: Locator;


    constructor(page:Page){
        super(page);

        this.brandHeader = page.locator(".brands-text");
        this.brandNameInputbox = page.locator("input.n-input__input-el");
        this.brandsName = page.locator(".brandName");
        this.errorToast = page.locator("div.n-message__content");
        this.statusSwitcher = page.locator("div.n-switch__checked");
    }

    async checkBrand(brandName) {
        const brandCount = await this.brandsName.count();

        for(let i = 0; i < brandCount; i++){
            if(await this.brandsName.nth(i).textContent == brandName){
                return this.brandsName.nth(i);
            }
        }
    }

}