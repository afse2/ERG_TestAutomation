import { expect } from "playwright/test";
import { BasePage } from "./BasePage";
import { Locator, Page } from "playwright";



export class UsersPage extends BasePage {
    page: Page;
    addUser: Locator;
    usersTab: Locator;
    mailInputbox: Locator;
    roleDropdown: Locator;
    roleOptions: Locator;
    tagDropdown: Locator;
    tagOptions: Locator;
    statusDropdown: Locator;
    statusOptions: Locator;
    addButton: Locator;
    mails: Locator;
    nextPageButton: Locator;
    
    


    constructor(page: Page){
        super(page);

        this.usersTab = page.locator("div.item:has-text('Kullanıcılar')");
        this.addUser = page.getByRole('button', { name: 'Kullanıcı Ekle' });
        this.mailInputbox = page.getByPlaceholder('E-posta giriniz');
        this.roleDropdown = page.locator(".n-form-item-blank .n-base-selection .n-base-selection-label").first();
        this.roleOptions = page.locator("div.n-base-select-option");
        this.tagDropdown = page.locator("div.n-base-selection-tags");
        this.tagOptions = page.locator("div.v-vl-items").nth(1).locator("div.n-base-select-option");
        this.statusDropdown = page.locator(".n-form-item-blank .n-base-selection .n-base-selection-label").last();
        this.statusOptions = page.locator("div.v-vl-items").nth(2).locator("div.n-base-select-option");
        this.addButton = page.getByRole("button", {name: "Ekle", exact: true });
        this.mails = page.locator("td[data-col-key='email']");
        this.nextPageButton = page.locator("div.n-pagination-item--button").nth(1);

    }


    async selectRole(roleName: string){
        const roleCount = await this.roleOptions.count();

        for (let i = 0; i < roleCount; i++) {
            const roleText = await this.roleOptions.nth(i).innerText();
            if(roleText === roleName){
               return await this.roleOptions.nth(i).click();
            }
            
        }
    }

    async selectFacility(roleName: string, facility:string){
        const roleWithTags = ["Marka Yöneticisi", "Tesis Yöneticisi", "3. parti Teknik Servis"];
        const tagsCount = await this.tagOptions.count();

        if(roleWithTags.includes(roleName)){
            for (let i = 0; i < tagsCount; i++) {
                let tagText:string;
                if(roleName === "Tesis Yöneticisi"){
                    tagText = (await this.tagOptions.nth(i).innerText()).split(">")[1].trim();
                }else {
                    tagText = (await this.tagOptions.nth(i).innerText()).trim();
                }
                
                if(tagText === facility){
                    return await this.tagOptions.nth(i).click();
                }
            }
        }
    }

    async selectStatus(statusName: string){
        const statusCount = await this.statusOptions.count();

        for (let i = 0; i < statusCount; i++) {
            const statusText = await this.statusOptions.nth(i).innerText();
            if(statusText === statusName){
               return await this.statusOptions.nth(i).click();
            }
            
        }
    }

    async checkUser(userMail: string) {

        let hasNextPage = true;


        while (hasNextPage) {

            await this.page.waitForTimeout(500);

            let mailsCount = await this.mails.count();

            for (let j = 0; j < mailsCount; j++) {
                const mailText = await this.mails.nth(j).innerText();
                if(mailText === userMail){
                    expect(true).toBeTruthy;
                    return;
                }

            }

            hasNextPage = await this.nextPageButton.isVisible() && !((await this.nextPageButton.getAttribute("class")).includes("disabled"));

            if (hasNextPage) {
                await this.nextPageButton.click();

            }

        }

    }
}

module.exports = {UsersPage};