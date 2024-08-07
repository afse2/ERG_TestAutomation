import {Given, When , Then} from "@cucumber/cucumber";
import { expect } from "playwright/test";
import { PageManager } from "../../pages/PageManager";
import { LoginPage } from "../../pages/LoginPage";
import { CustomWorld } from "../../support/custom-world";


let loginPage: LoginPage;



Given('User is on the login page', async function () {
    const pageManager = new PageManager(this.page);
    loginPage = pageManager.getLoginPage();
    await loginPage.navigateTo(process.env.BASEURL);

});

When('User enter a valid email as {string} into the email input box', async function (username:string) {
    await loginPage.username.fill(username);
    this.userName = username;
});

When('User enter a valid password as {string} into the password input box', async function (password:string) {
    await loginPage.password.fill(password);
});


When('User click on login button', async function () {
    await loginPage.signInButton.click();
    
});

Then('Verify that the header {string} is displayed when user is on the home page', async function (message:string) {
    expect(await loginPage.brandText.textContent()).toEqual(message);
    
});

Given('User enter a invalid email as {string} into the email input box', async function (invalidUsername:string) {
    await loginPage.username.fill(invalidUsername);
})

Then('Verify that the error toast {string} is displayed on Login page', async function (errorMessage: string)  {
    expect(await loginPage.errorToast.textContent()).toEqual(errorMessage);   
})

When('User enter a invalid password as {string} into the password input box', async function ( invalidPassword: string) {
    await loginPage.password.fill(invalidPassword);
})

When('User leave the password input box as blank', async function () {
    await loginPage.password.clear();
})

Given('User leave the username input box as blank', async function() {
    await loginPage.username.clear();
})

When('User click on forgot password link', async function ()  {
    await loginPage.forgotPasswordLink.click();
})

Then('Verify that the forgot password pop-up {string} is displayed on Login Page', async function ( popupTitle: string) {
    expect(await loginPage.passwordRecoveryPopup.textContent()).toEqual(popupTitle);
})

Then('Verify that the checkbox {string} is displayed on Login Page', async function ( rememberMe: string) {
    expect(await loginPage.rememberMe.textContent()).toEqual(rememberMe);
})

When('User click on checkbox', async function () {
    await loginPage.rememberMeCheckBox.click();
})

Then('Verify that the checkbox is checked', async function ()  {
    expect(await loginPage.rememberMeCheckBox.isChecked());
})

Then('Verify that the checkbox is unchecked', async function ()  {
    await loginPage.rememberMeCheckBox.uncheck();
})

Then('Verify that the password is displayed in bullet sign', async function () {
    expect(await loginPage.password.getAttribute("type")).toEqual("password")
})

When('User enter a valid email as {string} into the email input box on password recovery pop-up', async function (this:CustomWorld, recoveryMail: string) {
     await loginPage.passwordRecoveryMail.fill(recoveryMail);
     this.recoveryMail = recoveryMail;
     
})

When('User click on send password recovery mail button', async function () {
    await loginPage.sendRecoveryLinkButton.click();
})

Then('Verify that the email receive message {string} is displayed on password recovery pop-up', async function (this:CustomWorld, recoveryMessage: string) {
    expect(await loginPage.recoveryMessage.textContent()).toContain(recoveryMessage + " " + this.recoveryMail);
    
})

Then('Verify that the username is displayed on profile menu who logged in with email', async function (this:CustomWorld) {
    expect(await loginPage.userNameOnProfile.textContent()).toEqual(this.userName);
})

Then('Verify that the captcha code {string} is displayed on Login Page', async function (captchaCode: string) {
    expect(await loginPage.captchaCode.getAttribute("placeholder")).toEqual(captchaCode);
})





