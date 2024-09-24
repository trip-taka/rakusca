const puppeteer = require('puppeteer');

(async () => {
  // ブラウザを起動
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 指定されたURLにアクセス
  await page.goto('https://ats.rct.airwork.net/interaction');

  // 必要なデータを取得（例としてページタイトルを取得）
  const pageTitle = await page.title();
  console.log(`Page Title: ${pageTitle}`);

  // ブラウザを閉じる
  await browser.close();
})();
