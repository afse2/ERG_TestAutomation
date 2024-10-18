import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "playwright/test";
import { CustomWorld } from "../../support/custom-world";
import { ProfilePage } from "../../pages/ProfilePage";
import { LoginPage } from "../../pages/LoginPage";
import { ManagementPage } from "../../pages/ManagementPage";
import { BrandsPage } from "../../pages/BrandPage";




Given('User should be able to login', async function (this:CustomWorld) {
    this.loginPage = new LoginPage(this.page);
    this.profilePage = new ProfilePage(this.page);
    this.managementPage = new ManagementPage(this.page)
    this.brandsPage = new BrandsPage(this.page);
    await this.loginPage.navigateTo(process.env.BASEURL);
    await this.loginPage.login(process.env.USERNAME, process.env.PASSWORD);
    await this.loginPage.waitForNavigation();
});

Given('User click on profile menu tab', async function (this:CustomWorld) {
    
    await this.profilePage.profileTab.click();

});


Then('Verify that the options {string}, {string} is displayed on Profile Menu', async function (this:CustomWorld, myAccount: string, logout: string) {
    expect(await this.profilePage.myAccountButton.textContent()).toEqual(myAccount);
    expect(await this.profilePage.logoutButton.textContent()).toEqual(logout);
});

When('User click on logout button', async function () {
    await this.profilePage.logoutButton.click();
   
});

Then('Verify that the header {string} is displayed when user logout', async function (this:CustomWorld, welcomeHeader: string) {
    expect(await this.profilePage.homepageHeader.textContent()).toEqual(welcomeHeader);
});

When('User click on back navigation button', async function (this:CustomWorld) {
    await this.profilePage.goBack();
});

Then('Verify that the homepage is not diplayed', async function (this:CustomWorld) {
    //expect(await this.profilePage.isVisible(this.profilePage.topbar)).toBeFalsy();
});

When('User click on My Account button and land on My Account Page', async function (this:CustomWorld) {
    await this.profilePage.myAccountButton.click();

});

When('User enter a password as {string} into the new password input box', async function (this:CustomWorld, password: string) {
    await this.profilePage.newPassword.fill(password)
});

When('User enter a password as {string} into the confirm password input box', async function (this:CustomWorld, confirmPassword:string) {
    await this.profilePage.confirmPassword.fill(confirmPassword);
});

When('User click on save changes button', async function (this:CustomWorld) {
    await this.profilePage.saveChanges.click();
});


Then('Verify that the success toast {string} is displayed on My Account Page', async function (this:CustomWorld, updatePasswordToast) {
    expect(await this.profilePage.updatePasswordToast.textContent()).toEqual(updatePasswordToast);
});

When('User leave the new password input box as blank', async function (this:CustomWorld) {
    await this.profilePage.newPassword.clear();
});

When('User leave the confirm password input box as blank', async function (this:CustomWorld) {
    await this.profilePage.confirmPassword.clear();
});

Then('Verify that the error toast {string} is displayed on My Account Page', async function (this:CustomWorld, errorToast) {
    expect(await this.profilePage.errorToast.textContent()).toEqual(errorToast)
});