import {Given, When , Then} from "@cucumber/cucumber";
import { expect } from "playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { CustomWorld } from "../../support/custom-world";



Given('User is on the login page', async function (this:CustomWorld) {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.navigateTo(process.env.BASEURL);

});

When('User enter a valid email as {string} into the email input box', async function (this:CustomWorld,username:string) {
    await this.loginPage.username.fill(username);
    this.userName = username;
});

When('User enter a valid password as {string} into the password input box', async function (this:CustomWorld,password:string) {
    await this.loginPage.password.fill(password);
});


When('User click on login button', async function (this:CustomWorld) {
    await this.loginPage.signInButton.click();
    
});

Then('Verify that the header {string} is displayed when user is on the home page', async function (this:CustomWorld,message:string) {
    expect(await this.loginPage.brandText.textContent()).toEqual(message);
    
});

Given('User enter a invalid email as {string} into the email input box', async function (this:CustomWorld,invalidUsername:string) {
    await this.loginPage.username.fill(invalidUsername);
})

Then('Verify that the error toast {string} is displayed on Login page', async function (this:CustomWorld,errorMessage: string)  {
    expect(await this.loginPage.errorToast.textContent()).toEqual(errorMessage);   
})

When('User enter a invalid password as {string} into the password input box', async function (this:CustomWorld, invalidPassword: string) {
    await this.loginPage.password.fill(invalidPassword);
})

When('User leave the password input box as blank', async function (this:CustomWorld) {
    await this.loginPage.password.clear();
})

Given('User leave the username input box as blank', async function(this:CustomWorld) {
    await this.loginPage.username.clear();
})

When('User click on forgot password link', async function (this:CustomWorld)  {
    await this.loginPage.forgotPasswordLink.click();
})

Then('Verify that the forgot password pop-up {string} is displayed on Login Page', async function (this:CustomWorld, popupTitle: string) {
    expect(await this.loginPage.passwordRecoveryPopup.textContent()).toEqual(popupTitle);
})

Then('Verify that the checkbox {string} is displayed on Login Page', async function (this:CustomWorld, rememberMe: string) {
    expect(await this.loginPage.rememberMe.textContent()).toEqual(rememberMe);
})

When('User click on checkbox', async function (this:CustomWorld) {
    await this.loginPage.rememberMeCheckBox.click();
})

Then('Verify that the checkbox is checked', async function (this:CustomWorld)  {
    expect(await this.loginPage.rememberMeCheckBox.isChecked());
})

Then('Verify that the checkbox is unchecked', async function (this:CustomWorld)  {
    await this.loginPage.rememberMeCheckBox.uncheck();
})

Then('Verify that the password is displayed in bullet sign', async function (this:CustomWorld) {
    expect(await this.loginPage.password.getAttribute("type")).toEqual("password")
})

When('User enter a valid email as {string} into the email input box on password recovery pop-up', async function (this:CustomWorld, recoveryMail: string) {
     await this.loginPage.passwordRecoveryMail.fill(recoveryMail);
     this.recoveryMail = recoveryMail;
     
})

When('User click on send password recovery mail button', async function (this:CustomWorld) {
    await this.loginPage.sendRecoveryLinkButton.click();
})

Then('Verify that the email receive message {string} is displayed on password recovery pop-up', async function (this:CustomWorld, recoveryMessage: string) {
    expect(await this.loginPage.recoveryMessage.textContent()).toContain(recoveryMessage + " " + this.recoveryMail);
    
})

Then('Verify that the username is displayed on profile menu who logged in with email', async function (this:CustomWorld) {
    expect(await this.loginPage.userNameOnProfile.textContent()).toEqual(this.userName);
})

Then('Verify that the captcha code {string} is displayed on Login Page', async function (this:CustomWorld,captchaCode: string) {
    expect(await this.loginPage.captchaCode.getAttribute("placeholder")).toEqual(captchaCode);
})




