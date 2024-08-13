import {Given, When , Then} from "@cucumber/cucumber";
import { expect } from "playwright/test";
import { CustomWorld } from "../../support/custom-world";


Then('Verify that the {string} button and {string} header is diplayed on Brands Page', async function (this:CustomWorld, buttonName, header) {
    expect(await this.brandsPage.checkButtonWithName(buttonName));
    expect(await this.brandsPage.brandHeader.textContent()).toEqual(header);
  });

  When('User enter brand name as {string}', async function (this:CustomWorld, brandName) {
    await this.brandsPage.brandNameInputbox.fill(brandName);
  });

  Then('Verify that the brand {string} is diplayed under the Markalar header', async function (this:CustomWorld, brandName) {
    expect ((await this.brandsPage.checkBrand(brandName)).isVisible()).toBeTruthy();
  });

  Then('Verify that the error toast {string} is diplayed on Brands Page', async function (this:CustomWorld, errorToast) {
    expect (await this.brandsPage.errorToast.textContent()).toEqual(errorToast);
  });

  Then('User click on pen icon near the {string} brand', async function (this:CustomWorld, string) {
    
  });

  When('User edit brand name as {string}', async function (this:CustomWorld, brandName) {
        await this.brandsPage.brandNameInputbox.fill(brandName);
  });


  When('User click status switcher', async function (this:CustomWorld) {
        await this.brandsPage.statusSwitcher.click();
  });

  When('User click on outside the pop-up', async function (this:CustomWorld) {
    
  });

  Then('Verify that the {string} brand in {string} status is displayed on Brands Page', async function (this:CustomWorld, string, string2) {
    
  });

  When('User click on X button', async function (this:CustomWorld) {
    
  });

  Then('Verify that the {string} brand is not displayed on Brands Page', async function (this:CustomWorld, string) {
    
  });