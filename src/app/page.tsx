// "use client";

import Greeting1 from "@/components/greeting-1";
import { scrapeWebsite } from "@/services/scraping";
import { serverApi } from "./_trpc/server-api";


export default async function Home() {
  const greeting2 = await serverApi.greeting.greeting2({ name: "Next" });
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div>{JSON.stringify(greeting2)}</div>
      {/* <button className="bg-white text-black px-4 py-2 rounded-2xl" onClick={() => scrapeWebsite()}>スカウトメールテスト</button> */}
      <Greeting1 />
      </main>
    </div>
  );
}
