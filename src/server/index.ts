import { scrapingRouter } from './router/scraping.router';
import { router } from './trpc';

export const appRouter = router({
  scraping: scrapingRouter,
});

export type AppRouter = typeof appRouter;
