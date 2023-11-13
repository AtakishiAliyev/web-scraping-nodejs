import { getNewPage } from './puppeteer.js';

export async function scrapeData(browser) {
    const data = [];

    for (let page_num = 1; page_num <= 10; page_num++) {
        const page = await getNewPage(browser);
        await page.goto(`https://www.azleks.az/online-dictionary/?s=4&page=${page_num}`);

        const wordsHandles = await page.$$('.item');

        for (const wordhandle of wordsHandles) {
            const title = await wordhandle.$eval('.bash-soz > a', el => el.textContent);
            const description = await wordhandle.$eval('.izah', (el) => {
                const links = el.querySelectorAll('a');
                links.forEach(link => link.remove());
                return el.textContent;
            });

            data.push({ title, description });
        }

        await page.close();
    }

    return data;
}
