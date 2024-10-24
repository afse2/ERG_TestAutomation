import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "playwright/test";
import { CustomWorld } from "../../support/custom-world";
import { UsersPage } from "../../pages/UsersPage";
import { FilterUtility } from "../../support/utilities/FilterUtility";
import { DevicePage } from "../../pages/DevicePage";

When('User click on Kullanicilar tab on navbar', async function (this: CustomWorld) {
  this.usersPage = new UsersPage(this.page);
  this.devicePage = new DevicePage(this.page);
  await this.usersPage.usersTab.click();
});

Given('User click on add users button', async function (this: CustomWorld) {
  await this.usersPage.addUser.click();
})

When('User enter mail into mail inputbox as {string}', async function (this: CustomWorld, mail: string) {
  this.userMail = mail;
  await this.usersPage.mailInputbox.fill(mail);
})

When('User select {string} option from role dropdown', async function (this: CustomWorld, roleName: string) {
  this.roleName = roleName;
  await this.usersPage.roleDropdown.click();
  await this.usersPage.selectRole(roleName);
})

When('User select {string} option from facility dropdown', async function (this: CustomWorld, facilityName: string) {
  await this.usersPage.tagDropdown.click();
  await this.usersPage.selectFacility(this.roleName,facilityName);
  await this.usersPage.tagDropdown.click();
});

When('User select {string} option from status dropdown on Create User pop-up', async function (this: CustomWorld,statusName: string)  {
  await this.usersPage.statusDropdown.click();
  await this.usersPage.selectStatus(statusName);
})

When('User click on add button on Create Users pop-up', async function (this: CustomWorld) {
  await this.usersPage.addButton.click();
})

Then('Verify that the created user is displayed on Users Page', async function (this: CustomWorld) {
  expect (await this.usersPage.checkUser(this.userMail)).toBeTruthy();
})

Then('Verify that the error toast {string} is displayed on Users Page', async function (this: CustomWorld, errorToast: string) {
  expect (await this.usersPage.toast.innerText()).toEqual(errorToast);
})

When('User click on X button on Create Users pop-up', async function (this: CustomWorld) {
  await this.usersPage.xButton.click();
})

Then('Verify that the user with {string} mail is not displayed on Users Page', async function (this: CustomWorld, userMail: string) {
  expect (await this.usersPage.checkUser(userMail)).toBeFalsy();
})

Given('User click on three dots sign near the selected user {string}', async function (this: CustomWorld, userMail: string) {
  await this.usersPage.clickEditIcon(userMail);
})

Then('Verify that the edit options {string}, {string}, {string} are displayed on Users Page', async function (this: CustomWorld, option1: string, option2: string, option3: string) {
  let options:string[] = [option1, option2, option3];
  
  await this.usersPage.checkEditOptions(options);
})

Given('User enter a value as {string} into search input box', async function (this: CustomWorld, searchText: string) {
  this.searchUser = searchText;
  await this.usersPage.searchbox.fill(searchText);
})

Then('Verify that the searched users are displayed on Users Page', async function (this: CustomWorld) {
  expect (await this.usersPage.searchUser(this.searchUser)).toBeTruthy();
})

Then('Verify that the No Data message is displayed on Users Page', async function (this: CustomWorld) {
  expect(this.usersPage.noDataTable).toBeVisible();
})

Then('Verify that the selected brand\'s users are displayed on Users Page', async function (this: CustomWorld) {
  await FilterUtility.checkSelectedFilterOnTable(this.page, this.usersPage.selectedBrand,this.usersPage.brandNames);
})

Then('Verify that the all brands users are displayed on Users Page', async function (this: CustomWorld) {
  expect (await this.usersPage.selectedBrand.innerText()).toBe("Tümü");
})

Then('Verify that the selected facility\'s users are displayed on Users Page', async function (this: CustomWorld) {
  await FilterUtility.checkSelectedFilterOnTable(this.page, this.usersPage.selectedFacility, this.usersPage.facilityNames);
})

Then('Verify that the all facilities users are displayed on Users Page', async function (this: CustomWorld) {
  expect (await this.usersPage.selectedFacility.innerText()).toBe("Tümü");
})

Given('User select {string} option from status type dropdown', async function (this: CustomWorld, statusOption: string) {
  await this.usersPage.statusFilterDropdown.click();
  await FilterUtility.selectOptionFromFilter(this.page, statusOption);
})

Then('Verify that the selected status type are displayed on Users Page', async function (this: CustomWorld) {
  await FilterUtility.checkSelectedFilterOnTable(this.page, this.usersPage.selectedStatus, this.usersPage.statusItems);
})

When('User click on x button on status filter', async function (this:CustomWorld) {
  await this.usersPage.statusFilterClear.click();
});

Then('Verify that the all status type are displayed on Users Page', async function (this: CustomWorld) {
  expect (await this.usersPage.selectedStatus.innerText()).toBe("Tümü");
})

Given('User enter a value on status type filter as {string}', async function (this: CustomWorld, searchText: string) {
  await this.usersPage.statusFilterInput.fill(searchText);
  this.searchUser = searchText;
})

Then('Verify that the status type name contain the value are displayed on status type filter tab', async function (this: CustomWorld) {
  await FilterUtility.searchFilter(this.page,this.searchUser);
})

Then('Verify that the error message {string} is displayed on status type filter tab', async function (this: CustomWorld, errorMessage: string) {
  expect (await this.usersPage.noDataOnFilter.innerText()).toEqual(errorMessage);
})

When('User click on reset password button', async function (this: CustomWorld) {
  await this.usersPage.resetPassword.click();
})

When('User click on reset button', async function (this: CustomWorld) {
  await this.usersPage.resetButton.click();
})

Then('Verify that the success message {string} and password renewed pop-up are displayed on Users Page', async function (this: CustomWorld, successToast: string) {
  await this.usersPage.waitForTimeout(500);
  expect(await this.usersPage.passwordRenewedToast.innerText()).toEqual(successToast);
  expect(this.usersPage.resetPasswordPopup).toBeVisible();
})

When('User click on edit button', async function (this: CustomWorld) {
  await this.usersPage.editButton.click();
})


When('User click on save button', async function (this: CustomWorld) {
  await this.usersPage.saveButton.click();
})

When('User click on X button near the facility option', async function (this: CustomWorld) {
  for(const button of await this.usersPage.tagOptionClear.all()){
    await button.click();
  }
})

When('User click on X button on edit user pop-up', async function (this: CustomWorld) {
  await this.usersPage.closePopup.click();
})

Then('Verify that the edit user\'s brand is not displayed as {string}', async function (this: CustomWorld, s: string) {

})

When('User click on delete user button', async function (this: CustomWorld) {
  await this.usersPage.deleteUserButton.click();
})












