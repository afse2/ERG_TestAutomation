import { LaunchOptions, chromium, firefox, webkit } from "@playwright/test";

const headless = process.env.HEAD ? true : false;

const options: LaunchOptions = {
    headless: headless,
    args: ['--window-size=1920,1040']
}
export const launchBrowser = () => {
    
    switch (process.env.BROWSER) {
        case "chrome":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            return webkit.launch(options);
        default:
            return chromium.launch(options);
    }

}