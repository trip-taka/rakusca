import { z } from 'zod';

import { publicProcedure, router } from '../trpc';
import { scrapeEngage, scrapeAirWork } from '@/services/scraping';

export const scrapingRouter = router({
  scrapeEngage: publicProcedure.query(() => {
    scrapeEngage();
    console.log('scrapeEngage');
    return { msg: 'Hello World' };
  }),
  scrapeAirWork: publicProcedure.query(() => {
    scrapeAirWork();
    console.log('scrapeAirWork');
    return { msg: 'Hello World' };
  }),
});
