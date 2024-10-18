import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "playwright/test";
import { CustomWorld } from "../../support/custom-world";




Then('Verify that all items {string}, {string}, {string}, {string}, {string}, {string} is diplayed on navbar', async function (this: CustomWorld, markalar, raporlar, cihazlar, lisanslar, kullanicilar, veriler) {

  await this.managementPage.navbarItems.last().waitFor();
  const actualItemNames: Array<string> = [markalar, raporlar, cihazlar, lisanslar, kullanicilar, veriler];
  expect(await this.managementPage.checkNavbarItem(this.managementPage.navbarItems, actualItemNames)).toBeTruthy();
});

When('User click on {string} button', async function (buttonName) {
  await this.managementPage.navbarItems.last().waitFor();
  await this.managementPage.clickWithButtonName(this.managementPage.navbarItems, buttonName);
  await this.managementPage.navbarItems.last().waitFor();
});

Then('Verify that the header {string} is displayed on {string} Page', async function (this: CustomWorld, headerName, pageName) {
  // expect(await this.managementPage.activeItem.textContent()).toEqual(pageName);     
  expect(await this.managementPage.reportHeader.textContent()).toEqual(headerName);
});

Then('Verify that the button {string} is displayed on {string} Page', async function (this: CustomWorld, buttonName, pageName) {
  // expect(await this.managementPage.activeItem.textContent()).toEqual(pageName);    
  expect(await this.managementPage.checkButtonWithName(buttonName));

});

Then('Verify that the column name {string} is displayed on {string} Page', async function (this: CustomWorld, columName, pageName) {
  // expect(await this.managementPage.activeItem.textContent()).toEqual(pageName);
  expect(await this.managementPage.columnNames.nth(1).textContent()).toEqual(columName);
});