import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "playwright/test";
import { CustomWorld } from "../../support/custom-world";
import { DevicePage } from "../../pages/DevicePage";
import { FilterUtility } from "../../support/utilities/FilterUtility";

When('User click on Devices tab on navbar', async function (this: CustomWorld) {
    this.devicePage = new DevicePage(this.page);
    await this.devicePage.devicesTab.click();
});

Given('User click on Add Device button', async function (this: CustomWorld) {
    await this.devicePage.addDevice.click();
});

When('User enter mac id as {string}', async function (this: CustomWorld, macID) {
    await this.devicePage.macIdInputbox.fill(macID);
});

When('User select device type as {string}', async function (this: CustomWorld, deviceType: string) {
    await this.devicePage.deviceTypeDropdown.click();
    await this.devicePage.selectDeviceType(deviceType);
});

When('User click on Add button', async function (this: CustomWorld) {
    await this.devicePage.addButton.click();
});

Then('Verify that the device with mac id {string} and device type {string} is displayed on Devices Page', async function (this: CustomWorld, macID: string, deviceType: string) {
    await this.devicePage.deviceSuccessToast.waitFor();
    expect(await this.devicePage.checkDevice(macID, deviceType)).toBeTruthy();
});

Then('Verify that the error toast {string} is diplayed on Devices Page', async function (this: CustomWorld, errorToast: string) {
    expect (await this.devicePage.existDeviceToast.innerText()).toEqual(errorToast);
});

Given('User click on three dots sign near the selected gateway device {string}', async function (this: CustomWorld, macID: string) {
    await this.devicePage.clickEditIcon(macID);
});

When('User click on edit option from dropdown', async function (this: CustomWorld) {
    await this.devicePage.editButton.click();
});

When('User click on save changes button on Devices Page', async function (this: CustomWorld)  {
    await this.devicePage.updateButton.click();
});

Then('Verify that the options {string}, {string}, {string} are displayed on edit menu', async function (this: CustomWorld, option1: string, option2: string, option3: string)  {
    let options = [option1, option2, option3];
    await this.devicePage.checkEditOptions(options);
});

Given('User click on three dots sign near the selected device {string}', async function (this: CustomWorld, macID: string)  {
    await this.devicePage.clickEditIcon(macID);
});

When('User click on Thingsboard access token option', async function (this: CustomWorld)  {
    await this.devicePage.tbAccessToken.click();
});

When('User click on renew token button', async function (this: CustomWorld)  {
    await this.devicePage.renewToken.click();
});

Then('Verify that the new access token is diplayed when user click on Thingsboard access token option', async function (this: CustomWorld)  {
    
});

Given('User enter a valid value as {string} into search input box', async function (this: CustomWorld, searchText: string)  {
    await this.devicePage.searchbox.fill(searchText);
});

Given('User enter a invalid value as {string} into search input box', async function (this: CustomWorld, searchText: string)  {
    this.searchDevice = searchText;
    await this.devicePage.searchbox.fill(searchText);
});

Then('Verify that the searched device is displayed on Devices Page', async function (this: CustomWorld)  {
    await FilterUtility.searchUser(this.page, this.devicePage.macAddress, this.searchDevice);
});

Then('Verify that the No Data message is displayed on Devices Page', async function (this: CustomWorld)  {
    expect(this.devicePage.noDataTable).toBeVisible();
});

Given('User select {string} option from brands dropdown', async function (this: CustomWorld, brandName: string)  {
    await this.devicePage.brandDropdown.click();
    await this.devicePage.dropdownOptions.first().waitFor();
    await FilterUtility.selectOptionFromFilter(this.devicePage.dropdownOptions, brandName);
});

Then('Verify that the selected brand\'s devices are displayed on Devices Page', async function (this: CustomWorld)  {
    await FilterUtility.checkSelectedBrandFilter(this.page, this.devicePage.selectedBrand ,this.devicePage.brandsName);
});


Then('Verify that the all brands devices are displayed on Devices Page', async function (this: CustomWorld)  {
    expect (await this.devicePage.selectedBrand.textContent()).toEqual("Tümü");
});

When('User click on x button on brands filter', async function (this: CustomWorld)  {
    await this.devicePage.brandFilterClear.click();
});

Then('Verify that the all facilities devices are displayed on Devices Page', async function (this: CustomWorld)  {
    expect (await this.devicePage.selectedFacility.textContent()).toEqual("Tümü");
});

Then('Verify that the selected facility\'s devices are displayed on Devices Page', async function (this: CustomWorld)  {
    await FilterUtility.checkSelectedFacilityFilter(this.page, this.devicePage.selectedFacility,this.devicePage.facilitiesName);
});

Given('User select {string} option from facilities dropdown', async function (this: CustomWorld, facilityName: string)  {
    await this.devicePage.facilityDropdown.click();
    await this.devicePage.dropdownOptions.first().waitFor();
    await FilterUtility.selectOptionFromFilter(this.devicePage.dropdownOptions,facilityName);
});

When('User click on x button on facility filter', async function (this: CustomWorld)  {
    await this.devicePage.facilityFilterClear.click();
});

Given('User enter a value on brands filter as {string}', async function (this: CustomWorld, searchTerm: string)  {
    await this.devicePage.brandFilterInput.fill(searchTerm);
    this.searchDevice = searchTerm;
});

Given('User select {string} option from device type dropdown', async function (this: CustomWorld, deviceType: string) {
    await this.devicePage.deviceTypeFilterDropdown.click();
    await this.devicePage.dropdownOptions.first().waitFor();
    await FilterUtility.selectOptionFromFilter(this.devicePage.dropdownOptions, deviceType);
});

Then('Verify that the selected devices type are diplayed on Devices Page', async function (this: CustomWorld) {
    await FilterUtility.checkSelectedDeviceTypeFilter(this.page, this.devicePage.selectedDeviceType, this.devicePage.deviceTypes);
});

When('User click on x button on device type dropdown', async function (this: CustomWorld) {
    await this.devicePage.deviceTypeFilterClear.click();
})

Then('Verify that the all devices type are displayed on Devices Page', async function (this: CustomWorld) {
    expect (await this.devicePage.selectedDeviceType.textContent()).toEqual("Tümü");
})

Then('Verify that the brands name contain the value are displayed on brands filter tab', async function (this: CustomWorld) {
    await this.devicePage.dropdownOptions.first().waitFor();
    await FilterUtility.searchFilter(this.devicePage.dropdownOptions, this.searchDevice);
})

Then('Verify that the error message {string} is displayed on brands filter tab', async function (this: CustomWorld, errorMessage: string) {
    expect (await this.devicePage.noDataOnFilter.innerText()).toEqual(errorMessage);
})

Given('User enter a value on facility filter as {string}', async function (this: CustomWorld, searchText: string) {
    await this.devicePage.facilityFilterInput.fill(searchText);
})

Then('Verify that the facility name contain the value are displayed on facility filter tab', async function (this: CustomWorld) {
    await this.devicePage.dropdownOptions.first().waitFor();
    await FilterUtility.searchFilter(this.devicePage.dropdownOptions, this.searchDevice);
})

Given('User enter a value on device type filter as {string}', async function (this: CustomWorld, searchText: string) {
    await this.devicePage.deviceTypeFilterInput.fill(searchText);
    this.searchDevice = searchText;
})

Then('Verify that the device type name contain the value are displayed on device type filter tab', async function (this: CustomWorld) {
    await this.devicePage.dropdownOptions.first().waitFor();
    await FilterUtility.searchFilter(this.devicePage.dropdownOptions, this.searchDevice);
})

Then('Verify that the error message {string} is displayed on device type filter tab', async function (this: CustomWorld, errorMessage: string) {
    expect (await this.devicePage.noDataOnFilter.innerText()).toEqual(errorMessage);
})

Given('User click on {string} pagination section on Devices Page', async function (this: CustomWorld, pageNumber: string) {
    await this.devicePage.clickPage(pageNumber).click();
    
})

Then('Verify that the {string} page devices are displayed', async function (this: CustomWorld, pageNumber: string) {
    expect((await this.devicePage.clickPage(pageNumber).getAttribute("class"))?.includes("active")).toBe(true);
})

Given('User click on > button on Devices Page', async function (this: CustomWorld) {
    this.currentPage = await this.devicePage.getText("div.n-pagination-item--active");
    await this.devicePage.nextPageButton.click();
})

Then('Verify that the next page is displayed', async function (this: CustomWorld) {
    let nextPage = await this.devicePage.getText("div.n-pagination-item--active");
    let diff = Number(nextPage) - Number(this.currentPage);
    expect(diff).toBe(1);
})

When('User click on < button on Devices Page', async function (this: CustomWorld) {
    this.currentPage = await this.devicePage.getText("div.n-pagination-item--active");
    await this.devicePage.previousPageButton.click();
})

Then('Verify that the previous page is diplayed', async function (this: CustomWorld) {
    let previousPage = await this.devicePage.getText("div.n-pagination-item--active");
    let diff = Number(this.currentPage) - Number(previousPage);
    expect(diff).toBe(1);
})

Then('Verify that the < button is not enable', async function (this: CustomWorld) {
  expect((await this.devicePage.previousPageButton.getAttribute("class")).includes("disabled")).toBeTruthy();
})

Then('Verify that the > button is not enable', async function (this: CustomWorld) {
  expect((await this.devicePage.nextPageButton.getAttribute("class")).includes("disabled")).toBeTruthy();
})

Then('Verify that first page is displayed on Devices Page', async function (this: CustomWorld) {
  expect(await this.devicePage.getText("div.n-pagination-item--active")).toBe("1");
})

When('User click on delete button', async function (this: CustomWorld) {
  await this.devicePage.deleteButton.click();
})

When('User click on X button on delete device pop-up', async function (this: CustomWorld) {
  await this.devicePage.XButton.click();
})

When('User click on delete device button', async function (this: CustomWorld) {
  await this.devicePage.deleteDeviceButton.click();
})

Then('Verify that the device with mac id {string} is not displayed on Device Page', async function (this: CustomWorld, macID: string) {
    await this.devicePage.deviceSuccessToast.waitFor();
    expect(await this.devicePage.checkDevice(macID,""));
})




































