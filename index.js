import { launchBrowser, closeBrowser } from './scripts/puppeteer.js';
import { scrapeData } from './scripts/scraper.js';
import { writeToExcel } from './scripts/excel.js';

(async () => {
    const browser = await launchBrowser();
    const data = await scrapeData(browser);
    writeToExcel(data);
    await closeBrowser(browser);
})();
