import { z } from "zod";

import { publicProcedure, router } from "./trpc";
import { scrapingRouter } from "./router/scraping.router";

export const appRouter = router({
  scraping: scrapingRouter,
});


export type AppRouter = typeof appRouter;