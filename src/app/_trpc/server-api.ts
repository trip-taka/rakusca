import { httpBatchLink } from '@trpc/client';

import { appRouter } from '@/server';

export const serverApi = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: `${process.env.local}/api/trpc`,
    }),
  ],
});
