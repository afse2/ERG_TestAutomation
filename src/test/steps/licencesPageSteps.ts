import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "playwright/test";
import { CustomWorld } from "../../support/custom-world";
import { LicencesPage } from "../../pages/LicencesPage";

When('User click on Licences tab on navbar', async function (this: CustomWorld) {
  this.licencePage = new LicencesPage(this.page);
  await this.licencePage.licenceTab.click();
});

Given('User click on add licence button', async function (this: CustomWorld) {
  await this.licencePage.addLicenceButton.click();
});

When('User select device from devices table', async function (this: CustomWorld) {

});


When('User select a valid validity period', async function (this: CustomWorld) {

});

When('User select a brand from brand dropdown', async function (this: CustomWorld) {

});

When('User select a facility from facility dropdown', async function (this: CustomWorld) {

});

When('User click on add button on Create Licence pop-up', async function (this: CustomWorld) {

});

Then('Verify that the success toast {string} is displayed on Licences Page', async function (this: CustomWorld, s: string) {

});

Then('Verify that the previously added devices is not selectable', async function (this: CustomWorld) {

});

Then('Verify that the error toast {string} is diplayed on Licences Page', async function (this: CustomWorld, s: string) {

});

Given('User click on three dots sign near the selected licence', async function (this: CustomWorld) {

});

Then('Verify that the options {string} and {string} are displayed on edit menu', async function (this: CustomWorld, s: string, s2: string) {

});

Given('User enter a search value as {string} into search input box', async function (this: CustomWorld, s: string) {

});

Then('Verify that the licence key contain search value is diplayed on Licences Page', async function (this: CustomWorld) {

});

Then('Verify that the No Data message is displayed on Licences Page', async function (this: CustomWorld) {

});

Then('Verify that the selected brand\'s licences are displayed on Licences Page', async function (this: CustomWorld) {

});

Then('Verify that the all brands licences are displayed on licences Page', async function (this: CustomWorld) {

});

Then('Verify that the selected facility\'s licences are displayed on Licences Page', async function (this: CustomWorld) {

});

Then('Verify that the all facilities licences are displayed on Licences Page', async function (this: CustomWorld) {

});

Given('User select {string} option from status dropdown', async function (this: CustomWorld, s: string) {

});

Then('Verify that the selected status licences are displayed on Licences Page', async function (this: CustomWorld) {

});

Then('Verify that the all status licences are displayed on Licences Page', async function (this: CustomWorld) {

});

Given('User enter a value on status filter as {string}', async function (this: CustomWorld, s: string) {

});

Then('Verify that the status contain the value are displayed on status filter tab', async function (this: CustomWorld) {

});

Then('Verify that the error message {string} is displayed on status filter tab', async function (this: CustomWorld, s: string) {

});

Given('User click on {string} pagination section on Licences Page', async function (this: CustomWorld, s: string) {

});

Then('Verify that the {string} page licence are displayed', async function (this: CustomWorld, s: string) {

});

Given('User click on > button on Licences Page', async function (this: CustomWorld) {

});

When('User click on < button on Licence Page', async function (this: CustomWorld) {

});

Then('Verify that first page is displayed on Licences Page', async function (this: CustomWorld) {

});

When('User click on X button on delete licence pop-up', async function (this: CustomWorld) {

});

Then('Verify that the licence is displayed on Licence Page', async function (this: CustomWorld) {

});

Then('Verify that the licence is not displayed on Licence Page', async function (this: CustomWorld) {

});

When('User click on revoke button', async function (this: CustomWorld) {

});

When('User click on revoke licence button', async function (this: CustomWorld) {

});

Then('Verify that the licence is displayed as revoked on Licences Page', async function (this: CustomWorld) {

});

When('User click on X button on revoke licence pop-up', async function (this: CustomWorld) {

});

Then('Verify that the licence is displayed as not revoked on Licence Page', async function (this: CustomWorld) {

});
















