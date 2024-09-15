import { z } from 'zod';

import { publicProcedure, router } from '../trpc';

export const greetingRouter = router({
  greeting1: publicProcedure.query(() => {
    return { msg: 'Hello World' };
  }),
  greeting2: publicProcedure.input(z.object({ name: z.string() })).query((opts) => {
    return { msg: `Hello ${opts.input.name ?? 'World'}` };
  }),
});
