import { LaunchOptions, chromium, firefox, webkit } from "playwright";

const headless = process.env.HEAD ? true : false;

const options: LaunchOptions = {
    headless: headless,
    slowMo: 0,
    args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
    firefoxUserPrefs: {
      'media.navigator.streams.fake': true,
      'media.navigator.permission.disabled': true,
    },
}


export const launchBrowser = () => {
    const browserType = process.env.npm_config_BROWSER || 'chromium';
    
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