import { expect } from "playwright/test";
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
    macAddress: Locator;
    deviceTypes: Locator;
    nextPageButton: Locator;
    deviceSuccessToast: Locator;
    existDeviceToast: Locator;
    editButton: Locator;
    updateButton: Locator;
    editOptions: Locator;
    tbAccessToken: Locator;
    renewToken: Locator;
    searchbox: Locator;
    noDataTable: Locator;
    brandsName: Locator;
    selectedBrand: Locator;
    dropdownOptions: Locator;
    brandDropdown: Locator;
    brandFilterClear: Locator;
    selectedFacility: Locator;
    facilitiesName: Locator;
    facilityDropdown: Locator;
    facilityFilterClear: Locator;
    selectedDeviceType: Locator;
    deviceTypeFilterDropdown: Locator;
    deviceTypeFilterClear: Locator;
    brandFilterInput: Locator;    
    noDataOnFilter: Locator;
    facilityFilterInput: Locator;
    deviceTypeFilterInput: Locator;
    previousPageButton: Locator;
    deleteButton: Locator;
    XButton: Locator;
    deleteDeviceButton: Locator;
    


    constructor(page: Page){
        super(page);

        this.devicesTab = page.locator("div.item:has-text('Cihazlar')");
        this.addDevice = page.getByRole('button', {name: 'Cihaz Ekle'});
        this.macIdInputbox = page.getByPlaceholder('XX:XX:XX:XX:XX:XX');
        this.deviceTypeDropdown = page.locator(".n-form-item-blank > .n-select");
        this.deviceTypeOptions = page.locator("div.n-base-select-option");
        this.addButton = page.locator("div.n-dialog__action");
        this.macAddress = page.locator("td[data-col-key='device.macAddress']");
        this.deviceTypes = page.locator("td[data-col-key='device.type']");
        this.nextPageButton = page.locator("div.n-pagination-item--button").nth(1);
        this.deviceSuccessToast = page.locator("div.n-message__content:text-is('Cihazlar başarıyla getirildi')");
        this.existDeviceToast = page.locator("div.n-message__content:text-is('Cihaz halihazırda var')");
        this.editButton = page.locator("div.n-dropdown-option").first();
        this.updateButton = page.getByRole("button", {name: 'Güncelle'});
        this.editOptions = page.locator("div.n-dropdown-option");
        this.tbAccessToken = page.locator("div.n-dropdown-option").nth(2);
        this.renewToken = page.getByRole("button", {name: 'Token Yenile'});
        this.searchbox = page.locator("input.n-input__input-el");
        this.noDataTable = page.locator("div.n-data-table-empty");
        this.brandsName = page.locator("td:nth-child(4)");
        this.selectedBrand = page.locator("div.n-base-selection-overlay__wrapper span").first();
        this.dropdownOptions = page.locator(".v-vl-visible-items span");
        this.brandDropdown = page.locator("div.n-base-selection-label").first();
        this.brandFilterClear = page.locator("div.n-base-clear").first();
        this.selectedFacility = page.locator("div.n-base-selection-overlay__wrapper span").nth(1);
        this.facilitiesName = page.locator("td:nth-child(5)");
        this.facilityDropdown = page.locator("div.n-base-selection-label").nth(1);
        this.facilityFilterClear = page.locator("div.n-base-clear").nth(1);
        this.deviceTypeFilterDropdown = page.locator("div.n-base-selection-label").nth(2);
        this.selectedDeviceType = page.locator("div.n-base-selection-overlay__wrapper span").nth(2);
        this.deviceTypeFilterClear = page.locator("div.n-base-clear").nth(2);
        this.brandFilterInput = page.locator("input.n-base-selection-input").first();
        this.noDataOnFilter = page.locator("div.n-base-select-menu__empty");
        this.facilityFilterInput = page.locator("input.n-base-selection-input").nth(1);
        this.deviceTypeFilterInput = page.locator("input.n-base-selection-input").nth(2);
        this.previousPageButton = page.locator("div.n-pagination-item--button").first();
        this.deleteButton = page.locator("div.n-dropdown-option").nth(1);
        this.XButton = page.locator("button.n-base-close");
        this.deleteDeviceButton = page.getByRole("button", {name: "Cihazı Sil"});
        
    
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

    async checkDevice(macID: string, deviceType: string) {
        // Get the selected facility name
        

        let hasNextPage = true;

        // Loop through all pages
        while (hasNextPage) {
            const reportCount = await this.macAddress.count();

            // Loop through all facilities on the current page and check if they match the selected facility
            for (let i = 0; i < reportCount; i++) {
                const macAddress = await this.macAddress.nth(i).innerText();
                const actualDeviceType = await this.deviceTypes.nth(i).innerText();
                
                // Assert that facility names match
                if(macAddress == macID && actualDeviceType == deviceType){
                    return true;
                }
                
            }

            // Check if there is a next page button and it is not disabled
            hasNextPage = await this.nextPageButton.isVisible() && 
                          !((await this.nextPageButton.getAttribute("class")).includes("disabled"));

            // If there is a next page, click it to go to the next page
            if (hasNextPage) {
                await this.nextPageButton.click();
            }
        }
        return false;
    }
    
    async clickEditIcon(macId: string) {
        await this.page.getByRole('row', { name: macId }).getByRole('button').click();
    }

    async checkEditOptions(options:string[]){
        const optionsCount = await this.editOptions.count();
        let actualOptions: string[] = [];
        for (let i = 0; i < optionsCount; i++) {
            const optionText = await this.editOptions.nth(i).innerText();
            
            actualOptions.push(optionText); 
        }
        
        return actualOptions.every((val,index)=> val === options[index]);
    }

    clickPage(pageNumber: string) {
       return this.page.getByText(pageNumber, {exact:true} );        
    }
}

module.exports = { DevicePage };