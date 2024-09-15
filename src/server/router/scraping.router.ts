import { z } from 'zod';

import { scrapeAirWork, scrapeEngage } from '@/services/scraping';
import { publicProcedure, router } from '../trpc';

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
