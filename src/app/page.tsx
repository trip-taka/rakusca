import { serverApi } from './_trpc/server-api';

export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form action={requestEngageScrapeWebsite}>
          <button className="bg-white text-black px-4 py-2 rounded-2xl" type="submit">
            エンゲージスカウトメールテスト
          </button>
        </form>
        <form action={requestAirWorkScrapeWebsite}>
          <button className="bg-white text-black px-4 py-2 rounded-2xl" type="submit">
            エアワークスカウトメールテスト
          </button>
        </form>
      </main>
    </div>
  );
}

async function requestEngageScrapeWebsite() {
  'use server';
  await serverApi.scraping.scrapeEngage();
}

async function requestAirWorkScrapeWebsite() {
  'use server';
  await serverApi.scraping.scrapeAirWork();
}
