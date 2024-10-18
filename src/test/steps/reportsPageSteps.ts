import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "playwright/test";
import { CustomWorld } from "../../support/custom-world";
import { isAwaitKeyword } from "typescript";
import { ReportPage } from "../../pages/ReportPage";


When('User click Raporlar tab on navbar', async function (this:CustomWorld) {
    this.reportPage = new ReportPage(this.page);
    await this.reportPage.reportTab.click();
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

Given('User enter a word on facility filter as {string}', async function (this:CustomWorld, searchTerm) {
    await this.reportPage.facilityFilterInput.fill(searchTerm);
});

Then('Verify that the facilities contain the word {string} are displayed on facility filter tab', async function (this:CustomWorld, searchTerm) {
    await this.reportPage.isSearchWordInFacility(searchTerm);
});

Then('Verify that the error message {string} is displayed on facility filter tab', async function (this:CustomWorld, errorDropdown) {
    expect (await this.reportPage.noDataDropdown.textContent()).toEqual(errorDropdown);
});

Given('User select a facility option on facility filter as {string}', async function (this:CustomWorld, facilityName) {
    await this.reportPage.selectFacilityFromFilter(facilityName);
});

Then('Verify that the selected facility is displayed on facility filter tab', async function (this:CustomWorld) {
    await this.reportPage.checkSelectedFacilityFilter();
});

When('User click on X button on facility filter', async function (this:CustomWorld) {
    await this.reportPage.facilityFilterClear.click();
});

Then('Verify that the facility filter is displayed with all selected on Facility Report Page', async function (this:CustomWorld) {
    expect (await this.reportPage.selectedFacility.textContent()).toEqual("Tümü");
});

Given('User select a compliance rate option on compliance rate filter as {string}', async function (this:CustomWorld, complianceRate) {
    this.complianceRate = complianceRate;
    await this.reportPage.complianceRateDropdown.click();
    await this.reportPage.selectComplianceRate(this.complianceRate);
});

Then('Verify that the selected compliance rate is displayed on compliance rate filter tab', async function (this:CustomWorld) {
    await this.reportPage.checkComplianceRate(this.complianceRate);
});

Given('User select {string} option on date filter', async function (this:CustomWorld, date: string) {
    await this.reportPage.dateDropdown.click();
    this.dateOptionNumber = await this.reportPage.selectDate(date);
});

Then('Verify that the selected date is diplayed on date filter', async function (this:CustomWorld) {
    await this.reportPage.chechDataDateMatchSelectedFilter(this.dateOptionNumber);
});

Given('User click on date column header', async function (this:CustomWorld) {
    await this.reportPage.dateTableHeader.click();
});

Then('Verify that the reports are sorted by date in ascending order', async function (this:CustomWorld) {
    await this.reportPage.checkDateSorting("ascending");
});

Given('User dbclick on date column header', async function (this:CustomWorld) {
    await this.reportPage.dateTableHeader.dblclick();
});

Then('Verify that the reports are sorted by date in descending order', async function (this:CustomWorld) {
    await this.reportPage.checkDateSorting("descending");
});

Given('User click on compliance rate column header', async function (this:CustomWorld) {
    await this.reportPage.complianceTableHeader.click();
});

Then('Verify that the reports are sorted by compliance rate in ascending order', async function (this:CustomWorld) {
    await this.reportPage.checkComplianceRateSorting("ascending");
});

Given('User dbclick on compliance rate column header', async function (this:CustomWorld) {
    await this.reportPage.complianceTableHeader.dblclick();
});

Then('Verify that the reports are sorted by compliance rate in descending order', async function (this:CustomWorld) {
    await this.reportPage.checkComplianceRateSorting("descending");
});

Given('User click on facilities name column header', async function (this:CustomWorld) {
    await this.reportPage.facilityTableHeader.click();
});

Then('Verify that the reports are sorted by facilities name in ascending order', async function (this:CustomWorld) {
    await this.reportPage.checkFacilityNameSorting("ascending");
});

Given('User dbclick on facilities name column header', async function (this:CustomWorld) {
    await this.reportPage.facilityTableHeader.dblclick();
});

Then('Verify that the reports are sorted by facilities name in descending order', async function (this:CustomWorld) {
    await this.reportPage.checkFacilityNameSorting("descending");
});

Given('User click on success column header', async function (this:CustomWorld) {
    await this.reportPage.successTableHeader.click();
});

Then('Verify that the reports are sorted by success in ascending order', async function (this:CustomWorld) {
    await this.reportPage.checkSuccessSorting("ascending");
});

Given('User dbclick on success column header', async function (this:CustomWorld) {
    await this.reportPage.successTableHeader.dblclick();
});

Then('Verify that the reports are sorted by success in descending order', async function (this:CustomWorld) {
    await this.reportPage.checkSuccessSorting("descending");
});

Given('User click on fail column header', async function (this:CustomWorld) {
    await this.reportPage.failTableHeader.click();
});

Then('Verify that the reports are sorted by fail in ascending order', async function (this:CustomWorld) {
    await this.reportPage.checkFailSorting("ascending");
});

Given('User dbclick on fail column header', async function (this:CustomWorld) {
    await this.reportPage.failTableHeader.dblclick();
});

Then('Verify that the reports are sorted by fail in descending order', async function (this:CustomWorld) {
    await this.reportPage.checkFailSorting("descending");
});

Given('User click on unexpected success column header', async function (this:CustomWorld) {
    await this.reportPage.unexpectedSuccessTableHeader.click();
});

Then('Verify that the reports are sorted by unexpected success in ascending order', async function (this:CustomWorld) {
    await this.reportPage.checkUnexpectedSuccessSorting("ascending");
});

Given('User dbclick on unexpected success column header', async function (this:CustomWorld) {
    await this.reportPage.unexpectedSuccessTableHeader.dblclick();
});

Then('Verify that the reports are sorted by unexpected success in descending order', async function (this:CustomWorld) {
    await this.reportPage.checkUnexpectedSuccessSorting("descending");
});

Given('User click on unexpected fail column header', async function (this:CustomWorld) {
    await this.reportPage.unexpectedFailTableHeader.click();
});

Then('Verify that the reports are sorted by unexpected fail in ascending order', async function (this:CustomWorld) {
    await this.reportPage.checkUnexpectedFailSorting("ascending");
});

Given('User dbclick on unexpected fail column header', async function (this:CustomWorld) {
    await this.reportPage.unexpectedFailTableHeader.dblclick();
});

Then('Verify that the reports are sorted by unexpected fail in descending order', async function (this:CustomWorld) {
    await this.reportPage.checkUnexpectedFailSorting("descending");
});

Given('User click on total column header', async function (this:CustomWorld) {
    await this.reportPage.totalTableHeader.click();
});

Then('Verify that the reports are sorted by total in ascending order', async function (this:CustomWorld) {
    await this.reportPage.checkTotalSorting("ascending");
});

Given('User dbclick on total column header', async function (this:CustomWorld) {
    await this.reportPage.totalTableHeader.dblclick();
});

Then('Verify that the reports are sorted by total in descending order', async function (this:CustomWorld) {
    await this.reportPage.checkTotalSorting("descending");
});

When('User click on {int} button on pagination section', async function (this:CustomWorld, pageNumber:number) {
    await this.reportPage.waitForTimeout(2000);
    await this.reportPage.clickOnPage(pageNumber);
    
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