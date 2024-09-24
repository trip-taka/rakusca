import puppeteer from 'puppeteer';

export async function scrapeEngage() {
  const browser = await puppeteer.launch({
    headless: false, // headlessをfalseに設定してブラウザを表示
  });
  try {
    const page = await browser.newPage();
    const url = 'https://en-gage.net/company_login/login/';
    console.log('Navigating to URL...');
    await page.setDefaultNavigationTimeout(0); // タイムアウトを無制限に設定
    await page.goto(url, { waitUntil: 'networkidle0' });
    console.log('Page loaded.');

    // メールアドレスとパスワードの入力フィールドのセレクタ
    const emailSelector = '#loginID';
    const passwordSelector = '#password';
    const loginButtonSelector = '#login-button';

    // メールアドレスとパスワードを入力
    await Promise.all([
      await page.waitForSelector(emailSelector, { timeout: 20000 }),
      console.log('Email input found.'),
      await page.type(emailSelector, 'toyosaiyo.2.10403140@gmail.com'), // ここにメールアドレスを入力
      console.log('メールアドレス入力完了'),
    ]);
    await Promise.all([
      await page.waitForSelector(passwordSelector, { timeout: 20000 }),
      console.log('Password input found.'),
      await page.type(passwordSelector, 'toyo31402'), // ここにパスワードを入力
      console.log('パスワード入力完了'),
    ]);

    // ログインボタンをクリック
    await page.waitForSelector(loginButtonSelector, { timeout: 20000 });
    console.log('Login button found.');

    await Promise.all([
      await page.click(loginButtonSelector),
      console.log('ログインボタンクリック完了'),
      await page.waitForNavigation({ waitUntil: 'networkidle0' }),
      console.log('ページ遷移完了'),
    ]);

    // await page.click('a.MuiTypography-root.MuiTypography-body1Strong.MuiLink-root.MuiLink-underlineAlways.mui-1s2edwf');
    // await page.waitForNavigation({ waitUntil: 'networkidle0' });
    // console.log('ページ遷移完了');

    const title = await page.title();
    const content = await page.evaluate(() => {
      return document.body.innerText;
    });

    console.log(title);
    console.log(content);
    return { title, content }; // 取得したタイトルとコンテンツを返す
  } catch (error) {
    console.error('Scraping failed:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

export async function scrapeAirWork() {
  const browser = await puppeteer.launch({
    headless: false, // headlessをfalseに設定してブラウザを表示
  });
  const page = await browser.newPage();
  const url = 'https://www.google.com';

  try {
    await page.goto(url, { waitUntil: 'networkidle0' });

    // ここでスクレイピングのロジックを実装
    const title = await page.title();
    const content = await page.evaluate(() => {
      return document.body.innerText;
    });
    console.log(title);
    console.log(content);
    return { title, content };
  } catch (error) {
    console.error('Scraping failed:', error);
    throw error;
  } finally {
    await browser.close();
  }
}
