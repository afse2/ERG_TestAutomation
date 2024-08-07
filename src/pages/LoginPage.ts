import { Locator, Page } from "playwright";
import { BasePage } from "./BasePage";



export class LoginPage extends BasePage {
    page: Page;
    username: Locator;
    password: Locator;
    signInButton: Locator;
    brandText: Locator;
    errorToast: Locator;
    forgotPasswordLink: Locator;
    passwordRecoveryPopup: Locator;
    rememberMe: Locator;
    rememberMeCheckBox: Locator;
    passwordRecoveryMail: Locator;
    sendRecoveryLinkButton: Locator;
    recoveryMessage: Locator;
    userNameOnProfile: Locator;
    captchaCode: Locator;



    constructor(page: Page) {
        super(page);
        this.username = page.getByPlaceholder("Lütfen e-posta adresinizi giriniz");
        this.password = page.locator("[type='password']");
        this.signInButton = page.locator("text=Giriş Yap");
        this.brandText = page.locator(".brands-text");
        this.errorToast = page.locator("div.n-message__content");
        this.forgotPasswordLink = page.locator("text=Parolamı unuttum");
        this.passwordRecoveryPopup = page.locator("div.n-dialog__title");
        this.rememberMe = page.locator("span.n-checkbox__label");
        this.rememberMeCheckBox = page.locator("div.n-checkbox-box");
        this.passwordRecoveryMail = page.locator("div.n-dialog--closable input.n-input__input-el");
        this.sendRecoveryLinkButton = page.locator("text=Kurtarma Linkini Gönder");
        this.recoveryMessage = page.locator("div.n-dialog__action");
        this.userNameOnProfile = page.locator(".user span");
        this.captchaCode = page.getByPlaceholder("Captcha code");
    }

   async login(userName:string, password:string) {
    await this.username.fill(userName);
    await this.password.fill(password);
    await this.signInButton.click();
   }
}

module.exports = { LoginPage };