import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "playwright/test";
import { PageManager } from "../../pages/PageManager";
import { CustomWorld } from "../../support/custom-world";
import { ProfilePage } from "../../pages/ProfilePage";

let profilePage:ProfilePage;

Given('User should be able to login', async function (this:CustomWorld) {
    const pageManager = new PageManager(this.page);
    profilePage = pageManager.getProfilePage();
    this.managementPage = pageManager.getManagementPage();
    const loginPage = pageManager.getLoginPage();
    this.brandsPage = pageManager.getBrandsPage();
    this.reportPage = pageManager.getReportPage();
    
    await loginPage.navigateTo(process.env.BASEURL);
    await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
    await loginPage.waitForNavigation();


});

Given('User click on profile menu tab', async function () {
    
    await profilePage.profileTab.click();

});


Then('Verify that the options {string}, {string} is displayed on Profile Menu', async function (myAccount, logout) {
    expect(await profilePage.myAccountButton.textContent()).toEqual(myAccount);
    expect(await profilePage.logoutButton.textContent()).toEqual(logout);
});

When('User click on logout button', async function () {
    await profilePage.logoutButton.click();
   
});

Then('Verify that the header {string} is displayed when user logout', async function (welcomeHeader) {
    expect(await profilePage.homepageHeader.textContent()).toEqual(welcomeHeader);
});

When('User click on back navigation button', async function () {
    await profilePage.goBack();
});

Then('Verify that the homepage is not diplayed', async function () {
    //expect(await profilePage.isVisible(profilePage.topbar)).toBeFalsy();
});

When('User click on My Account button and land on My Account Page', async function () {
    await profilePage.myAccountButton.click();

});

When('User enter a password as {string} into the new password input box', async function (password) {
    await profilePage.newPassword.fill(password)
});

When('User enter a password as {string} into the confirm password input box', async function (confirmPassword) {
    await profilePage.confirmPassword.fill(confirmPassword);
});

When('User click on save changes button', async function () {
    await profilePage.saveChanges.click();
});


Then('Verify that the success toast {string} is displayed on My Account Page', async function (updatePasswordToast) {
    expect(await profilePage.updatePasswordToast.textContent()).toEqual(updatePasswordToast);
});

When('User leave the new password input box as blank', async function () {
    await profilePage.newPassword.clear();
});

When('User leave the confirm password input box as blank', async function () {
    await profilePage.confirmPassword.clear();
});

Then('Verify that the error toast {string} is displayed on My Account Page', async function (errorToast) {
    expect(await profilePage.errorToast.textContent()).toEqual(errorToast)
});