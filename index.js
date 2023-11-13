import { launchBrowser, closeBrowser } from './puppeteer.js';
import { scrapeData } from './scraper.js';
import { writeToExcel } from './excel.js';

(async () => {
    const browser = await launchBrowser();
    const data = await scrapeData(browser);
    writeToExcel(data);
    await closeBrowser(browser);
})();
