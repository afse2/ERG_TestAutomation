import { LaunchOptions, chromium, firefox, webkit, ChromiumBrowser, FirefoxBrowser, WebKitBrowser, Browser  } from "@playwright/test";

const headless = process.env.HEAD ? true : false;

const options: LaunchOptions = {
    headless: headless,
    args: ["--start-maximized", "--disable-extensions", "--disable-plugins"],
    firefoxUserPrefs: {
        'media.navigator.streams.fake': true,
        'media.navigator.permission.disabled': true,
    },
}


export const launchBrowser = () => {
    const browserType = process.env.BROWSER || 'chromium';
    
    console.log(`Launching browser: ${browserType}`);

    switch (browserType) {
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