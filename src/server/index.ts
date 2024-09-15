import { z } from "zod";

import { publicProcedure, router } from "./trpc";
import { greetingRouter } from "./router/greeting.router";

export const appRouter = router({
  greeting: greetingRouter,
});


export type AppRouter = typeof appRouter;