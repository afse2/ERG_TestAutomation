import { BeforeAll, AfterAll, Before, After, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { launchBrowser } from "../browser/launchBrowser";
import { getEnv } from "../env/env";

const fs = require("fs-extra");

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    getEnv();
    browser = await launchBrowser();
});

setDefaultTimeout(60 * 1000 * 2);

Before(async function ({ pickle }) {
    const scenarioName = pickle.name + pickle.id;
    context = await browser.newContext({
        recordVideo: {
            dir: "test-results/videos",
        },
    });
    await context.tracing.start({
        name: scenarioName,
        title: pickle.name,
        sources: true,
        screenshots: true,
        snapshots: true,
    });
    const page = await context.newPage();
    this.page = page;
});

After(async function ({ pickle, result }) {
    let videoPath: string;
    let img: Buffer;
    const tracePath = `./test-results/trace/${pickle.id}.zip`;

    if (result?.status == Status.FAILED) {
        img = await this.page.screenshot({
            path: `./test-results/screenshots/${pickle.name}.png`,
            type: "png",
        });

        const video = this.page.video();
        if (video) {
            videoPath = await video.path();
        } else {
            console.warn('No video found for this test.');
        }
    }

    await context.tracing.stop({ path: tracePath });
    await this.page.close();
    await context.close();

    if (result?.status == Status.FAILED) {
        if (img) {
            await this.attach(img, "image/png");
        }
        if (videoPath && fs.existsSync(videoPath)) {
            const videoBuffer = await fs.readFile(videoPath);
            await this.attach(videoBuffer, 'video/webm');
        } else {
            console.warn(`Video file not found: ${videoPath}`);
        }
        const traceFileLink = `<a href="https://trace.playwright.dev/">Open ${tracePath}</a>`;
        await this.attach(`Trace file: ${traceFileLink}`, 'text/html');
    }
});

AfterAll(async function () {
    await browser.close();
});

function getStorageState(user: string): string | { cookies: { name: string; value: string; domain: string; path: string; expires: number; httpOnly: boolean; secure: boolean; sameSite: "Strict" | "Lax" | "None"; }[]; origins: { origin: string; localStorage: { name: string; value: string; }[]; }[]; } {
    if (user.endsWith("admin")) return "src/helper/auth/admin.json";
    else if (user.endsWith("lead")) return "src/helper/auth/lead.json";
}
