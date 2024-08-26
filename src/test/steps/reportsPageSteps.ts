import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "playwright/test";
import { CustomWorld } from "../../support/custom-world";


When('User click Raporlar tab on navbar', async function (this:CustomWorld) {
    await this.reportPage.reportTab.nth(0).click();
});

Given('User select this month option from date dropdown', async function (this:CustomWorld) {
    await this.reportPage.dateDropdown.click();
    await this.reportPage.thisMonth.click();
});

When('User select daily option from basis dropdown', async function (this:CustomWorld) {
    await this.reportPage.basisDropdown.click();
    await this.reportPage.dailyBasis.nth(1).click();
});

Then('Verify that the reports for the current month are displayed on a daily basis', async function (this:CustomWorld) {
    await this.reportPage.checkDatesInCurrentMonth();
});


When('User select monthly option from basis dropdown', async function (this:CustomWorld) {
    await this.reportPage.basisDropdown.click();
    await this.reportPage.monthlyBasis.click();
});

Then('Verify that the reports for the current month are displayed on a monthly basis', async function (this:CustomWorld) {
    await this.reportPage.chechMonthInCurrentMonth();
});

Given('User select all option from facility dropdown', async function (this:CustomWorld) {
    await this.reportPage.facilityDropdown.click();
    await this.reportPage.allFacilities.click();
});

Then('Verify that all facilities are displayed on Facilities Report Page', async function (this:CustomWorld) {
    await this.reportPage.checkFacilityNames();
});

Given('User enter a word on facility filter as {string}', async function (this:CustomWorld, string) {
    
});

Then('Verify that the facilities contain the word {string} are displayed on facility filter tab', async function (this:CustomWorld, string) {
    
});

Then('Verify that the error message {string} is displayed on facility filter tab', async function (this:CustomWorld, string) {
    
});

Given('User select a facility option on facility filter as {string}', async function (this:CustomWorld, string) {
    
});

Then('Verify that the selected facility is displayed on facility filter tab', async function (this:CustomWorld) {
    
});

When('User click on X button on facility filter', async function (this:CustomWorld) {
    
});

Then('Verify that the facility filter is displayed with all selected on Facility Report Page', async function (this:CustomWorld) {
    
});

Given('User select a compliance rate option on compliance rate filter as {string}', async function (this:CustomWorld, string) {
    
});

Then('Verify that the selected compliance rate is displayed on compliance rate filter tab', async function (this:CustomWorld) {
    
});

When('User click on X button on compliance rate filter', async function (this:CustomWorld) {
    
});

Then('Verify that the compliance rate filter is diplayed with all selected on Facility Report Page', async function (this:CustomWorld) {
    
});

Given('User select this week option on date filter', async function (this:CustomWorld) {
    
});

Then('Verify that the this week is diplayed on date filter', async function (this:CustomWorld) {
    
});

Given('User click on date column header', async function (this:CustomWorld) {
    
});

Then('Verify that the reports are sorted by date in ascending order', async function (this:CustomWorld) {
    
});

Given('User dbclick on date column header', async function (this:CustomWorld) {
    
});

Then('Verify that the reports are sorted by date in descending order', async function (this:CustomWorld) {
    
});

Given('User click on compliance rate column header', async function (this:CustomWorld) {
    
});

Then('Verify that the reports are sorted by compliance rate in ascending order', async function (this:CustomWorld) {
    
});

Given('User dbclick on compliance rate column header', async function (this:CustomWorld) {
    
});

Then('Verify that the reports are sorted by compliance rate in descending order', async function (this:CustomWorld) {
    
});

Given('User click on facilities name column header', async function (this:CustomWorld) {
    
});

Then('Verify that the reports are sorted by facilities name in ascending order', async function (this:CustomWorld) {
    
});

Given('User dbclick on facilities name column header', async function (this:CustomWorld) {
    
});

Then('Verify that the reports are sorted by facilities name in descending order', async function (this:CustomWorld) {
    
});

Given('User click on success column header', async function (this:CustomWorld) {
    
});

Then('Verify that the reports are sorted by success in ascending order', async function (this:CustomWorld) {
    
});

Given('User dbclick on success column header', async function (this:CustomWorld) {
    
});

Then('Verify that the reports are sorted by success in descending order', async function (this:CustomWorld) {
    
});

Given('User click on fail column header', async function (this:CustomWorld) {
    
});

Then('Verify that the reports are sorted by fail in ascending order', async function (this:CustomWorld) {
    
});

Given('User dbclick on fail column header', async function (this:CustomWorld) {
    
});

Then('Verify that the reports are sorted by fail in descending order', async function (this:CustomWorld) {
    
});

Given('User click on unexpected success column header', async function (this:CustomWorld) {
    
});

Then('Verify that the reports are sorted by unexpected success in ascending order', async function (this:CustomWorld) {
    
});

Given('User dbclick on unexpected success column header', async function (this:CustomWorld) {
    
});

Then('Verify that the reports are sorted by unexpected success in descending order', async function (this:CustomWorld) {
    
});

Given('User click on unexpected fail column header', async function (this:CustomWorld) {
    
});

Then('Verify that the reports are sorted by unexpected fail in ascending order', async function (this:CustomWorld) {
    
});

Given('User dbclick on unexpected fail column header', async function (this:CustomWorld) {
    
});

Then('Verify that the reports are sorted by unexpected fail in descending order', async function (this:CustomWorld) {
    
});

Given('User click on total column header', async function (this:CustomWorld) {
    
});

Then('Verify that the reports are sorted by total in ascending order', async function (this:CustomWorld) {
    
});

Given('User dbclick on total column header', async function (this:CustomWorld) {
    
});

Then('Verify that the reports are sorted by total in descending order', async function (this:CustomWorld) {
    
});

When('User click on {int} button on pagination section', async function (this:CustomWorld, int) {
    
    
});

Then('Verify that the {int} page set of reports are displayed', async function (this:CustomWorld, int) {
    
    
});

When('User click on > button on pagination section', async function (this:CustomWorld) {
    
});

Then('Verify that the next page set of reports are displayed', async function (this:CustomWorld) {
    
});

When('User click on < button on pagination section', async function (this:CustomWorld) {
    
});

Then('Verify that the < is not enable', async function (this:CustomWorld) {
    
});

When('User click on last page button on pagination section', async function (this:CustomWorld) {
    
});

Then('Verify that the > is not enable', async function (this:CustomWorld) {
    
});

Then('Verify that first page is diplayed', async function (this:CustomWorld) {
    
});

When('User select today option on date filter', async function (this:CustomWorld) {
    
});

Given('User click on XLS button on Facility Report Page', async function (this:CustomWorld) {
    
});

Then('Verify that the downloaded excel file and reports page datas are matched', async function (this:CustomWorld) {
    
});

Given('User select the start date as', async function (this:CustomWorld) {
    
});

When('User select the end date as', async function (this:CustomWorld) {
    
});

Then('Verify that two options data are matched', async function (this:CustomWorld) {
    
});