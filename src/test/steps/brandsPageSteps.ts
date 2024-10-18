import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "playwright/test";
import { CustomWorld } from "../../support/custom-world";


Then('Verify that the Marka Ekle button and {string} header is diplayed on Brands Page', async function (this:CustomWorld, header: string) {
  await this.brandsPage.waitForTimeout(500);
  expect(await this.brandsPage.brandHeader.textContent()).toEqual(header); 
  expect(await this.brandsPage.addBrand.isVisible()).toBeTruthy();
});

Given('User click on Marka Ekle button', async function (this: CustomWorld) {
  await this.brandsPage.addBrand.click();
});

When('User click on Ekle button', async function (this: CustomWorld) {
  await this.brandsPage.addButtonOnPopup.click();
  await this.brandsPage.brandsName.last().waitFor();
});

When('User click on Güncelle button', async function (this: CustomWorld) {
  await this.brandsPage.updateButton.click();
 
});

When('User enter brand name as {string}', async function (this: CustomWorld, brandName) {
  await this.brandsPage.brandNameInputbox.fill(brandName);
});

Then('Verify that the brand {string} is diplayed under the Markalar header', async function (this: CustomWorld, brandName) {
  expect((await this.brandsPage.checkBrand(brandName))).toBeTruthy;
});

Then('Verify that the error toast {string} is diplayed on Brands Page', async function (this: CustomWorld, errorToast) {
  expect(await this.brandsPage.errorToast.textContent()).toEqual(errorToast);
});

Then('Verify that the warning toast {string} is diplayed on Brands Page', async function (this: CustomWorld, warningToast) {
  expect(await this.brandsPage.warningToast.textContent()).toEqual(warningToast);
});

Given('User click on pen icon near the {string} brand', async function (this: CustomWorld, brandName) {
  await this.brandsPage.brandsName.first().waitFor();
  await this.brandsPage.clickBrandPenIcon(brandName);
});

When('User edit brand name as {string}', async function (this: CustomWorld, brandName) {
  await this.brandsPage.editBrandName.fill(brandName);
});


When('User click status switcher', async function (this: CustomWorld) {
  await this.brandsPage.statusSwitcher.click();
});

When('User click on outside the pop-up', async function (this: CustomWorld) {
  await this.brandsPage.clickWithCordinate(1250, 550);
});

Then('Verify that the {string} brand in {string} status is displayed on Brands Page', async function (this: CustomWorld, brandName, statusType) {
  await this.brandsPage.waitForTimeout(3000);
  expect((await this.brandsPage.checkBrand(brandName))).toBeTruthy;
  expect(await this.brandsPage.checkStatusWithBrandName(brandName)).toEqual(statusType);
});

When('User click on X button', async function (this: CustomWorld) {
  await this.brandsPage.xSignButton.click();
});

When('User click on Sil button', async function (this:CustomWorld) {
 await this.brandsPage.deleteButton.click();
});

When('User click on Hayir button', async function (this:CustomWorld) {
  await this.brandsPage.rejectButton.click();
});

When('User click on Evet button', async function (this:CustomWorld) {
  await this.brandsPage.confirmButton.click();
});

Then('Verify that the {string} brand is not displayed on Brands Page', async function (this: CustomWorld, brandName) {
  await this.brandsPage.waitForTimeout(1000);
  expect((await this.brandsPage.checkBrand(brandName))).toBeFalsy;
});

