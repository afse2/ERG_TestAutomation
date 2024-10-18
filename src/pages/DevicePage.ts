import { BasePage } from "./BasePage";
import { Locator, Page } from "playwright";



export class DevicePage extends BasePage {
    page: Page;
    devicesTab: Locator;
    addDevice: Locator;
    macIdInputbox: Locator;
    deviceTypeDropdown: Locator;
    deviceTypeOptions: Locator;
    addButton: Locator;
    


    constructor(page: Page){
        super(page);

        this.devicesTab = page.locator("div.item:has-text('Raporlar')");
        this.addDevice = page.getByRole('button', {name: 'Cihaz Ekle'});
        this.macIdInputbox = page.getByPlaceholder('XX:XX:XX:XX:XX:XX');
        this.deviceTypeDropdown = page.locator(".n-form-item-blank > .n-select");
        this.deviceTypeOptions = page.locator("div.n-base-select-option");
        this.addButton = page.locator("div.n-dialog__action");
    
    }


    async selectDeviceType(deviceType: string) {
        const deviceTypeCount = await this.deviceTypeOptions.count();

        for (let i = 0; i < deviceTypeCount; i++) {
            const deviceTypeName = await this.deviceTypeOptions.nth(i).innerText();
            if(deviceTypeName === deviceType){
                return await this.deviceTypeOptions.nth(i).click();
            }
            
        }
    }
}

module.exports = { DevicePage };