import puppeteer from 'puppeteer';

export async function launchBrowser() {
    return await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        userDataDir: "./tmp"
    });
}

export async function getNewPage(browser) {
    return await browser.newPage();
}

export async function closeBrowser(browser) {
    await browser.close();
}
