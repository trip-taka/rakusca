import puppeteer from 'puppeteer';

export async function scrapeEngage() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = 'https://www.google.com';

  try {
    await page.goto(url, { waitUntil: 'networkidle0' });

    // ここでスクレイピングのロジックを実装
    const title = await page.title();
    const content = await page.evaluate(() => {
      return document.body.innerText;
    });

    return { title, content };
  } catch (error) {
    console.error('Scraping failed:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

export async function scrapeAirWork() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = 'https://www.google.com';

  try {
    await page.goto(url, { waitUntil: 'networkidle0' });

    // ここでスクレイピングのロジックを実装
    const title = await page.title();
    const content = await page.evaluate(() => {
      return document.body.innerText;
    });

    return { title, content };
  } catch (error) {
    console.error('Scraping failed:', error);
    throw error;
  } finally {
    await browser.close();
  }
}
