import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";

export class ProfilePage extends BasePage{
    page: Page;
    profileTab: Locator;
    myAccountButton: Locator;
    logoutButton: Locator;
    homepageHeader:Locator;
    topbar: string;
    newPassword: Locator;
    confirmPassword: Locator;
    saveChanges: Locator;
    updatePasswordToast: Locator;
    errorToast: Locator;


    constructor (page:Page){
        super(page);
        this.profileTab = page.locator(".user-profile");
        this.myAccountButton = page.locator("text= Hesabım ");
        this.logoutButton = page.locator("text= Çıkış ");
        this.homepageHeader = page.locator("h1");
        this.topbar = ".topbar";
        this.newPassword = page.getByPlaceholder("Lütfen yeni parolanızı giriniz");
        this.confirmPassword = page.getByPlaceholder("Lütfen yeni parolanızı tekrar giriniz");
        this.saveChanges = page.locator(".actions");
        this.updatePasswordToast = page.locator(".n-message--success-type");
        this.errorToast = page.locator(".n-message--error-type");



    }
}

module.exports = {ProfilePage};