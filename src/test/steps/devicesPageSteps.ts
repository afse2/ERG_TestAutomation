import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "playwright/test";
import { CustomWorld } from "../../support/custom-world";

When('User click on Devices tab on navbar', async function (this: CustomWorld) {
    await this.devicePage.devicesTab.click();
});

Given('User click on Add Device button', async function (this: CustomWorld) {
    await this.devicePage.addDevice.click();
});

When('User enter mac id as {string}', async function (this: CustomWorld, macId) {
    await this.devicePage.macIdInputbox.fill(macId);
});

When('User select device type as {string}', async function (this: CustomWorld, deviceType: string) {
    await this.devicePage.deviceTypeDropdown.click();
    await this.devicePage.selectDeviceType(deviceType);
});

When('User click on Add button', async function (this: CustomWorld) {
    await this.devicePage.addButton.click();
});

Then('Verify that the device with mac id {string} and device type {string} is displayed on Devices Page', async function (this: CustomWorld, s: string, s2: string) {
    
});

Then('Verify that the error toast {string} is diplayed on Devices Page', async function (this: CustomWorld, string: string) {
    
});

Given('User click on three dots sign near the selected gateway device {string}', async function (this: CustomWorld, string: string) {
    
});

When('User click on edit option from dropdown', async function (this: CustomWorld) {
    
});

When('User click on save changes button on Devices Page', async function (this: CustomWorld)  {
    
});

Then('Verify that the options {string}, {string}, {string} are displayed on edit menu', async function (this: CustomWorld, s: string, s2: string, s3: string)  {
    
});

Given('User click on three dots sign near the selected device {string}', async function (this: CustomWorld, s: string)  {
    
});

Then('Verify that the new access token is diplayed when user click on Thingsboard access token option', async function (this: CustomWorld)  {
    
});

When('User click on renew token button', async function (this: CustomWorld)  {
    
});

When('User click on Thingsboard access token option', async function (this: CustomWorld)  {
    
});

Given('User enter a valid value as {string} into search input box', async function (this: CustomWorld, s: string)  {
    
});

Given('User enter a invalid value as {string} into search input box', async function (this: CustomWorld, s: string)  {
    
});

Then('Verify that the searched device is displayed on Devices Page', async function (this: CustomWorld)  {
    
});

Then('Verify that the selected brand&#39;s devices are displayed on Devices Page', async function (this: CustomWorld)  {
    
});

Given('User select {string} option from brands dropdown', async function (this: CustomWorld, s: string)  {
    
});

Then('Verify that the No Data message is displayed on Devices Page', async function (this: CustomWorld)  {
    
});

Then('Verify that the all brands devices are displayed on Devices Page', async function (this: CustomWorld)  {
    
});

When('User click on x button', async function (this: CustomWorld)  {
    
});

Then('Verify that the selected brand\'s devices are displayed on Devices Page', async function (this: CustomWorld)  {
    
});

Then('Verify that the all facilities devices are displayed on Devices Page', async function (this: CustomWorld)  {
    
});

Then('Verify that the selected facility\'s devices are displayed on Devices Page', async function (this: CustomWorld)  {
    
});

Given('User select {string} option from facilities dropdown', async function (this: CustomWorld, s: string)  {
    
});

Then('Verify that the error message {string} is displayed on brands filter tab', async function (this: CustomWorld, s: string)  {
    
})

Then('Verify that the brands name contain the value are displayed on brands filter tab', async function (this: CustomWorld)  {
    
})

Given('User enter a value on brands filter as {string}', async function (this: CustomWorld, s: string)  {
    
})

Then('Verify that the all devices type are displayed on Devices Page', async function (this: CustomWorld)  {
    
})

Then('Verify that the selected devices type are diplayed on Devices Page', async function (this: CustomWorld)  {
    
})

Given('User select {string} option from device type dropdown', async function (this: CustomWorld, s: string)  {
    
})

Then('Verify that the all facilities belonging to the brand are displayed under the facilities drop-down menu', async function (this: CustomWorld)  {
    
})

Then('Verify that the device type name contain the value are displayed on device type filter tab', async function (this: CustomWorld)  {
    
})

Given('User enter a value on device type filter as {string}', async function (this: CustomWorld, s: string)  {
    
})

Then('Verify that the facility name contain the value are displayed on facility filter tab', async function (this: CustomWorld)  {
    
})

Then('Verify that the error message {string} is displayed on device type filter tab', async function (this: CustomWorld, s: string)  {
    
})

Given('User enter a value on facility filter as {string}', async function (this: CustomWorld, s: string)  {
    
})

Given('User click on {string} pagination section on Devices Page', async function (this: CustomWorld, s: string)  {
    
})

Then('Verify that the {string} page devices are displayed', async function (this: CustomWorld, s: string)  {
    
})

Given('User click on > button on Devices Page', async function (this: CustomWorld)  {
    
})

Then('Verify that the next page is displayed', async function (this: CustomWorld)  {
    
})

When('User click on < button on Devices Page', async function (this: CustomWorld)  {
    
})

Then('Verify that the previous page is diplayed', async function (this: CustomWorld)  {
    
})

Then('Verify that the > button is not enable', async function (this: CustomWorld)  {
    
})

Then('Verify that the < button is not enable', async function (this: CustomWorld)  {
    
})

Then('Verify that first page is displayed on Devices Page', async function (this: CustomWorld)  {
    
})

When('User click on delete button', async function (this: CustomWorld)  {
    
})

When('User click on X button on delete device pop-up', async function (this: CustomWorld)  {
    
})

When('User click on delete device button', async function (this: CustomWorld)  {
    
})

Then('Verify that the device with mac id {string} is not displayed on Device Page', async function (this: CustomWorld, s: string)  {
    
})























